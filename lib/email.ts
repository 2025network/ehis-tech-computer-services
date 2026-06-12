import nodemailer from "nodemailer";

type ApplicationEmailPayload = {
  fullName: string;
  email: string;
  destinationCountry: string;
  status: string;
  trackingCode: string;
  trackingUrl?: string;
};

type StatusEmailPayload = {
  fullName: string;
  email: string;
  status: string;
  trackingCode: string;
  trackingUrl?: string;
};

type AdminNoteEmailPayload = {
  fullName: string;
  email: string;
  trackingCode: string;
  adminNotes: string;
};

const defaultSiteUrl = "https://ehistech.com";

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !port || !user || !pass || !from) {
    return null;
  }

  return {
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
    from,
  };
}

function createTransporter() {
  const config = getSmtpConfig();

  if (!config) {
    console.warn("Email not sent: SMTP environment variables are not fully configured.");
    return null;
  }

  return {
    transporter: nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
    }),
    from: config.from,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getTrackingUrl(trackingCode: string) {
  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl).replace(/\/$/, "");

  return `${siteUrl}/track-application?code=${encodeURIComponent(trackingCode)}`;
}

export async function sendApplicationEmails(application: ApplicationEmailPayload) {
  const mailer = createTransporter();

  if (!mailer) {
    return;
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  const safeApplication = {
    fullName: escapeHtml(application.fullName),
    email: escapeHtml(application.email),
    destinationCountry: escapeHtml(application.destinationCountry),
    status: escapeHtml(application.status),
    trackingCode: escapeHtml(application.trackingCode),
    trackingUrl: escapeHtml(getTrackingUrl(application.trackingCode)),
  };
  const trackingUrl = getTrackingUrl(application.trackingCode);

  try {
    await mailer.transporter.sendMail({
      from: mailer.from,
      to: application.email,
      subject: `Request received - ${application.trackingCode}`,
      text: [
        `Dear ${application.fullName},`,
        "",
        "Your request has been submitted successfully.",
        "",
        `Full name: ${application.fullName}`,
        `Tracking code: ${application.trackingCode}`,
        `Product or service needed: ${application.destinationCountry}`,
        `Request status: ${application.status}`,
        `Track your request: ${trackingUrl}`,
        "",
        "Ehi's Tech Computer Services",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
          <h2 style="color: #073b7a;">Request received</h2>
          <p>Dear ${safeApplication.fullName},</p>
          <p>Your request has been submitted successfully.</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td><strong>Full name</strong></td><td>${safeApplication.fullName}</td></tr>
            <tr><td><strong>Tracking code</strong></td><td>${safeApplication.trackingCode}</td></tr>
            <tr><td><strong>Product or service needed</strong></td><td>${safeApplication.destinationCountry}</td></tr>
            <tr><td><strong>Request status</strong></td><td>${safeApplication.status}</td></tr>
          </table>
          <p><a href="${safeApplication.trackingUrl}" style="color: #0b4ea2; font-weight: bold;">Track your request</a></p>
          <p>Ehi's Tech Computer Services</p>
        </div>
      `,
    });
  } catch (error) {
    console.warn("Customer email failed:", error);
  }

  if (!adminEmail) {
    console.warn("Admin notification email not sent: ADMIN_EMAIL is not configured.");
    return;
  }

  try {
    await mailer.transporter.sendMail({
      from: mailer.from,
      to: adminEmail,
      subject: `New request submitted - ${application.trackingCode}`,
      text: [
        "A new request has been submitted.",
        "",
        `Full name: ${application.fullName}`,
        `Email: ${application.email}`,
        `Tracking code: ${application.trackingCode}`,
        `Product or service needed: ${application.destinationCountry}`,
        `Request status: ${application.status}`,
        `Tracking page: ${trackingUrl}`,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
          <h2 style="color: #073b7a;">New request submitted</h2>
          <p><strong>Full name:</strong> ${safeApplication.fullName}</p>
          <p><strong>Email:</strong> ${safeApplication.email}</p>
          <p><strong>Tracking code:</strong> ${safeApplication.trackingCode}</p>
          <p><strong>Product or service needed:</strong> ${safeApplication.destinationCountry}</p>
          <p><strong>Request status:</strong> ${safeApplication.status}</p>
          <p><a href="${safeApplication.trackingUrl}" style="color: #0b4ea2; font-weight: bold;">Open tracking page</a></p>
        </div>
      `,
    });
  } catch (error) {
    console.warn("Admin notification email failed:", error);
  }
}

const statusTemplates: Record<string, { subject: string; intro: string }> = {
  Pending: {
    subject: "Your request is pending review",
    intro:
      "Your request has been received and is pending review by our team.",
  },
  "Under Review": {
    subject: "Your request is under review",
    intro:
      "Your request is now under review. We will update you when the next step is ready.",
  },
  Approved: {
    subject: "Your request status is approved",
    intro:
      "Good news. Your request status has been updated to approved.",
  },
  Rejected: {
    subject: "Your request status update",
    intro:
      "Your request status has been updated to rejected. Please contact us if you need clarification or next-step guidance.",
  },
};

export async function sendStatusChangeEmail(application: StatusEmailPayload) {
  const mailer = createTransporter();

  if (!mailer) {
    console.warn(
      `Status notification email not sent for ${application.trackingCode}: SMTP is not configured.`
    );
    return false;
  }

  const template = statusTemplates[application.status] ?? statusTemplates.Pending;
  const safeApplication = {
    fullName: escapeHtml(application.fullName),
    status: escapeHtml(application.status),
    trackingCode: escapeHtml(application.trackingCode),
    trackingUrl: escapeHtml(getTrackingUrl(application.trackingCode)),
  };
  const trackingUrl = getTrackingUrl(application.trackingCode);

  try {
    await mailer.transporter.sendMail({
      from: mailer.from,
      to: application.email,
      subject: `${template.subject} - ${application.trackingCode}`,
      text: [
        `Dear ${application.fullName},`,
        "",
        template.intro,
        "",
        `Customer name: ${application.fullName}`,
        `Tracking code: ${application.trackingCode}`,
        `Current status: ${application.status}`,
        `Track your request: ${trackingUrl}`,
        "",
        "Ehi's Tech Computer Services",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
          <h2 style="color: #073b7a;">Request status update</h2>
          <p>Dear ${safeApplication.fullName},</p>
          <p>${escapeHtml(template.intro)}</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td><strong>Customer name</strong></td><td>${safeApplication.fullName}</td></tr>
            <tr><td><strong>Tracking code</strong></td><td>${safeApplication.trackingCode}</td></tr>
            <tr><td><strong>Current status</strong></td><td>${safeApplication.status}</td></tr>
          </table>
          <p><a href="${safeApplication.trackingUrl}" style="color: #0b4ea2; font-weight: bold;">Track your request</a></p>
          <p>Ehi's Tech Computer Services</p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.warn(
      `Status notification email failed for ${application.trackingCode}:`,
      error
    );
    return false;
  }
}

export async function sendAdminNoteEmail(application: AdminNoteEmailPayload) {
  const mailer = createTransporter();

  if (!mailer) {
    console.warn(
      `Admin note email not sent for ${application.trackingCode}: SMTP is not configured.`
    );
    return false;
  }

  const trackingUrl = getTrackingUrl(application.trackingCode);
  const safeApplication = {
    fullName: escapeHtml(application.fullName),
    trackingCode: escapeHtml(application.trackingCode),
    adminNotes: escapeHtml(application.adminNotes),
    trackingUrl: escapeHtml(trackingUrl),
  };

  try {
    await mailer.transporter.sendMail({
      from: mailer.from,
      to: application.email,
      subject: `New note on your request - ${application.trackingCode}`,
      text: [
        `Dear ${application.fullName},`,
        "",
        "A new note has been added to your request.",
        "",
        `Tracking code: ${application.trackingCode}`,
        `Admin note: ${application.adminNotes}`,
        `Track your request: ${trackingUrl}`,
        "",
        "Ehi's Tech Computer Services",
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #102033; line-height: 1.6;">
          <h2 style="color: #073b7a;">Request note update</h2>
          <p>Dear ${safeApplication.fullName},</p>
          <p>A new note has been added to your request.</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td><strong>Tracking code</strong></td><td>${safeApplication.trackingCode}</td></tr>
            <tr><td><strong>Admin note</strong></td><td>${safeApplication.adminNotes}</td></tr>
          </table>
          <p><a href="${safeApplication.trackingUrl}" style="color: #0b4ea2; font-weight: bold;">Track your request</a></p>
          <p>Ehi's Tech Computer Services</p>
        </div>
      `,
    });

    return true;
  } catch (error) {
    console.warn(`Admin note email failed for ${application.trackingCode}:`, error);
    return false;
  }
}

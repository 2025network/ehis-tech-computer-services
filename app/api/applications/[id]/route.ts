import { isAdminLoggedIn } from "@/lib/auth";
import { databaseUnavailableMessage, isDatabaseConfigured, prisma } from "@/lib/prisma";
import { jsonError, logProductionError } from "@/lib/runtime";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const loggedIn = await isAdminLoggedIn();

    if (!loggedIn) {
      return jsonError("Unauthorized.", 401);
    }

    if (!isDatabaseConfigured()) {
      return jsonError(databaseUnavailableMessage, 503);
    }

    const { id } = await params;
    const requestId = Number(id);

    if (!Number.isInteger(requestId)) {
      return jsonError("Invalid request ID.", 400);
    }

    await prisma.application.delete({
      where: { id: requestId },
    });

    return Response.json({ success: true, ok: true });
  } catch (error) {
    logProductionError("Request delete failed", error);
    return jsonError("Request could not be deleted.", 500);
  }
}

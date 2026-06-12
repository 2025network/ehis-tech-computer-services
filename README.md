# Ehi's Tech Computer Services

Trusted Laptop Sales, Accessories & IT Solutions

This is a Next.js website for Ehi's Tech Computer Services, a computer services business focused on laptop sales, accessories, repairs, upgrades, installations, and supply support for individuals, schools, offices, and organizations.

## Tech Stack

- Next.js
- React
- Tailwind CSS
- Prisma
- TypeScript

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Hostinger Deployment

Use the normal Next.js Node deployment flow on Hostinger:

```bash
npm install
npm run build
npm start
```

The production start command is `npm start`, which runs `next start`. Do not upload only the generated HTML files, and do not point Hostinger at `.next/server` or `.next/standalone`. Hostinger should run the Next.js server from the project root so `/_next/static/*` CSS/JS assets and `/public` images such as `/ehis-tech-logo.png` and `/hp-1/1.jpg` are served correctly.

If images appear missing, verify the `public` folder is present in the deployed project root and that filenames match the code exactly, including capitalization.

## Project Identity

- Company name: Ehi's Tech Computer Services
- Tagline: Trusted Laptop Sales, Accessories & IT Solutions
- Package name: `ehis-tech-computer-services`

## Notes

Update real contact details, social links, logo assets, and production URL before launch.
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

`npm run build` prepares a Hostinger-ready standalone bundle after the Next.js build by copying `.next/static` and `public` into `.next/standalone`. This is required so production CSS files, JavaScript chunks, images, and logos load correctly from `/_next/static` and `/` asset paths.

## Hostinger Deployment

For Hostinger Node.js hosting, deploy the generated `.next/standalone` bundle and make sure its included `.next/static` and `public` folders are uploaded with it. Start the app from the standalone server entry, usually `server.js`, instead of serving raw HTML files from `.next/server`.

If the deployed site appears as plain HTML, verify that requests like `/_next/static/chunks/*.css` return `200` and are not missing or blocked by the hosting file structure.

## Project Identity

- Company name: Ehi's Tech Computer Services
- Tagline: Trusted Laptop Sales, Accessories & IT Solutions
- Package name: `ehis-tech-computer-services`

## Notes

Update real contact details, social links, logo assets, and production URL before launch.

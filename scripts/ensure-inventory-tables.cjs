const { PrismaClient } = require("@prisma/client");

const databaseUrl = process.env.DATABASE_URL || "";

if (
  !databaseUrl ||
  databaseUrl.includes("DB_USER") ||
  databaseUrl.includes("DB_PASSWORD") ||
  databaseUrl.includes("DB_HOST") ||
  databaseUrl.includes("DB_NAME")
) {
  console.warn(
    "Skipping inventory setup because DATABASE_URL is missing or still uses placeholder values."
  );
  process.exit(0);
}

const prisma = new PrismaClient();

const categories = [
  ["business-laptops", "Business Laptops", "Reliable systems for work and office use."],
  ["student-laptops", "Student Laptops", "Affordable systems for learning and everyday use."],
  ["gaming-laptops", "Gaming Laptops", "Performance systems for gaming and design."],
  ["uk-used-laptops", "UK-used Laptops", "Quality-tested UK-used systems."],
  ["brand-new-laptops", "Brand-new Laptops", "New laptop options."],
];

async function main() {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "ProductCategory" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "name" TEXT NOT NULL UNIQUE,
      "slug" TEXT NOT NULL UNIQUE,
      "description" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Product" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "name" TEXT NOT NULL,
      "slug" TEXT NOT NULL UNIQUE,
      "brand" TEXT NOT NULL,
      "model" TEXT,
      "categoryId" INTEGER NOT NULL,
      "ramGb" INTEGER NOT NULL,
      "storageGb" INTEGER NOT NULL,
      "storageType" TEXT NOT NULL DEFAULT 'SSD',
      "condition" TEXT NOT NULL,
      "price" INTEGER NOT NULL,
      "status" TEXT NOT NULL DEFAULT 'Available',
      "warranty" TEXT,
      "description" TEXT NOT NULL,
      "imageUrl" TEXT,
      "featured" BOOLEAN NOT NULL DEFAULT false,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "ProductCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "QuoteRequest" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "productId" INTEGER,
      "fullName" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "email" TEXT,
      "quantity" INTEGER NOT NULL DEFAULT 1,
      "budget" INTEGER,
      "message" TEXT NOT NULL,
      "status" TEXT NOT NULL DEFAULT 'New',
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "QuoteRequest_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "BulkOrderRequest" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "organization" TEXT NOT NULL,
      "contactName" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "email" TEXT,
      "quantity" INTEGER NOT NULL,
      "budget" INTEGER,
      "requirements" TEXT NOT NULL,
      "status" TEXT NOT NULL DEFAULT 'New',
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "WarrantyRecord" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "productId" INTEGER,
      "customerName" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "serialNumber" TEXT,
      "issue" TEXT NOT NULL,
      "status" TEXT NOT NULL DEFAULT 'Received',
      "expiresAt" DATETIME,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      CONSTRAINT "WarrantyRecord_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE SET NULL ON UPDATE CASCADE
    );
  `);

  for (const [slug, name, description] of categories) {
    await prisma.productCategory.upsert({
      where: { slug },
      update: {},
      create: { slug, name, description },
    });
  }

  console.log("Inventory tables are ready.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });

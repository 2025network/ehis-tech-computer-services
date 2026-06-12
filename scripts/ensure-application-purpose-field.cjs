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
    "Skipping Application setup because DATABASE_URL is missing or still uses placeholder values."
  );
  process.exit(0);
}

const prisma = new PrismaClient();

async function columnExists(table, column) {
  const columns = await prisma.$queryRawUnsafe(`PRAGMA table_info("${table}");`);
  return columns.some((item) => item.name === column);
}

async function addColumnIfMissing(table, column, definition) {
  if (!(await columnExists(table, column))) {
    await prisma.$executeRawUnsafe(`ALTER TABLE "${table}" ADD COLUMN "${column}" ${definition};`);
  }
}

async function main() {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "Application" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "fullName" TEXT NOT NULL,
      "phone" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "destinationCountry" TEXT NOT NULL,
      "purposeOfTravel" TEXT,
      "travelPurpose" TEXT NOT NULL,
      "message" TEXT NOT NULL,
      "status" TEXT NOT NULL DEFAULT 'Pending',
      "adminNotes" TEXT,
      "trackingCode" TEXT NOT NULL UNIQUE,
      "passportUploadPath" TEXT,
      "passportPhotoPath" TEXT,
      "bankStatementPath" TEXT,
      "supportingDocPath" TEXT,
      "passportUploadOriginalPath" TEXT,
      "passportUploadOptimizedPath" TEXT,
      "passportUploadOriginalSize" INTEGER,
      "passportUploadOptimizedSize" INTEGER,
      "passportPhotoOriginalPath" TEXT,
      "passportPhotoOptimizedPath" TEXT,
      "passportPhotoOriginalSize" INTEGER,
      "passportPhotoOptimizedSize" INTEGER,
      "bankStatementOriginalPath" TEXT,
      "bankStatementOptimizedPath" TEXT,
      "bankStatementOriginalSize" INTEGER,
      "bankStatementOptimizedSize" INTEGER,
      "supportingDocOriginalPath" TEXT,
      "supportingDocOptimizedPath" TEXT,
      "supportingDocOriginalSize" INTEGER,
      "supportingDocOptimizedSize" INTEGER,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await addColumnIfMissing("Application", "purposeOfTravel", "TEXT");
  await addColumnIfMissing("Application", "adminNotes", "TEXT");

  console.log("Application request table is ready.");
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

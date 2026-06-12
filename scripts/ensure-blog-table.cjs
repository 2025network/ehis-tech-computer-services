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
    "Skipping BlogPost table setup because DATABASE_URL is missing or still uses placeholder values."
  );
  process.exit(0);
}

const prisma = new PrismaClient();

const starterPosts = [
  {
    title: "How to Choose a Laptop for School or Work",
    slug: "how-to-choose-a-laptop-for-school-or-work",
    excerpt:
      "A simple guide to choosing RAM, SSD size, processor class, and condition before buying a laptop.",
    featuredImage:
      "/hp-1/1.jpg",
    content:
      "Choosing a laptop starts with your daily tasks, budget, and expected lifespan. Students may need portability and battery life, while office users may need stronger multitasking, reliable keyboards, and SSD storage. Ehi's Tech Computer Services helps customers compare options before buying.",
  },
  {
    title: "RAM vs SSD Upgrade: What Makes a Laptop Faster?",
    slug: "ram-vs-ssd-upgrade-what-makes-a-laptop-faster",
    excerpt:
      "Understand when to upgrade RAM, when to upgrade SSD storage, and how both affect laptop performance.",
    featuredImage:
      "/hp-1/1.jpg",
    content:
      "RAM helps with multitasking, while SSD storage improves boot time, app loading, and overall responsiveness. Many slow laptops feel new again after a practical SSD upgrade. Ehi's Tech can inspect your system and recommend the right upgrade path.",
  },
  {
    title: "What to Check Before Buying a UK-used Laptop",
    slug: "what-to-check-before-buying-a-uk-used-laptop",
    excerpt:
      "Battery health, keyboard condition, display quality, storage type, and warranty terms are key checks.",
    featuredImage:
      "/hp-1/1.jpg",
    content:
      "A good UK-used laptop should be checked for screen quality, keyboard function, ports, battery condition, storage health, and charger compatibility. Clear warranty terms also matter. Ehi's Tech focuses on quality-tested devices and practical after-sales support.",
  },
];

async function main() {
  await prisma.$executeRawUnsafe(`
    CREATE TABLE IF NOT EXISTS "BlogPost" (
      "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      "title" TEXT NOT NULL,
      "slug" TEXT NOT NULL UNIQUE,
      "excerpt" TEXT NOT NULL,
      "content" TEXT NOT NULL,
      "featuredImage" TEXT NOT NULL,
      "published" BOOLEAN NOT NULL DEFAULT false,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);

  for (const post of starterPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        ...post,
        published: true,
      },
    });
  }

  console.log("BlogPost table is ready.");
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

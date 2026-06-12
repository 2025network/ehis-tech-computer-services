import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { SocialLinks } from "../components/SocialLinks";
import { WhatsAppCta } from "../components/WhatsAppCta";
import { prisma } from "@/lib/prisma";
import { logProductionError } from "@/lib/runtime";
import { BlogList } from "./BlogList";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Laptop buying, computer accessories, repairs, upgrades, software installation, and IT support articles from Ehi's Tech Computer Services.",
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Laptop and IT Support Blog",
    description:
      "Helpful laptop, accessories, repair, upgrade, and IT support guides from Ehi's Tech Computer Services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laptop and IT Support Blog",
    description:
      "Helpful laptop, accessories, repair, upgrade, and IT support guides from Ehi's Tech Computer Services.",
  },
};

export default async function BlogPage() {
  let blogLoadError = "";
  const posts = await (async () => {
    try {
      return await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      });
    } catch (error) {
      logProductionError("Public blog posts load failed", error);
      blogLoadError =
        "Articles could not be loaded right now. Please check back shortly.";
      return [];
    }
  })();

  return (
    <PageShell>
      <section className="bg-[#f4f8ff] py-14 sm:py-16">
        <div className="section-shell max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-wide text-[#d9a441]">Blog</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-[#073b7a] sm:text-5xl">
            Laptop and IT guidance for confident buying and support.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Read practical articles on laptop buying, accessories, repairs, upgrades, software
            setup, and common computer support decisions.
          </p>
        </div>
      </section>

      <section className="section-shell py-12 sm:py-16">
        <div className="mb-8 rounded bg-[#fff3d8] p-5 ring-1 ring-[#f0d89c] md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h2 className="text-xl font-bold text-[#073b7a]">Follow our tech updates</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Connect with us for laptop tips, stock updates, accessory advice, and IT support.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 md:mt-0">
            <SocialLinks />
            <WhatsAppCta />
          </div>
        </div>
        {posts.length > 0 ? (
          <BlogList
            posts={posts.map((post) => ({
              id: post.id,
              title: post.title,
              slug: post.slug,
              excerpt: post.excerpt,
              content: post.content,
              featuredImage: post.featuredImage,
              createdAt: post.createdAt.toISOString(),
            }))}
          />
        ) : (
          <div className="rounded bg-white p-8 text-center shadow-sm ring-1 ring-blue-100">
            <h2 className="text-xl font-bold text-[#073b7a]">
              {blogLoadError ? "Articles temporarily unavailable" : "Articles are coming soon"}
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              {blogLoadError || "New laptop and IT support resources will appear here after publishing."}
            </p>
          </div>
        )}
      </section>
    </PageShell>
  );
}

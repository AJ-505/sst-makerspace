import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  BlogPostCard,
  BlogStatsBar,
  CategoryFilterBar,
  FeaturedPostCard,
} from "@/components/blog/cards";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/components/blog/constants";
import { PenLine } from "lucide-react";

export default function BlogPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) ?? BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black px-4 py-20 text-white sm:px-8">
        {/* Background decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          {/* Purple gradient wash -- inspired by the impact report screenshot */}
          <div className="absolute top-0 -left-32 h-full w-96 bg-gradient-to-r from-[#7C3AED]/20 to-transparent" />
          <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#D97706]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="font-anaheim mb-3 text-xs font-bold tracking-[0.2em] text-[#D97706]">
                PUBLICATIONS & RESEARCH
              </p>
              <h1 className="font-urbanist mb-4 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Ideas That
                <br />
                <span className="text-[#7C3AED]">Build Futures</span>
              </h1>
              <p className="font-poppins max-w-xl text-base leading-relaxed text-gray-400">
                Articles, research papers, and case studies from the people of
                SST Makerspace -- documenting the journey of innovation in
                Nigerian engineering.
              </p>
            </div>

            {/* Stats bar on the right side of hero */}
            <div className="w-full md:w-auto">
              <div className="grid grid-cols-2 gap-6 md:grid-cols-2 md:gap-8">
                <div className="text-center md:text-right">
                  <div className="font-urbanist text-4xl font-bold text-[#7C3AED]">
                    6+
                  </div>
                  <div className="font-anaheim text-xs text-gray-500">
                    Publications
                  </div>
                </div>
                <div className="text-center md:text-right">
                  <div className="font-urbanist text-4xl font-bold text-[#D97706]">
                    4
                  </div>
                  <div className="font-anaheim text-xs text-gray-500">
                    Authors
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="bg-gray-50 px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-px flex-1 bg-[#7C3AED]/20" />
            <span className="font-anaheim text-xs font-bold tracking-[0.15em] text-[#7C3AED]">
              FEATURED
            </span>
            <div className="h-px flex-1 bg-[#7C3AED]/20" />
          </div>
          <FeaturedPostCard post={featuredPost} />
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="bg-white px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-urbanist text-3xl font-bold text-[#D97706] sm:text-4xl">
                All Publications
              </h2>
              <p className="font-poppins mt-2 text-sm text-gray-500">
                Browse through articles, research papers, and case studies from
                our community.
              </p>
            </div>
            <CategoryFilterBar categories={BLOG_CATEGORIES} active="all" />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {otherPosts.map((post, idx) => (
              <BlogPostCard key={post.slug} post={post} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 px-4 py-12 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <BlogStatsBar />
        </div>
      </section>

      {/* CTA: Contribute */}
      <section className="relative bg-gray-50 px-4 py-20 sm:px-8">
        {/* Decorative side accents -- matching homepage CTA pattern */}
        <div className="absolute top-0 left-0 h-full w-10 sm:w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 0 200 Q 50 100 100 200 Q 50 300 0 400" fill="#7C3AED" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 h-full w-10 sm:w-32">
          <svg viewBox="0 0 100 400" className="h-full w-full">
            <path d="M 100 0 Q 50 100 0 200 Q 50 300 100 400" fill="#D97706" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-xl sm:p-12">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#7C3AED]/10">
            <PenLine size={28} className="text-[#7C3AED]" />
          </div>
          <h2 className="font-urbanist mb-4 text-center text-3xl font-bold text-[#7C3AED] sm:text-4xl">
            Have something to share?
          </h2>
          <p className="font-poppins mx-auto mb-8 max-w-2xl text-center text-gray-600">
            Whether it&apos;s a research paper, a project write-up, or an
            opinion on the future of hardware in Africa -- we want to hear from
            you. SST Makerspace is your platform.
          </p>
          <div className="flex justify-center">
            <Button className="font-urbanist bg-[#7C3AED] px-8 py-6 text-lg font-bold text-white hover:bg-[#6D28D9]">
              SUBMIT YOUR WORK
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

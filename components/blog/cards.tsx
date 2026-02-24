import Image from "next/image";
import { Instagram, Linkedin, ArrowRight, Clock, BookOpen } from "lucide-react";
import type { BlogPost } from "./constants";

function categoryLabel(category: BlogPost["category"]) {
  const labels: Record<BlogPost["category"], string> = {
    article: "ARTICLE",
    "research-paper": "RESEARCH PAPER",
    "case-study": "CASE STUDY",
    opinion: "OPINION",
  };
  return labels[category];
}

function categoryColor(category: BlogPost["category"]) {
  const colors: Record<BlogPost["category"], string> = {
    article: "bg-[#7C3AED] text-white",
    "research-paper": "bg-[#D97706] text-white",
    "case-study": "bg-[#92400E] text-white",
    opinion: "bg-black text-white",
  };
  return colors[category];
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function FeaturedPostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl bg-black">
      <div className="grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative h-72 overflow-hidden md:h-auto md:min-h-[480px]">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-black/60 md:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />

          {/* Large index number overlay — editorial style from the inspiration */}
          <div className="font-urbanist absolute top-6 left-6 text-8xl leading-none font-bold text-white/10 select-none">
            01
          </div>
        </div>

        {/* Content side */}
        <div className="relative flex flex-col justify-center p-8 text-white md:p-12">
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`font-anaheim inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wider ${categoryColor(post.category)}`}
            >
              {categoryLabel(post.category)}
            </span>
            <span className="font-anaheim text-xs text-white/60">FEATURED</span>
          </div>

          <h2 className="font-urbanist mb-4 text-2xl leading-tight font-bold md:text-3xl lg:text-4xl">
            {post.title}
          </h2>

          {post.publishedIn && (
            <p className="font-anaheim mb-2 text-sm">
              <span className="text-white/60">Published in: </span>
              <span className="text-[#D97706]">{post.publishedIn}</span>
            </p>
          )}

          <p className="font-poppins mb-6 line-clamp-3 text-sm leading-relaxed text-white/70">
            {post.excerpt}
          </p>

          {/* Author row */}
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#7C3AED]">
              <Image
                src={post.author.avatarUrl}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="48px"
              />
            </div>
            <div className="flex-1">
              <p className="font-urbanist text-sm font-semibold text-[#D97706]">
                {post.author.name}
              </p>
              <p className="font-anaheim text-xs text-white/50">
                {post.author.role}
              </p>
            </div>
            <div className="font-anaheim flex items-center gap-1.5 text-xs text-white/50">
              <Clock size={14} />
              {post.readTime}
            </div>
          </div>

          {/* Read more link */}
          <div className="mt-8">
            <span className="font-urbanist inline-flex items-center gap-2 text-sm font-bold text-[#7C3AED] transition-colors group-hover:text-[#D97706]">
              READ FULL ARTICLE
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogPostCard({
  post,
  index,
}: {
  post: BlogPost;
  index: number;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl">
      {/* Cover image with overlay index */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Index number — editorial style */}
        <div className="font-urbanist absolute right-4 bottom-3 text-5xl leading-none font-bold text-white/20 select-none">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`font-anaheim inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-wider ${categoryColor(post.category)}`}
          >
            {categoryLabel(post.category)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span className="font-anaheim text-xs text-gray-500">
            {formatDate(post.date)}
          </span>
          <span className="h-1 w-1 rounded-full bg-gray-300" />
          <span className="font-anaheim flex items-center gap-1 text-xs text-gray-500">
            <Clock size={12} />
            {post.readTime}
          </span>
        </div>

        <h3 className="font-urbanist mb-2 text-lg leading-snug font-bold text-gray-900 transition-colors group-hover:text-[#7C3AED]">
          {post.title}
        </h3>

        {post.publishedIn && (
          <p className="font-anaheim mb-2 text-xs">
            <span className="text-gray-400">Published in: </span>
            <span className="text-[#D97706]">{post.publishedIn}</span>
          </p>
        )}

        <p className="font-poppins mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>

        {/* Author & social row */}
        <div className="mt-auto border-t border-gray-100 pt-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-[#7C3AED]/20">
              <Image
                src={post.author.avatarUrl}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-urbanist truncate text-sm font-semibold text-[#7C3AED]">
                {post.author.name}
              </p>
              <p className="font-anaheim truncate text-[11px] text-gray-400">
                {post.author.role}
              </p>
            </div>
            <div className="flex gap-1.5">
              {post.author.socials?.linkedin && (
                <a
                  href={post.author.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${post.author.name} LinkedIn`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-[#7C3AED] hover:text-white"
                >
                  <Linkedin size={13} />
                </a>
              )}
              {post.author.socials?.instagram && (
                <a
                  href={post.author.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${post.author.name} Instagram`}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-400 transition-colors hover:bg-[#7C3AED] hover:text-white"
                >
                  <Instagram size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export function BlogStatsBar() {
  const stats = [
    { value: "6+", label: "Publications" },
    { value: "4", label: "Authors" },
    { value: "3", label: "Categories" },
    { value: "2025", label: "Latest Year" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <div className="font-urbanist text-3xl font-bold text-[#7C3AED] md:text-4xl">
            {stat.value}
          </div>
          <div className="font-anaheim text-sm text-gray-500">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}

export function CategoryFilterBar({
  categories,
  active,
}: {
  categories: { label: string; value: string }[];
  active: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          className={`font-anaheim rounded-full px-5 py-2 text-xs font-bold tracking-wider transition-colors ${
            active === cat.value
              ? "bg-[#7C3AED] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}

export function EmptyBlogCTA() {
  return (
    <div className="rounded-3xl border-2 border-dashed border-[#7C3AED]/20 p-12 text-center">
      <BookOpen size={48} className="mx-auto mb-4 text-[#7C3AED]/30" />
      <h3 className="font-urbanist mb-2 text-xl font-bold text-gray-700">
        More articles coming soon
      </h3>
      <p className="font-poppins mx-auto max-w-md text-sm text-gray-500">
        Our members are constantly working on new research and publications.
        Check back soon for the latest from SST Makerspace.
      </p>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS } from "../../data/news";

// ── Static params for Next.js to pre-render all news pages ──────────────────
export function generateStaticParams() {
  return NEWS.map((item) => ({ slug: item.slug }));
}

// ── Meta ─────────────────────────────────────────────────────────────────────
export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) return {};
  return {
    title: `${item.title} — StudentsxCEOs Jakarta`,
    description: item.excerpt,
  };
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function NewsDetail({ params }: { params: { slug: string } }) {
  const item = NEWS.find((n) => n.slug === params.slug);
  if (!item) return notFound();

  // Related articles — up to 3 others, excluding current
  const related = NEWS.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <main className="relative w-full bg-black text-white overflow-hidden">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[70vh] flex items-end">
        {/* Cover image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={item.cover}
            alt={item.title}
            fill
            priority
            className="object-cover"
          />
          {/* Dark gradient overlay — heavier at bottom for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20" />
          {/* Subtle blue accent glow matching site palette */}
          <div className="absolute bottom-0 left-0 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 w-full mx-auto max-w-5xl px-6 sm:px-10 pb-14 sm:pb-20">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-sm bg-zinc-800 group-hover:bg-blue-600 transition-colors text-[11px]">
              ←
            </span>
            Back to Home
          </Link>

          {/* Category pill */}
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs font-semibold tracking-widest uppercase">
              {item.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.05] max-w-3xl">
            {item.title}
          </h1>

          {/* Meta row */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-zinc-400">
            {item.author && (
              <span className="flex items-center gap-2">
                <span className="h-1 w-4 bg-blue-600 inline-block rounded-full" />
                {item.author}
              </span>
            )}
            <span>{item.date}</span>
          </div>
        </div>
      </section>

      {/* ── Body ─────────────────────────────────────────────────────────── */}
      <section className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left accent bar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 flex flex-col items-center gap-3">
              <div className="h-20 w-[2px] bg-blue-600" />
              <div className="h-2 w-2 rounded-full bg-blue-600" />
            </div>
          </div>

          {/* Article body */}
          <div className="lg:col-span-8">
            {/* Excerpt / lead paragraph */}
            <p className="text-xl sm:text-2xl text-zinc-200 font-medium leading-relaxed border-l-2 border-blue-600 pl-5 mb-10">
              {item.excerpt}
            </p>

            {/* Full content — split on double newline into paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed">
              {item.content.split("\n\n").map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

            {/* Gallery — only rendered if images exist */}
            {item.images.length > 0 && (
              <div className="mt-14">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-10 bg-blue-600" />
                  <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">Gallery</span>
                </div>
                <div className={`grid gap-4 ${item.images.length === 1 ? "grid-cols-1" : item.images.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
                  {item.images.map((src, i) => (
                    <div
                      key={i}
                      className={`relative overflow-hidden rounded-lg bg-neutral-900 ${i === 0 && item.images.length >= 3 ? "col-span-2 sm:col-span-2 aspect-[16/9]" : "aspect-[4/3]"}`}
                    >
                      <Image
                        src={src}
                        alt={`${item.title} — image ${i + 1}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              {/* Share / actions block */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Share</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(item.title)}&url=${encodeURIComponent(`https://sxcjakarta.com/news/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-800 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-xs font-bold">X</span>
                    Share on X
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sxcjakarta.com/news/${item.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-300 hover:text-white transition-colors group"
                  >
                    <span className="h-8 w-8 rounded-md bg-zinc-800 group-hover:bg-blue-600 transition-colors flex items-center justify-center text-xs font-bold">in</span>
                    Share on LinkedIn
                  </a>
                </div>
              </div>

              {/* Category tag */}
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-5">
                <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">Category</p>
                <span className="inline-flex px-3 py-1 rounded-full bg-blue-600/20 border border-blue-600/40 text-blue-400 text-xs font-semibold tracking-wider">
                  {item.category}
                </span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── Related Articles ─────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="relative z-10 w-full border-t border-zinc-800/60 py-14 sm:py-20">
          {/* Subtle background blob matching site style */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-32 left-1/4 w-[500px] h-[400px] rounded-full bg-blue-600/5 blur-[100px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-1 w-10 bg-blue-600" />
              <h2 className="text-2xl sm:text-3xl font-extrabold">More Articles</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/news/${rel.slug}`}
                  className="group relative h-[360px] overflow-hidden rounded-xl bg-neutral-900"
                >
                  {/* Cover image */}
                  <Image
                    src={rel.cover}
                    alt={rel.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Blue accent line on hover */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase mb-2">
                      {rel.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-semibold leading-snug group-hover:text-blue-100 transition-colors">
                      {rel.title}
                    </h3>
                    <p className="mt-2 text-xs text-zinc-400">{rel.date}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Back to all news CTA ─────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-14 sm:py-20 flex flex-col items-center text-center px-6">
        <div className="h-1 w-16 bg-blue-600 mb-6" />
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">Stay in the loop</h2>
        <p className="text-zinc-400 max-w-md mb-8">
          Explore more research, insights, and stories from the StudentsxCEOs Jakarta community.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-7 py-3 rounded-md"
        >
          Back to Home
          <span className="text-sm">→</span>
        </Link>
      </section>

    </main>
  );
}
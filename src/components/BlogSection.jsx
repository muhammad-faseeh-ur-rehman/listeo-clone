import { ArrowUpRight, CalendarDays } from "lucide-react";
const posts = [
  {
    category: "Travel",
    date: "October 08, 2026",
    title: "Discover the best places to visit this season",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Lifestyle",
    date: "October 05, 2026",
    title: "A guide to finding your next favorite spot",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=85",
  },
  {
    category: "Inspiration",
    date: "September 28, 2026",
    title: "Small businesses making a big difference",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=85",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-9 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
              News & inspiration
            </p>
            <h2 className="text-2xl font-semibold text-[#292a31]">
              From the Blog
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Stories, tips, and ideas from our community
            </p>
          </div>
          <a
            href="#footer"
            className="hidden items-center gap-1 text-xs font-semibold text-[#f04472] sm:inline-flex"
          >
            All articles <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group relative h-[320px] overflow-hidden rounded-xl bg-gray-200"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
              <div className="absolute left-4 top-4">
                <span className="rounded-full bg-[#f04472] px-3 py-1.5 text-[10px] font-semibold text-white">
                  {post.category}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="mb-3 flex items-center gap-1.5 text-[11px] text-white/80">
                  <CalendarDays size={13} />
                  {post.date}
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <a
                  href="#footer"
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white transition group-hover:text-pink-200"
                >
                  Read article <ArrowUpRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
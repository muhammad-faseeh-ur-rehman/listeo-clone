import {
  MapPin,
  Star,
  Heart,
  ArrowUpRight,
} from "lucide-react";

const listings = [
  {
    name: "The Modern Kitchen",
    category: "Restaurant",
    location: "New York, United States",
    rating: "4.8",
    reviews: 124,
    price: "$$",
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Green Garden Cafe",
    category: "Cafe & Coffee",
    location: "Brooklyn, New York",
    rating: "4.6",
    reviews: 86,
    price: "$",
    badge: "Featured",
    image:
      "https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luxury Stay Hotel",
    category: "Hotel",
    location: "Manhattan, New York",
    rating: "4.9",
    reviews: 213,
    price: "$$$",
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
];

function ListingCard({ item }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-3 top-3 rounded-full bg-[#f04472] px-3 py-1 text-[10px] font-semibold text-white">
          {item.badge}
        </span>

        <button
          type="button"
          aria-label={`Save ${item.name}`}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-gray-500 transition hover:text-[#f04472]"
        >
          <Heart size={15} />
        </button>

        <span className="absolute bottom-3 left-3 rounded bg-white px-2 py-1 text-[10px] font-semibold text-gray-700">
          {item.category}
        </span>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-[15px] font-semibold text-[#303039]">
            {item.name}
          </h3>
          <ArrowUpRight
            size={16}
            className="shrink-0 text-gray-400"
          />
        </div>

        <p className="mb-3 flex items-center gap-1.5 text-xs text-gray-500">
          <MapPin size={13} className="text-[#f04472]" />
          {item.location}
        </p>

        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1 text-xs">
            <Star
              size={14}
              fill="#ffb547"
              className="text-[#ffb547]"
            />
            <span className="font-semibold">{item.rating}</span>
            <span className="text-gray-400">
              ({item.reviews})
            </span>
          </div>

          <span className="text-xs font-semibold text-[#f04472]">
            {item.price}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TrendingListings() {
  return (
    <section id="trending" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
              Handpicked for you
            </p>
            <h2 className="text-2xl font-semibold text-[#292a31]">
              Trending Listings
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Discover the most popular places in town
            </p>
          </div>

          <a
            href="#blog"
            className="text-sm font-semibold text-[#f04472] hover:underline"
          >
            View all listings →
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <ListingCard item={item} key={item.name} />
          ))}
        </div>
      </div>
    </section>
  );
}
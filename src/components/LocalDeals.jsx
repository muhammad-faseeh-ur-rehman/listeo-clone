import { ArrowRight, MapPin, Tag } from "lucide-react";

const deals = [
  {
    title: "Weekend Dining Special",
    place: "The Modern Kitchen",
    discount: "25% OFF",
    description: "Enjoy delicious meals with friends and family.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Relax & Recharge",
    place: "Luxury Wellness Spa",
    discount: "30% OFF",
    description: "Treat yourself to a refreshing wellness experience.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80",
  },
  {
    title: "Coffee & More",
    place: "Green Garden Cafe",
    discount: "15% OFF",
    description: "Discover your new favorite coffee and treats.",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=700&q=80",
  },
];

export default function LocalDeals() {
  return (
    <section className="bg-[#f8f8f9] py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-9 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
            Save more
          </p>
          <h2 className="text-2xl font-semibold text-[#292a31]">
            Local Deals
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Exclusive offers from places you will love
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {deals.map((deal) => (
            <article
              key={deal.title}
              className="overflow-hidden rounded-xl border border-gray-100 bg-white p-3"
            >
              <div className="relative h-40 overflow-hidden rounded-lg">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#f04472]">
                  <Tag size={12} />
                  {deal.discount}
                </span>
              </div>

              <div className="px-1 pb-1 pt-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  {deal.title}
                </h3>

                <p className="mt-2 flex items-center gap-1.5 text-xs text-gray-500">
                  <MapPin size={13} className="text-[#f04472]" />
                  {deal.place}
                </p>

                <p className="mt-3 text-xs leading-5 text-gray-500">
                  {deal.description}
                </p>

                <a
                  href="#how-it-works"
                  className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#f04472] px-4 py-2 text-xs font-semibold text-[#f04472] transition hover:bg-[#f04472] hover:text-white"
                >
                  Explore Deal <ArrowRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
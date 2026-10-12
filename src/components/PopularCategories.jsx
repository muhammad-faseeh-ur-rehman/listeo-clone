import {
  Utensils,
  BedDouble,
  ShoppingBag,
  Dumbbell,
  HeartPulse,
  Car,
} from "lucide-react";

const categories = [
  { name: "Restaurants", icon: Utensils, count: 125 },
  { name: "Hotels", icon: BedDouble, count: 86 },
  { name: "Shopping", icon: ShoppingBag, count: 94 },
  { name: "Fitness", icon: Dumbbell, count: 42 },
  { name: "Healthcare", icon: HeartPulse, count: 67 },
  { name: "Automotive", icon: Car, count: 38 },
];

export default function PopularCategories() {
  return (
    <section className="bg-[#f8f8f9] py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
            Explore
          </p>
          <h2 className="text-2xl font-semibold text-[#292a31]">
            Popular Categories
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Find the best places around you
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map(({ name, icon: Icon, count }) => (
            <a
              href="#trending"
              key={name}
              className="group flex flex-col items-center rounded-lg bg-white px-3 py-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#fff0f4] text-[#f04472] transition group-hover:bg-[#f04472] group-hover:text-white">
                <Icon size={19} strokeWidth={1.7} />
              </div>

              <h3 className="text-xs font-semibold text-gray-800">
                {name}
              </h3>
              <p className="mt-1 text-[11px] text-gray-400">
                {count} listings
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
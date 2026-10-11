
import {
  Sparkles,
  Zap,
  MapPin,
  ChevronDown,
  Utensils,
  House,
  BriefcaseBusiness,
  Music,
  Search,
  UserRound,
} from "lucide-react";

const categories = [
  { label: "Eat & Drink", icon: Utensils },
  { label: "Apartments", icon: House },
  { label: "Services", icon: UserRound },
  { label: "Events", icon: Music },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-[780px] items-center justify-center overflow-hidden bg-[#292929] px-5 pb-14 pt-36 text-white sm:min-h-[850px]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-[1580px] pt-10 text-center">

        <h1 className="mx-auto max-w-4xl text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl lg:text-[62px]">
          Find Nearby Coffee
          <span className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-1 animate-pulse bg-white" />
        </h1>

        <p className="mt-5 text-lg font-medium text-white/75 sm:text-2xl md:text-[30px]">
          Explore top-rated attractions, activities and more!
        </p>

        {/* Search bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const query = data.get("search");
            const location = data.get("location");
            const category = data.get("category");

            alert(
              `Search: ${query || "Any"}\nLocation: ${location || "Any"}\nCategory: ${category}`
            );
          }}
          className="mx-auto mt-16 flex max-w-[1580px] flex-col gap-3 rounded-[32px] bg-white p-3 text-[#777] shadow-2xl md:flex-row md:items-center md:gap-0 md:rounded-full md:px-5 md:py-3"
        >
          {/* AI search */}
          <label className="flex min-h-[66px] flex-1 items-center gap-3 border-b border-gray-200 px-4 md:border-b-0 md:border-r md:px-5">
            <Sparkles size={25} className="shrink-0 text-orange-400" />
            <input
              type="text"
              name="search"
              placeholder="AI Search"
              className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#888]"
            />
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-fuchsia-500 text-white">
              <Zap size={21} fill="white" />
            </span>
          </label>

          {/* Location */}
          <label className="flex min-h-[66px] flex-1 items-center gap-3 border-b border-gray-200 px-4 md:border-b-0 md:border-r md:px-10">
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="min-w-0 flex-1 bg-transparent text-lg outline-none placeholder:text-[#888]"
            />
            <MapPin size={23} fill="#999" className="shrink-0 text-white" />
          </label>

          {/* Category */}
          <label className="flex min-h-[66px] flex-1 items-center gap-3 px-4 md:px-10">
            <select
              name="category"
              defaultValue=""
              className="min-w-0 flex-1 appearance-none bg-transparent text-lg text-[#888] outline-none"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="eat-drink">Eat &amp; Drink</option>
              <option value="apartments">Apartments</option>
              <option value="services">Services</option>
              <option value="events">Events</option>
            </select>
            <ChevronDown size={22} className="shrink-0" />
          </label>

          {/* Search button */}
          <button
            type="submit"
            className="flex min-h-[66px] shrink-0 items-center justify-center gap-2 rounded-full bg-[#ff1744] px-12 text-xl font-bold text-white transition hover:bg-[#e90035] md:min-w-[200px]"
          >
            <Search size={21} className="md:hidden" />
            Search
          </button>
        </form>

        {/* Featured categories */}
        <div className="mt-16">
          <h2 className="mb-6 text-lg font-semibold sm:text-xl">
            Or browse featured categories:
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map(({ label, icon: Icon }) => (
              <button
                type="button"
                key={label}
                onClick={() => {
                  document.querySelector('[name="category"]').value =
                    label.toLowerCase().replaceAll(" ", "-");
                }}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/15 px-5 py-3 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-[#ff1744] sm:px-6 sm:text-lg"
              >
                <Icon size={25} strokeWidth={1.4} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Floating chat greeting */}
      <div className="absolute bottom-28 right-5 hidden items-center gap-3 rounded-xl bg-white px-6 py-5 text-base text-[#555] shadow-lg md:flex lg:right-8">
        <span>👋</span>
        Hello! I can help you find listings!
        <span className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 bg-white" />
      </div>

      {/* Floating chat button */}
      <button
        type="button"
        aria-label="Chat assistance"
        className="absolute bottom-5 right-5 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-[#171717] shadow-xl transition hover:bg-[#ff1744] md:bottom-8 md:right-8"
      >
        <BriefcaseBusiness size={33} strokeWidth={1.6} />
      </button>
    </section>
  );
}

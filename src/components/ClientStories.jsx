import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
export default function ClientStories() {
  return (
    <section className="overflow-hidden bg-[#f8f8f9] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
            Real experiences
          </p>
          <h2 className="text-2xl font-semibold text-[#292a31]">
            Client Stories
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            See what our community has to say
          </p>
        </div>
        <div className="grid overflow-hidden rounded-2xl bg-white md:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <Quote
              size={32}
              className="mb-5 text-[#f04472]"
              fill="#fce0e8"
            />
            <div className="mb-5 flex gap-1 text-[#ffb547]">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} fill="currentColor" />
              ))}
            </div>
            <h3 className="text-xl font-semibold leading-relaxed text-[#303039] sm:text-2xl">
              “Finding the right local businesses has never been
              easier.”
            </h3>
            <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
              This platform helped us discover amazing places and
              connect with businesses in our community. The experience
              is simple, helpful, and enjoyable.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Client portrait"
                className="h-12 w-12 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  Sarah Mitchell
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Local business owner
                </p>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#f04472] hover:text-[#f04472]"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition hover:border-[#f04472] hover:text-[#f04472]"
              >
                <ChevronRight size={17} />
              </button>
            </div>
          </div>

          <div className="relative min-h-64 md:min-h-[430px]">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="Business team working together"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="text-xs font-medium uppercase tracking-widest">
                Built around community
              </p>
              <p className="mt-2 text-xl font-semibold">
                Discover. Connect. Grow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
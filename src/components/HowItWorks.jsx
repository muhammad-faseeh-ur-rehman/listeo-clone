import {
  Search,
  CalendarCheck,
  Store,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    eyebrow: "Discover places",
    title: "Beautiful listings, published in minutes.",
    description:
      "Create your listing and help people discover your business. Share your story, showcase your services, and reach more customers.",
    points: ["Easy listing creation", "Reach local customers"],
    button: "Create a listing",
    icon: Search,
    bg: "#fde0e7",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  },
  {
    eyebrow: "Plan your visit",
    title: "Take bookings with you on the go.",
    description:
      "Make planning simple for your customers. Manage reservations and keep track of your bookings from one convenient place.",
    points: ["Simple booking process", "Manage reservations"],
    button: "Explore bookings",
    icon: CalendarCheck,
    bg: "#fcebd9",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
  },
  {
    eyebrow: "Grow your business",
    title: "Turn visitors into regulars.",
    description:
      "Build stronger customer relationships, promote special offers, and give visitors a reason to come back again.",
    points: ["Promote your business", "Connect with customers"],
    button: "Grow your audience",
    icon: Store,
    bg: "#eaf0d8",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
  },
  {
    eyebrow: "Promote your brand",
    title: "Your directory, your paycheck.",
    description:
      "Bring your business to a wider audience with powerful listing tools and new opportunities to earn.",
    points: ["Flexible listing options", "More ways to grow"],
    button: "Get started",
    icon: Megaphone,
    bg: "#f0e1ef",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80",
  },
];

function FeaturePanel({ step, index }) {
  const Icon = step.icon;
  const reverse = index % 2 === 1;

  return (
    <article
      className={`grid items-center gap-7 overflow-hidden rounded-2xl p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
      style={{ backgroundColor: step.bg }}
    >
      <div>
        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/80 text-[#f04472]">
          <Icon size={21} strokeWidth={1.7} />
        </div>

        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          {step.eyebrow}
        </p>

        <h3 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-[#303039] sm:text-3xl">
          {step.title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-gray-600">
          {step.description}
        </p>

        <ul className="mt-4 space-y-2">
          {step.points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-xs text-gray-600"
            >
              <CheckCircle2
                size={15}
                className="shrink-0 text-[#f04472]"
              />
              {point}
            </li>
          ))}
        </ul>

        <a
          href="#trending"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f04472] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#dc315f]"
        >
          {step.button}
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="h-56 overflow-hidden rounded-xl sm:h-72 lg:h-[310px]">
        <img
          src={step.image}
          alt={step.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#f04472]">
            Simple and convenient
          </p>
          <h2 className="text-2xl font-semibold text-[#292a31]">
            How It Works
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-gray-500">
            Everything you need to discover places, manage listings,
            and grow your business.
          </p>
        </div>

        <div className="space-y-5">
          {steps.map((step, index) => (
            <FeaturePanel
              key={step.eyebrow}
              step={step}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
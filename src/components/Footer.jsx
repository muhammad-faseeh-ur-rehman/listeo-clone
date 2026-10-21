import { MapPin, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footerLinks = {
  Explore: [
    "Popular Categories",
    "Trending Listings",
    "Local Deals",
    "Latest Articles",
  ],
  Business: [
    "Add a Listing",
    "Pricing Plans",
    "Claim a Listing",
    "Help Center",
  ],
  Company: [
    "About Us",
    "Contact",
    "Privacy Policy",
    "Terms & Conditions",
  ],
};
const socialLinks = [
  { name: "Facebook", icon: FaFacebookF, url: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, url: "https://www.instagram.com/" },
  { name: "X", icon: FaXTwitter, url: "https://x.com/" },
  { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/" },
];
export default function Footer() {
  return (
    <footer id="footer" className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="/"
              className="text-2xl font-bold tracking-tight text-[#292a31]"
            >
              listeo<span className="text-[#f04472]">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Discover great local places, connect with businesses,
              and explore something new every day.
            </p>

            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <MapPin size={14} className="text-[#f04472]" />
              Discover places near you
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-2 flex items-center gap-2 text-xs text-gray-500 hover:text-[#f04472]"
            >
              <Mail size={14} className="text-[#f04472]" />
              hello@example.com
            </a>

            <div className="mt-5 flex gap-2">
              {socialLinks.map(({ name, icon: Icon, url }) => (
                <a
                  href={url}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-50 text-gray-500 transition hover:bg-[#f04472] hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-5 text-sm font-semibold text-gray-800">
                {heading}
              </h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#trending"
                      className="text-xs text-gray-500 transition hover:text-[#f04472]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 border-t border-gray-100 pt-7 md:grid-cols-2 md:items-center">
          <p className="text-xs leading-5 text-gray-400">
            © {new Date().getFullYear()} Listeo. All rights reserved.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
            className="flex max-w-md overflow-hidden rounded-full border border-gray-200 p-1 md:ml-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              aria-label="Email address"
              className="min-w-0 flex-1 bg-transparent px-4 py-2 text-xs outline-none placeholder:text-gray-400"
            />

            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f04472] text-white transition hover:bg-[#dc315f]"
            >
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
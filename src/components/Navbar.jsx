import { useState } from "react";
import {
  MapPin, Home, Layers, User, FileText,
  ShoppingCart, LogIn, ChevronDown, Menu, X
} from "lucide-react";
const navItems = [
  { label: "Home", icon: Home, active: true },
  { label: "Listings Layouts", icon: Layers },
  { label: "User Panel", icon: User },
  { label: "Pages", icon: FileText },
];
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-black/45 text-white backdrop-blur-md">
      <nav className="mx-auto flex min-h-[90px] max-w-[1920px] items-center justify-between gap-5 px-5 py-4 lg:px-14">  
        <a href="#" className="flex shrink-0 items-center gap-2">
          <MapPin
            size={49}
            strokeWidth={2.2}
            className="text-[#ff1744]"
          />
          <span className="text-[37px] font-light tracking-tight">
            listeo
          </span>
        </a>
        <div className="hidden items-center gap-2 xl:flex">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-2 rounded-full px-5 py-4 text-[17px] font-semibold transition ${
                active
                  ? "bg-[#ff1744]"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={21} />
              {label}
              <ChevronDown size={17} className="opacity-70" />
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-7 lg:flex">
          <a
            href="#"
            aria-label="Shopping cart"
            className="relative flex h-[62px] w-[62px] items-center justify-center rounded-full bg-white/20 hover:bg-white/30"
          >
            <ShoppingCart size={27} />
            <span className="absolute -right-2 -top-2 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#ff1744] text-sm">
              0
            </span>
          </a>

          <a href="#" className="flex items-center gap-3 text-lg hover:text-[#ff1744]">
            <LogIn size={23} />
            Sign In
          </a>
          <a
            href="#"
            className="flex items-center gap-3 rounded-full bg-[#ff1744] px-7 py-[19px] text-lg font-semibold transition hover:bg-[#e90035]"
          >
            <MapPin size={24} />
            Add Listing
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 hover:bg-white/10 lg:hidden"
        >
          {mobileOpen ? <X size={29} /> : <Menu size={29} />}
        </button>
      </nav>
      {mobileOpen && (
        <div className="space-y-2 border-t border-white/10 bg-[#252525]/95 px-5 py-5 lg:hidden">
          {navItems.map(({ label, icon: Icon }) => (
            <a
              href="#"
              key={label}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-lg px-4 py-3 hover:bg-white/10"
            >
              <Icon size={20} />
              {label}
              <ChevronDown size={16} className="ml-auto" />
            </a>
          ))}
          <a href="#" className="flex items-center gap-3 px-4 py-3">
            <ShoppingCart size={20} /> Cart (0)
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3">
            <LogIn size={20} /> Sign In
          </a>
          <a
            href="#"
            className="flex items-center justify-center gap-2 rounded-full bg-[#ff1744] px-5 py-3 font-semibold"
          >
            <MapPin size={20} /> Add Listing
          </a>
        </div>
      )}
    </header>
  );
}

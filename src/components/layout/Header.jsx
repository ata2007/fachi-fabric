import { useState } from "react";
import { Link } from "react-router-dom";
import { openWhatsApp } from "../../utils/whatsapp";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#062045] text-[#f5f1ea] border-b border-[#c9a227]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="text-lg md:text-xl font-serif tracking-[0.2em]">
          FACHI<span className="text-[#c9a227]"> FABRIC VENTURES</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-[#c9a227] transition">
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => openWhatsApp()}
          className="hidden md:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-medium px-4 py-2 rounded-full transition"
        >
          Order on WhatsApp
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-[#062045] border-t border-[#c9a227]/30 px-4 py-4 flex flex-col gap-3">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 text-sm tracking-widest uppercase hover:text-[#c9a227]"
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => openWhatsApp()}
            className="mt-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-full"
          >
            Order on WhatsApp
          </button>
        </nav>
      )}
    </header>
  );
}

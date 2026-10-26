import { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import SlideMenu from "./SlideMenu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchDraft, setSearchDraft] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const searchTerm = searchDraft?.locationSearch === location.search
    ? searchDraft.value
    : new URLSearchParams(location.search).get("search") ?? "";

  function updateSearchTerm(value) {
    setSearchDraft({ locationSearch: location.search, value });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    const query = searchTerm.trim();
    const search = query ? `?${new URLSearchParams({ search: query })}` : "";
    navigate({ pathname: "/shop", search });
    setIsMobileSearchOpen(false);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <header className="pointer-events-auto w-full max-w-[1400px] rounded-2xl border border-[#c9a227]/20 bg-[#062045]/95 text-[#f5f1ea] shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300">
          <div className="flex h-16 items-center justify-between gap-2 px-3 sm:px-5 md:h-20 md:px-8">
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-4">
              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation-drawer"
                className="rounded-lg p-2 text-[#f5f1ea] transition-colors hover:bg-white/5 hover:text-[#c9a227] lg:hidden"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <Link
                to="/"
                aria-label="Fachi Fabric Ventures home"
                className="whitespace-nowrap font-serif text-xl uppercase tracking-[0.15em] text-[#f5f1ea] transition-colors hover:text-[#c9a227] md:text-2xl"
              >
                Fachi
              </Link>
            </div>

            <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center gap-5 lg:flex xl:gap-7">
              {navLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === "/"}
                  className={({ isActive }) =>
                    `group relative whitespace-nowrap py-2 text-[10px] font-bold uppercase tracking-[0.16em] transition-colors xl:text-[11px] xl:tracking-[0.2em] ${
                      isActive ? "text-[#c9a227]" : "text-[#f5f1ea]/80 hover:text-[#f5f1ea]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left bg-[#c9a227] transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="flex flex-1 items-center justify-end gap-1 sm:gap-2 lg:gap-3">
              <form
                onSubmit={handleSearchSubmit}
                role="search"
                className="hidden min-w-0 items-center rounded-full border border-white/10 bg-white/5 px-3 py-2 transition-colors focus-within:border-[#c9a227]/50 lg:flex xl:px-4"
              >
                <Search aria-hidden="true" className="mr-2 h-4 w-4 shrink-0 text-[#f5f1ea]/55" />
                <input
                  type="search"
                  aria-label="Search fabrics"
                  placeholder="Search fabrics..."
                  value={searchTerm}
                  onChange={(event) => updateSearchTerm(event.target.value)}
                  className="w-28 min-w-0 bg-transparent text-xs text-[#f5f1ea] outline-none placeholder:text-[#f5f1ea]/40 transition-[width] duration-300 focus:w-40 xl:w-32 xl:focus:w-48"
                />
              </form>

              <button
                type="button"
                onClick={() => setIsMobileSearchOpen((isOpen) => !isOpen)}
                aria-label={isMobileSearchOpen ? "Close search" : "Open search"}
                aria-expanded={isMobileSearchOpen}
                className="rounded-full p-2 text-[#f5f1ea]/75 transition-colors hover:bg-white/10 hover:text-[#c9a227] lg:hidden"
              >
                {isMobileSearchOpen ? <X className="h-5 w-5" /> : <Search className="h-5 w-5" />}
              </button>

              <Link
                to="/shop"
                aria-label="Shop fabrics"
                className="group flex items-center gap-2 rounded-full bg-[#c9a227] px-3 py-2.5 text-[#062045] shadow-md transition-colors hover:bg-[#f5f1ea] sm:px-4"
              >
                <ShoppingBag className="h-4 w-4 transition-transform group-hover:scale-110" />
                <span className="hidden text-[10px] font-bold uppercase tracking-wider sm:inline">Shop</span>
              </Link>
            </div>
          </div>

          {isMobileSearchOpen && (
            <form onSubmit={handleSearchSubmit} role="search" className="flex items-center gap-2 border-t border-[#c9a227]/20 px-4 py-3 lg:hidden">
              <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-[#c9a227]" />
              <input
                type="search"
                aria-label="Search fabrics"
                placeholder="Search fabrics..."
                value={searchTerm}
                onChange={(event) => updateSearchTerm(event.target.value)}
                autoFocus
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[#f5f1ea] outline-none placeholder:text-[#f5f1ea]/45"
              />
              <button type="submit" className="rounded-full bg-[#c9a227] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#062045]">
                Search
              </button>
            </form>
          )}
        </header>
      </div>

      <div className={`h-24 ${isMobileSearchOpen ? "h-40 sm:h-36" : ""} lg:h-28`} aria-hidden="true" />
      <SlideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

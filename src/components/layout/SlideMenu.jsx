import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Images, Info, MessageCircle, Phone, Store, X } from "lucide-react";
import { openWhatsApp } from "../../utils/whatsapp";

const navLinks = [
  { label: "Home", to: "/", icon: ArrowUpRight },
  { label: "Shop Fabrics", to: "/shop", icon: Store },
  { label: "Gallery", to: "/gallery", icon: Images },
  { label: "Our Story", to: "/about", icon: Info },
  { label: "Contact", to: "/contact", icon: Phone },
];

export default function SlideMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape") onClose();
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Close navigation menu"
        aria-hidden={!isOpen}
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-[#062045]/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="site-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed inset-y-0 right-0 z-[61] flex w-full max-w-[360px] flex-col border-l border-[#c9a227]/20 bg-[#062045] text-[#f5f1ea] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#c9a227]/20 px-6 py-5">
          <Link to="/" onClick={onClose} className="font-serif text-lg font-semibold uppercase tracking-[0.16em]">
            Fachi <span className="text-[#c9a227]">Fabric Ventures</span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-full p-2 text-[#f5f1ea]/70 transition-colors hover:bg-white/10 hover:text-[#c9a227]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Main navigation" className="flex-1 overflow-y-auto px-4 py-6">
          <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#f5f1ea]/50">Explore</p>
          <div className="flex flex-col gap-1">
            {navLinks.map(({ label, to, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                onClick={onClose}
                className={({ isActive }) =>
                  `group flex items-center gap-4 rounded-lg px-3 py-3 transition-colors ${
                    isActive
                      ? "bg-white/10 text-[#c9a227]"
                      : "text-[#f5f1ea]/80 hover:bg-white/5 hover:text-[#f5f1ea]"
                  }`
                }
              >
                <Icon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                <span className="text-sm font-semibold tracking-wide">{label}</span>
              </NavLink>
            ))}
          </div>
        </nav>

        <div className="border-t border-[#c9a227]/20 p-6">
          <p className="mb-4 text-xs leading-relaxed text-[#f5f1ea]/65">
            Quality fabrics for every style. Lana, stock wools, Swiss wools &amp; more.
          </p>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="flex w-full items-center justify-between rounded-full bg-[#c9a227] px-5 py-3 text-sm font-bold text-[#062045] transition-colors hover:bg-[#f5f1ea]"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      </aside>
    </>
  );
}
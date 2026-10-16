import { Link } from "react-router-dom";
import { openWhatsApp } from "../../utils/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-[#062045] text-[#f5f1ea] border-t border-[#c9a227]/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-lg tracking-[0.2em] mb-3">
            FACHI<span className="text-[#c9a227]"> FABRIC VENTURES</span>
          </h3>
          <p className="text-sm text-[#f5f1ea]/70">
            Quality fabrics for every style. Lana, stock wools, swiss wools & more.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-[#c9a227] mb-3">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-[#c9a227]">All Fabrics</Link></li>
            <li><Link to="/gallery" className="hover:text-[#c9a227]">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-[#c9a227] mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-[#c9a227]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[#c9a227]">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-widest text-[#c9a227] mb-3">Visit Us</h4>
          <p className="text-sm text-[#f5f1ea]/70 mb-3">
            No 12 St. John Street,<br />
            Taiwo off Tinubu Square,<br />
            CMS, Lagos Island
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="text-sm bg-[#25D366] hover:bg-[#1ebe5a] text-white px-4 py-2 rounded-full"
          >
            Chat on WhatsApp
          </button>
        </div>
      </div>

      <div className="border-t border-[#c9a227]/20 py-4 text-center text-xs text-[#f5f1ea]/50">
        © {new Date().getFullYear()} Fachi Fabric Ventures. All rights reserved.
      </div>
    </footer>
  );
}

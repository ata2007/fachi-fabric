import { Link } from "react-router-dom";
import { orderOnWhatsApp } from "../../utils/whatsapp";

export default function FabricCard({ fabric }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/fabric/${fabric.id}`} className="block">
        <div className="aspect-[3/4] bg-gradient-to-br from-[#062045] to-[#0a2d5e] relative overflow-hidden">
          <img
            src={fabric.image}
            alt={fabric.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[#c9a227] font-serif text-lg tracking-widest uppercase opacity-60 pointer-events-none">
            {fabric.category}
          </div>
        </div>
      </Link>

      <div className="p-4">
        <h3 className="font-serif text-lg text-[#1a1a1a] mb-1">{fabric.name}</h3>
        <p className="text-sm text-[#1a1a1a]/60 mb-3 line-clamp-2">{fabric.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-[#1a1a1a]">
              ₦{fabric.price.toLocaleString()}<span className="text-xs text-[#1a1a1a]/50"> /yard</span>
            </p>
            <p className="mt-1 text-xs text-[#1a1a1a]/60">
              Prices negotiable — chat on WhatsApp
            </p>
          </div>
          <button
            onClick={() => orderOnWhatsApp(fabric.name, fabric.price)}
            className="bg-[#25D366] hover:bg-[#1ebe5a] text-white text-xs font-medium px-3 py-2 rounded-full transition"
          >
            Order
          </button>
        </div>
      </div>
    </div>
  );
}

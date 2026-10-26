import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fabrics } from "../data/fabrics";
import { orderOnWhatsApp, openWhatsApp, NUMBERS } from "../utils/whatsapp";

export default function FabricDetails() {
  const { id } = useParams();
  const [selectedNumber, setSelectedNumber] = useState(NUMBERS.boss);
  const fabric = fabrics.find((f) => f.id === Number(id));

  if (!fabric) {
    return (
      <div className="py-32 px-4 text-center bg-[#faf7f2]">
        <h1 className="font-serif text-4xl mb-4 text-[#062045]">Fabric not found</h1>
        <Link
          to="/shop"
          className="bg-[#062045] text-[#f5f1ea] px-6 py-3 rounded-full hover:bg-[#c9a227] hover:text-[#062045] transition inline-block"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const related = fabrics
    .filter((f) => f.category === fabric.category && f.id !== fabric.id)
    .slice(0, 3);

  return (
    <div className="bg-[#faf7f2]">
      <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-[#1a1a1a]/60">
        <Link to="/" className="hover:text-[#c9a227]">Home</Link>
        {" / "}
        <Link to="/shop" className="hover:text-[#c9a227]">Shop</Link>
        {" / "}
        <span className="text-[#1a1a1a]">{fabric.name}</span>
      </div>

      <section className="max-w-7xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="aspect-[3/4] bg-[#062045] rounded-lg overflow-hidden">
          <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-[#c9a227] tracking-[0.3em] text-xs uppercase mb-3">
            {fabric.category} fabric
          </p>
          <h1 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-4">
            {fabric.name}
          </h1>

          <p className="text-2xl font-medium text-[#1a1a1a] mb-2">
            ₦{fabric.price.toLocaleString()}<span className="text-sm text-[#1a1a1a]/50"> /yard</span>
          </p>
          <p className="text-sm text-[#c9a227] mb-6">
            Prices negotiable — chat for exact quote
          </p>

          <p className="text-[#1a1a1a]/70 mb-8 leading-relaxed">
            {fabric.description}
          </p>

          <fieldset className="mb-6 rounded-lg border border-[#1a1a1a]/10 bg-white p-4">
            <legend className="px-1 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]/60">
              Choose who to message
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                aria-pressed={selectedNumber === NUMBERS.boss}
                onClick={() => setSelectedNumber(NUMBERS.boss)}
                className={`rounded-md border px-3 py-3 text-sm font-bold transition-colors ${
                  selectedNumber === NUMBERS.boss
                    ? "border-[#062045] bg-[#062045] text-[#f5f1ea]"
                    : "border-[#062045]/20 text-[#062045] hover:border-[#062045]"
                }`}
              >
                Contact Boss
              </button>
              <button
                type="button"
                aria-pressed={selectedNumber === NUMBERS.worker}
                onClick={() => setSelectedNumber(NUMBERS.worker)}
                className={`rounded-md border px-3 py-3 text-sm font-bold transition-colors ${
                  selectedNumber === NUMBERS.worker
                    ? "border-[#062045] bg-[#062045] text-[#f5f1ea]"
                    : "border-[#062045]/20 text-[#062045] hover:border-[#062045]"
                }`}
              >
                Contact Worker
              </button>
            </div>
          </fieldset>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => orderOnWhatsApp(fabric.name, fabric.price, selectedNumber)}
              className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium px-8 py-3 rounded-full transition"
            >
              Order on WhatsApp
            </button>
            <button
              onClick={() =>
                openWhatsApp(`Hi Fachi Fabric Ventures, I have a question about *${fabric.name}*.`, selectedNumber)
              }
              className="border border-[#062045] text-[#062045] hover:bg-[#062045] hover:text-[#c9a227] font-medium px-8 py-3 rounded-full transition"
            >
              Ask a Question
            </button>
          </div>

          <p className="text-sm text-[#1a1a1a]/50 mt-6">
            Head Office: No. 3, Saint John Street, Tinubu Square, Lagos Island.
            <br />
            Branches: Block J, First Floor, Shop 36, and United Plaza, GF 39/40,
            Nnamdi Azikiwe Street, Tinubu Square, Lagos.
          </p>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-10 text-[#1a1a1a]">
              You may also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((f) => (
                <Link
                  key={f.id}
                  to={`/fabric/${f.id}`}
                  className="group block bg-[#faf7f2] rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg text-[#1a1a1a]">{f.name}</h3>
                    <p className="text-sm text-[#1a1a1a]/60 mt-1">
                      ₦{f.price.toLocaleString()} /yard
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

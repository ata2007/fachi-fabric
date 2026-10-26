import { openWhatsApp } from "../utils/whatsapp";

export default function About() {
  return (
    <div className="bg-[#faf7f2]">
      <section className="bg-[#062045] text-[#f5f1ea] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c9a227] tracking-[0.4em] text-xs uppercase mb-3">
            Our Story
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">About Fachi Fabric Ventures</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-[#1a1a1a]/80 leading-relaxed mb-6">
            Fachi Fabric Ventures is a Lagos-based fabric retailer supplying
            quality Lana, stock wool, swiss wool, and other premium fabrics to
            tailors, designers, and customers across Nigeria.
          </p>
          <p className="text-[#1a1a1a]/70 leading-relaxed mb-6">
            Located in the heart of Lagos Island at CMS, we stock a wide range
            of fabrics to suit every occasion.
          </p>
          <p className="text-[#1a1a1a]/70 leading-relaxed">
            Whether you're buying for a wedding, business wear, or everyday
            style, we've got the fabric you need.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#c9a227] rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-[#c9a227]">1</span>
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">Quality Fabrics</h3>
            <p className="text-sm text-[#1a1a1a]/60">
              Only the best Lana, stock wools, and swiss wools.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#c9a227] rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-[#c9a227]">2</span>
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">Flexible Prices</h3>
            <p className="text-sm text-[#1a1a1a]/60">
              Wholesale and retail pricing available. Chat for exact quote.
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 border-2 border-[#c9a227] rounded-full flex items-center justify-center">
              <span className="font-serif text-2xl text-[#c9a227]">3</span>
            </div>
            <h3 className="font-serif text-xl mb-2 text-[#1a1a1a]">Direct Service</h3>
            <p className="text-sm text-[#1a1a1a]/60">
              Order quickly via WhatsApp or visit the shop.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#062045] text-[#f5f1ea] py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-4">Visit Us</h2>
          <p className="text-[#f5f1ea]/70 mb-8">
            Head Office: No. 3, Saint John Street, Tinubu Square, Lagos Island.
            <br />
            Branches: Block J, First Floor, Shop 36, and United Plaza, GF 39/40,
            Nnamdi Azikiwe Street, Tinubu Square, Lagos.
          </p>
          <button
            onClick={() => openWhatsApp()}
            className="bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium px-8 py-3 rounded-full transition"
          >
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

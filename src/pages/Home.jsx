import { Link } from "react-router-dom";
import { openWhatsApp } from "../utils/whatsapp";
import FabricCard from "../components/common/FabricCard";
import PageBanner from "../components/common/PageBanner";
import { categories, fabrics, gallery } from "../data/fabrics";

export default function Home() {
  const featured = fabrics.filter((fabric) => fabric.featured);

  return (
    <div>
      <PageBanner eyebrow="Premium Fabrics" className="py-24 md:py-32">
          <h1 className="mb-6 font-serif text-4xl leading-tight md:text-6xl lg:text-7xl">
            Quality Fabrics for Every Style
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-[#f5f1ea]/70 md:text-lg">
            Lana fabrics, stock wools, Swiss wools and more. Browse our collection
            and order directly on WhatsApp.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              onClick={() => openWhatsApp()}
              className="rounded-full bg-[#25D366] px-8 py-3 font-medium text-white transition hover:bg-[#1ebe5a]"
            >
              Order on WhatsApp
            </button>
            <a
              href="#featured"
              className="rounded-full border border-[#c9a227] px-8 py-3 font-medium text-[#c9a227] transition hover:bg-[#c9a227] hover:text-[#062045]"
            >
              Browse Fabrics
            </a>
          </div>
      </PageBanner>

      <section className="bg-[#faf7f2] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl text-[#1a1a1a] md:text-4xl">
              Shop by Category
            </h2>
            <p className="text-[#1a1a1a]/60">Find your fabric</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/shop?category=${category.id}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-[#c9a227]/20 bg-gradient-to-br from-[#062045] to-[#0a2d5e]"
              >
                <img
                  src={category.image}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <div className="absolute inset-0 bg-black/40 transition group-hover:bg-black/60" />
                <span className="absolute inset-0 flex items-center justify-center px-4 text-center font-serif text-xl uppercase tracking-widest text-white md:text-2xl">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="featured" className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl text-[#1a1a1a] md:text-4xl">
              Featured Fabrics
            </h2>
            <p className="text-[#1a1a1a]/60">Handpicked for you</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((fabric) => (
              <FabricCard key={fabric.id} fabric={fabric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-serif text-3xl text-[#1a1a1a] md:text-4xl">
              Our Collection
            </h2>
            <p className="text-[#1a1a1a]/60">A glimpse into our fabric range</p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                to="/gallery"
                aria-label={`View gallery: ${item.caption}`}
                className="aspect-square overflow-hidden rounded-lg border border-[#c9a227]/20 bg-gradient-to-br from-[#062045] to-[#0a2d5e]"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062045] px-4 py-20 text-[#f5f1ea]">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 font-serif text-3xl md:text-4xl">Ready to Order?</h2>
          <p className="mb-8 text-[#f5f1ea]/70">
            Message us on WhatsApp with the fabric you want and quantity.
          </p>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="rounded-full bg-[#25D366] px-8 py-3 font-medium text-white transition hover:bg-[#1ebe5a]"
          >
            Chat with Us
          </button>
        </div>
      </section>
    </div>
  );
}

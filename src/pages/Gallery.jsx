import { gallery } from "../data/fabrics";
import { openWhatsApp } from "../utils/whatsapp";
import PageBanner from "../components/common/PageBanner";

export default function Gallery() {
  return (
    <div className="bg-[#faf7f2]">
      <PageBanner eyebrow="Collection" className="py-16">
        <h1 className="font-serif text-4xl md:text-5xl">Our Fabrics</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#f5f1ea]/80">
          A selection of fabrics available in store.
        </p>
      </PageBanner>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#062045] to-[#0a2d5e]"
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(event) => { event.currentTarget.style.display = "none"; }}
                />
                <figcaption className="absolute inset-0 flex items-end bg-black/0 p-4 transition group-hover:bg-black/40">
                  <span className="font-serif text-lg text-white opacity-0 transition group-hover:opacity-100">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#062045] px-4 py-16 text-[#f5f1ea]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl">Want a specific fabric?</h2>
          <p className="mb-8 text-[#f5f1ea]/70">
            Message us on WhatsApp and we&apos;ll check availability.
          </p>
          <button
            type="button"
            onClick={() => openWhatsApp()}
            className="rounded-full bg-[#25D366] px-8 py-3 font-medium text-white transition hover:bg-[#1ebe5a]"
          >
            Chat on WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}

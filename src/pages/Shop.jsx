import { useSearchParams } from "react-router-dom";
import FabricCard from "../components/common/FabricCard";
import PageBanner from "../components/common/PageBanner";
import { categories, fabrics } from "../data/fabrics";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") ?? "all";
  const visibleFabrics = selectedCategory === "all"
    ? fabrics
    : fabrics.filter((fabric) => fabric.category === selectedCategory);

  function selectCategory(category) {
    if (category === "all") {
      setSearchParams({});
      return;
    }
    setSearchParams({ category });
  }

  return (
    <div className="bg-[#faf7f2]">
      <PageBanner eyebrow="Collection" className="py-16">
        <h1 className="font-serif text-4xl md:text-5xl">All Fabrics</h1>
        <p className="mx-auto mt-4 max-w-2xl text-[#f5f1ea]/80">
          Browse Lana fabrics, stock wools and Swiss wools. Contact us to
          confirm availability and place your order.
        </p>
      </PageBanner>

      <section className="border-b border-[#1a1a1a]/10 bg-white px-4 py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2" aria-label="Filter fabrics by type">
          {[{ id: "all", label: "All fabrics" }, ...categories].map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => selectCategory(category.id)}
              aria-pressed={selectedCategory === category.id}
              className={`rounded-full px-5 py-2 text-sm transition ${
                selectedCategory === category.id
                  ? "bg-[#062045] text-[#c9a227]"
                  : "bg-[#faf7f2] text-[#1a1a1a] hover:bg-[#062045] hover:text-[#c9a227]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="mx-auto max-w-7xl">
          {visibleFabrics.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {visibleFabrics.map((fabric) => (
                <FabricCard key={fabric.id} fabric={fabric} />
              ))}
            </div>
          ) : (
            <p className="py-20 text-center text-[#1a1a1a]/60">
              No fabrics found in this collection.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}

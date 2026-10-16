export default function PageBanner({ eyebrow, children, className = "" }) {
  return (
    <section
      className={`bg-cover bg-center px-4 text-[#f5f1ea] ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(6, 32, 69, 0.82), rgba(6, 32, 69, 0.82)), url('/hero/fabric.jpg')",
      }}
    >
      <div className="mx-auto max-w-7xl text-center">
        {eyebrow && (
          <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#c9a227]">
            {eyebrow}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export default function Sponsors() {
  // Auto-import all sponsor images from the folder
  const imageModules = import.meta.glob("@/assets/sponsors/*.{png,jpg,jpeg,webp,svg}", {
    eager: true,
  });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  return (
    <section id="sponsors" className="w-screen py-16 snap-center">
      <h2 className="text-5xl text-center text-white mb-12">
        Our Sponsors
      </h2>
      <h2 className="text-3xl text-center text-white opacity-80 mb-12">
        Coming soon...
      </h2>
      {/* 
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Sponsor ${i}`}
            className="w-40 h-24 object-contain transition duration-300"
            loading="lazy"
          />
        ))} 
      </div> */}
    </section>
  );
}

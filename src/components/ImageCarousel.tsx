export default function ImageCarousel() {
  const imageModules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp}", {
    eager: true,
  });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  return (
    <section id="gallery" className="w-full py-12 snap-center overflow-hidden">
        <div className="relative h-screen flex flex-col justify-center gap-8">
          <CarouselRow images={images} direction="right" speed="slow" />
          <CarouselRow images={images} direction="left" speed="medium" />
          <CarouselRow images={images} direction="right" speed="slow-medium" />
        </div>
    </section>
  );
}

type RowProps = {
  images: string[];
  direction: "left" | "right";
  speed: "slow" | "slow-medium" | "medium" | "fast";
};

function CarouselRow({ images, direction, speed }: RowProps) {
  const speedClass =
    speed === "slow"
      ? direction === "left"
        ? "animate-scroll-slow"
        : "animate-scroll-reverse-slow"
      : speed === "medium"
      ? direction === "left"
        ? "animate-scroll-medium"
        : "animate-scroll-reverse-medium"
      : direction === "left"
      ? "animate-scroll-fast"
      : "animate-scroll-reverse-fast";

  return (
    <div
      className="group relative w-full overflow-hidden"
      style={{ "--duration": speedDuration(speed) } as React.CSSProperties}
    >
      <div
        className={`flex w-max gap-4 ${speedClass} group-hover:[animation-play-state:paused]`}
      >
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className="w-64 h-64 object-cover rounded-xl flex-shrink-0 cursor-pointer"
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
}


function speedDuration(speed: RowProps["speed"]) {
  switch (speed) {
    case "slow":
      return "60s";
    case "slow-medium":
      return "52s";
    case "medium":
      return "40s";
    case "fast":
      return "25s";
  }
}

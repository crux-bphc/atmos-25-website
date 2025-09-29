import { useState, useEffect } from "react";
import ImageTrail from "./ImageTrail";

export default function Gallery() {
    const imageModules = import.meta.glob("@/assets/gallery/*.{png,jpg,jpeg,webp}", {
        eager: true,
    });

    const images = Object.values(imageModules).map((mod: any) => mod.default);


//   const images = [
//     "https://atmos-bphc.com/static/media/about2.8fc62e9fe7d81ec7173e.jpeg",
//     "https://atmos-bphc.com/static/media/about1.f4bef7416cbceb7f88ad.jpeg",
//     "https://picsum.photos/id/1025/300/300",
//     "https://picsum.photos/id/1026/300/300",
//     "https://picsum.photos/id/1027/300/300",
//     "https://picsum.photos/id/1028/300/300",
//     "https://picsum.photos/id/1029/300/300",
//     "https://picsum.photos/id/1030/300/300",
//   ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkAspect = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setIsMobile(ratio < 1);
    };
    checkAspect();
    window.addEventListener("resize", checkAspect);
    return () => window.removeEventListener("resize", checkAspect);
  }, []);

  return (
    <section className="w-full py-12 [transform:none]">
      {isMobile ? (
        <div className="grid grid-cols-2 gap-4 px-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
              loading="lazy"
            />
          ))}
        </div>
      ) : (
        <div className="h-screen">
            <ImageTrail items={images} variant={1} />
        </div>
      )}
    </section>
  );
}

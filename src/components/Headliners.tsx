import { useState } from "react";

import img1 from "../assets/headliners/robowars.webp";
import img2 from "../assets/headliners/DRLRace.webp";
import img3 from "../assets/headliners/Hackathon.webp";
import img4 from "../assets/headliners/CrackTheCase.webp";
import img5 from "../assets/headliners/Cansat.webp";
import img6 from "../assets/headliners/Workshop.webp";

const events = [
  { title: "Robowars", subtitle: "Thriveforce", itemNumber: 1, image: img1 },
  {
    title: "Velocity Vortex",
    subtitle: "Aeolus",
    itemNumber: 2,
    image: img2,
  },
  { title: "CSA Workshop", subtitle: "CSA", itemNumber: 3, image: img3 },
  { title: "Break the Case", subtitle: "BHCG", itemNumber: 4, image: img4 },
  { title: "AeroBITS", subtitle: "SEDS", itemNumber: 5, image: img5 },
  { title: "Innowave", subtitle: "E-Cell", itemNumber: 6, image: img6 },
];

const Headliners = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const handleHover = (image: string) => {
    setActiveImage(image);
  };
  const handleLeave = () => {
    setActiveImage(null);
  };
  return (
    <div className="hl-container relative w-full">
      <div className="hl-backgrounds absolute inset-0 w-full h-full overflow-hidden">
        {events.map((event) => (
          <img
            key={event.itemNumber}
            src={event.image}
            alt={`${event.title} background`}
            loading="lazy"
            className={`
              absolute w-full h-full object-cover transition-opacity duration-50 ease-in-out
              ${activeImage === event.image ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>
      <ul
        className="hl-list relative z-10 flex flex-col bg-none"
      >
        {events.map((event) => (
          <li
            key={event.itemNumber}
            onMouseEnter={() => handleHover(event.image)}
            onMouseLeave={handleLeave}
            className="hl-item h-20 border-y-1 bg-none"
          >
            <div className="flex flex-col">
              <h2 className="font-[helvetica] md:text-6xl text-4xl">{event.title}</h2>
            </div>
            <h3 className="hl-number font-[helvetica] font-bold md:text-6xl text-4xl">{event.itemNumber}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Headliners;

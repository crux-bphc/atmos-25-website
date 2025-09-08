import { useState } from "react";

import img1 from "../assets/headliners/robowars.png";
import img2 from "../assets/headliners/DRLRace.jpg";
import img3 from "../assets/headliners/Hackathon.png.webp";
import img4 from "../assets/headliners/ATVexpo.jpeg";
import img5 from "../assets/headliners/Cansat.jpg";
import img6 from "../assets/headliners/Innowave.jpeg";

const events = [
  { title: "Robowars", subtitle: "Thriveforce", itemNumber: 1, image: img1 },
  {
    title: "Drone Racing League",
    subtitle: "Aeolus",
    itemNumber: 2,
    image: img2,
  },
  { title: "Hackathon", subtitle: "ACM", itemNumber: 3, image: img3 },
  { title: "ATV Expo", subtitle: "SAE", itemNumber: 4, image: img4 },
  { title: "CanSat", subtitle: "SEDS", itemNumber: 5, image: img5 },
  { title: "Innowave", subtitle: "E-Cell", itemNumber: 6, image: img6 },
  { title: "", subtitle: "", itemNumber: "", image: "" },
];

const Headliners = () => {
  const [isBackground, setIsBackground] = useState<string | null>(null);
  const handleHover = (image: string) => {
    setIsBackground(image);
  };
  const handleLeave = () => {
    setIsBackground(null);
  };
  return (
    <>
      <ul
        className="hl-list bg-cover bg-center"
        style={{
          backgroundImage: isBackground ? `url(${isBackground})` : "none",
        }}
      >
        {events.map((event) => (
          <li
            key={event.itemNumber}
            onMouseEnter={() => handleHover(event.image)}
            onMouseLeave={handleLeave}
            className="hl-item"
          >
            <div className="flex flex-col">
              <h2 className="hl-title">{event.title}</h2>
            </div>
            <h3 className="hl-number">{event.itemNumber}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Headliners;

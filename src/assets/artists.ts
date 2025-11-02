// src/artists.ts
import Flame1 from "../assets/proshows/Proshows_0004_Proshows_01_export.webp";
import Flame2 from "../assets/proshows/Proshows_0003_Proshows_02_export.webp";
import Mithoon from "../assets/proshows/Proshows_0000_mithoon.webp";
import Carnivore from "../assets/proshows/Proshows_0002_Carnivore.webp"; 
import Kaustubh from "../assets/proshows/Proshows_0001_kaustubh.webp"; 

export const artists = [
  {
    id: 1,
    name: "Mithoon",
    title: "Bollywood Night",
    date: "8.11.Sat", 
    time: "8:30pm",
    location: "BITS Hyd",
    venue: "Library Lawns",
    image: Mithoon,
    flameA: Flame1,
    flameB: Flame2,
  },
  {
    id: 2,
    name: "DJ Carnivore",
    title: "EDM Night",
    date: "8.11.Sat",
    time: "9:30pm",
    location: "BITS Hyd",
    venue: "Library Lawns",
    image: Carnivore,
    flameA: Flame1,
    flameB: Flame2,
  },

  {
    id: 3,
    name: "Kaustubh",
    title: "Comedy Night",
    date: "7.11.Sat",
    time: "7:00pm",
    location: "BITS Hyd",
    venue: "Auditorium",
    image: Kaustubh,
    flameA: Flame1,
    flameB: Flame2,
  }
  
];
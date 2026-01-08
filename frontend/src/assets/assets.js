import avatar from "./avatar.png";
import iphone from "./iphone.png";
import laptop from "./laptop.png";

export const assets = {
  avatar,
};

export const projectsData = [
  {
    id: 1,
    title: "Food delivery",
    category: "Web",
    description:
      "A smart dashboard for managing food orders with real-time tracking features.",
    image: laptop,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    link: "https://github.com/nlinh1509/Food_delivery",
    // technologies: ["React", "AI", "CSS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    description: "My personal portfolio showcasing my projects and skills.",
    image: laptop,
    // technologies: ["React", "Framer Motion"],
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    ],
    link: "https://github.com/nlinh1509/Food_delivery",
  },

  {
    id: 3,
    title: "EcoTrack - Waste Sorting App",
    category: "Mobile",
    description:
      "EcoTrack is an Android app that uses AI to classify waste with gamification elements.",
    image: iphone,
    technologies: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    ],
    link: "https://github.com/trmzaiu/ecotrack-waste-sorting",

    // technologies: ["React", "AI", "CSS"],
  },
];

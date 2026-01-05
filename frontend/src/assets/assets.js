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
    // technologies: ["React", "AI", "CSS"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    description: "My personal portfolio showcasing my projects and skills.",
    image: laptop,
    // technologies: ["React", "Framer Motion"],
  },

  {
    id: 3,
    title: "EcoTrack - Waste Sorting App",
    category: "Mobile",
    description:
      "EcoTrack is a cross-platform mobile app that leverages AI to assist users in classifying waste accurately. Through gamification and eco-friendly incentives.",
    image: iphone,
    // technologies: ["React", "AI", "CSS"],
  },
];

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
      "fa-brands fa-react",
      "fa-brands fa-css3-alt",
      "fa-brands fa-node-js",
    ],
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
      "fa-brands fa-react",
      "fa-brands fa-css3-alt",
      "fa-brands fa-node-js",
    ],
  },

  {
    id: 3,
    title: "EcoTrack - Waste Sorting App",
    category: "Mobile",
    description:
      "EcoTrack is an Android app that uses AI to classify waste with gamification elements.",
    image: iphone,
    technologies: [
      "fa-brands fa-flutter",
      "fa-solid fa-fire",
      "fa-solid fa-brain",
      "fa-solid fa-cloud",
    ],
    // technologies: ["React", "AI", "CSS"],
  },
];

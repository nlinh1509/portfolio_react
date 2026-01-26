import avatar from "./avatar-profile.png";
import iphone from "./iphone.png";
import laptop from "./laptop.png";

export const assets = {
  avatar,
};

export const projectsData = [
  {
    id: 1,
    title: "Food delivery",
    name: "food",
    description:
      "A smart dashboard for managing food orders with real-time tracking features.",
    image: laptop,
    // technologies: [
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    // ],
    technologies: [
      { tech: "ReactJS", name: "reactjs" },
      { tech: "NodeJS", name: "nodejs" },
      { tech: "MongoDB", name: "mongodb" },
    ],
    link: "https://github.com/nlinh1509/Food_delivery",
  },

  {
    id: 2,
    title: "EcoTrack - Waste Sorting App",
    name: "ecotrack",
    description:
      "EcoTrack is an Android app that uses AI to classify waste with gamification elements.",
    image: iphone,
    // technologies: [
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    //   "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
    // ],
    technologies: [
      { tech: "Flutter", name: "flutter" },
      { tech: "Firebase", name: "firebase" },
      { tech: "Cloudinary", name: "cloudinary" },
      { tech: "CLIP AI", name: "clip-ai" },
    ],
    link: "https://github.com/trmzaiu/ecotrack-waste-sorting",
  },
];

export const techLogo = [
  {
    name: "HTML",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
  },
  {
    name: "Javascript",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "Tailwind CSS",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Figma",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Git",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "React.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    style: "icon-white", // Logo đen -> cần đảo màu
  },
  {
    name: "MongoDB",
    url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

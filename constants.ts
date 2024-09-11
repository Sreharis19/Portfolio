// Copyright Sreehari Soman 2023,2024. All Rights Reserved.
// Project: portfolio
// Author contact: https://www.linkedin.com/in/sreehari-soman/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

export const METADATA = {
  title: "Portfolio | Sreehari Soman",
  description:
    "I bridge the gap between design and development. I take responsibility to craft an aesthetic user experience using modern frontend architecture.",
  siteUrl: "https://sreehari.tech/",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Works",
    ref: "works",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Timeline",
    ref: "timeline",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "I develop full-stack applications",
  "I build scalable backend systems",
  "I develop modern frontend interfaces",
  "I design dynamic user experiences",
  "I manage databases and data flow",
  "I integrate APIs and third-party services",
  "I deploy and maintain web applications",
  "I ensure performance and security",
];

export const EMAIL = "sreehari.soman@hotmail.com";

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/sreehari-soman/",
  github: "https://github.com/Sreharis19",
};

export interface IProject {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: IProject[] = [
  {
    name: "MentorHub Nu",
    image: "/projects/MentorHubNU.png",
    blurImage: "/projects/blur/figgen-blur.jpg",
    description: "Supporting student success and mental wellness with a world-class, evidence-based mentoring platform",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.hubspire.com/mentorhub-nu/",
    tech: ["typescript", "graphql", "mongodb", "aws", "firebase"],
  },
  {
    name: "Ensource",
    image: "/projects/ensource.png",
    blurImage: "/projects/blur/ensource.png",
    description: "Digital end-to-end customer onboarding and lead management system made specifically by bankers for bankers",
    gradient: ["#245B57", "#004741"],
    url: "https://www.sumeruentiger.com/sell-like-a",
    tech: ["react", "redux", "css"],
  },
  {
    name: "Memmbles",
    image: "/projects/memmbles.png",
    blurImage: "/projects/blur/memmbles.png",
    description: "social media networking platform for album sharing, that allows its users to share photos, videos, voice/sound files and data with friends and families.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://play.google.com/store/apps/details?id=com.memmbles.reub&hl=en_GB",
    tech: ["typescript", "express", "angular", "css", "aws"],
  },
  
  {
    name: "Mapolitical Bio",
    image: "/projects/biography.png",
    blurImage: "/projects/blur/biography.png",
    description: "Biography Writing tool, leveraging extensive research and advanced machine learning modelling techniques.",
    gradient: ["#142D46", "#2E4964"],
    url: "#",
    tech: ["typescript", "express", "react", "python", "jupyter"],
  },
  {
    name: "Proticons",
    image: "/projects/proticons.png",
    blurImage: "/projects/blur/proticons.png",
    description: "Ecommerce brand website.",
    gradient: ["#470700", "#712A23"],
    url: "https://proticons.com/",
    tech: ["typescript", "express", "react", "css", "aws"],
  },
];

export const SKILLS = {
  frontend: [
    "javascript",
    "react",
    "redux",
    "next",
    "tailwind",
    "sass",
    "svg",
    "html",
    "css",
  ],
  backend: ["nodejs", "express", "graphql", "python", "jupyter", "mongodb", "postgres", "mysql", "jest"],
  other: ["aws", "git", "docker", "kubernetes", "jenkins", "firebase", "postman"],
};

export enum Branch {
  LEFT = "leftSide",
  RIGHT = "rightSide",
}

export enum NodeTypes {
  CONVERGE = "converge",
  DIVERGE = "diverge",
  CHECKPOINT = "checkpoint",
}

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export const TIMELINE: Array<TimelineNodeV2> = [
  {
    type: NodeTypes.CHECKPOINT,
    title: "Software Engineering Intern",
    size: ItemSize.SMALL,
    subtitle: "Developed a user-friendly web application for financial fraud detection application, incorporating interactive and engaging user experiences.",
    image: "",
    slideImage: "",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Data Engineering Intern",
    size: ItemSize.SMALL,
    subtitle: "Developed a user-friendly web application for a Biography Writing tool, improving data processing by 30%.",
    image: "/company/mapolitical.jpg",
    slideImage: "/timeline/raw/biography.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2024",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.DIVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Master of Science: Computer Science",
    size: ItemSize.SMALL,
    subtitle: "Studied advanced web solutions, semantic data technologies, and web security at Anglia Ruskin University.",
    image: "/company/logo--aru.svg",
    slideImage: "/timeline/raw/graduation.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }, {
    type: NodeTypes.CHECKPOINT,
    title: "L2 Software Engineer",
    size: ItemSize.SMALL,
    subtitle: "Built scalable applications using Node.js, AWS, and microservices, increasing performance by 35%.",
    image: "/company/hubspire.svg",
    slideImage: "/timeline/raw/Nu.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "Full Stack Developer",
    size: ItemSize.SMALL,
    subtitle: "Led the development of Ensource, a FinTech hybrid application, improving transaction efficiency by 30%.",
    image: "/company/reubro.svg",
    slideImage: "/timeline/raw/ENSource2.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }, {
    type: NodeTypes.CHECKPOINT,
    title: "2019",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
    alignment: Branch.LEFT,
  }, {
    type: NodeTypes.DIVERGE,
  }, {
    type: NodeTypes.CHECKPOINT,
    title: "Junior Software Engineer",
    size: ItemSize.SMALL,
    subtitle: "Worked on e-commerce and ERP solutions using MERN stack, boosting user engagement by 25%.",
    image: "/company/lifetree.svg",
    slideImage: "/timeline/raw/LifeTee.png",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  }, {
    type: NodeTypes.CHECKPOINT,
    title: "Graduated from College 🎓",
    size: ItemSize.SMALL,
    subtitle: "B.E in Computer Science and Engineering from Anna University, specializing in programming and data structures.",
    image: "/company/AnnaUniversity1.svg",
    slideImage: "/company/AnnaUniversity.svg",
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
  {
    type: NodeTypes.CONVERGE,
  },
  {
    type: NodeTypes.CHECKPOINT,
    title: "2018",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
    alignment: Branch.LEFT,
  },
];

export type TimelineNodeV2 = CheckpointNode | BranchNode;

export interface CheckpointNode {
  type: NodeTypes.CHECKPOINT;
  title: string;
  subtitle?: string;
  size: ItemSize;
  image?: string;
  slideImage?: string;
  shouldDrawLine: boolean;
  alignment: Branch;
}

export interface BranchNode {
  type: NodeTypes.CONVERGE | NodeTypes.DIVERGE;
}

export const GTAG = "GTM-57S225VG";

import { GithubIcon, LinkedinIcon, MailIcon } from "@theme/icons";
import {
  amigo,
  css,
  framer,
  fullstack,
  git,
  glaciar,
  graph,
  hardware,
  html,
  js,
  next,
  node,
  react,
  reader,
  recorder,
  three,
  ts,
  twelve,
  workshop,
} from "../../public/assets";

export const sections = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const heroText = "Creating with code";

export const aboutText = `Hello, my name is Felipe.
  I'm an visual artist and developer,
  currently expanding my world wide web frontiers.
  I have strong skills to bring great ideas in to real world, 
  my background in field technological artworks and now
  i'm looking for a place to do great things to the internet.`;

export const technologies = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Javascript",
    icon: js,
  },
  {
    name: "Typescript",
    icon: ts,
  },
  {
    name: "React JS",
    icon: react,
  },
  {
    name: "Node JS",
    icon: node,
  },
  {
    name: "Next JS",
    icon: next,
  },
  {
    name: "Graph QL",
    icon: graph,
  },
  {
    name: "Framer Motion",
    icon: framer,
  },
  {
    name: "Three JS",
    icon: three,
  },
  {
    name: "Git",
    icon: git,
  },
];

export const skills = [
  {
    name: "CI/CD",
  },
  {
    name: "OOP",
  },
  {
    name: "Content Manager System (CMS)",
  },
  {
    name: "C/C++",
  },
  {
    name: "Atlassian: Jira and Confluence",
  },
  {
    name: "Figma",
  },
];

export const experiences = [
  {
    title: "EMF Workshop",
    company_name: "",
    image: workshop,
    date: "2023",
    points: [],
  },
  {
    title: "Front-end Developer",
    company: "Twelve x Twelve",
    image: twelve,
    date: "2022 - 2023",
    points: [
      "Front-end features and improvements in the company's marketplace.",
      "Homepage lead developer and software project managing www.twlvtwlv.com.",
    ],
  },
  {
    title: "Mobile App Developer Assistant",
    company: "Amigo App",
    image: amigo,
    date: "2022",
    points: ["UI implementations with React Native and Redux."],
  },
  {
    title: "#GlaciarGrey",
    company: "UltimaEsperanza Collective",
    image: glaciar,
    date: "2021",
    points: [
      "Full-stack development according to customer requirements.",
      "Project managing: testing, debugging, deployment, launch, maintenance and updates.",
    ],
  },
  {
    title: "Freelance Full-Stack  Developer",
    company: "",
    image: fullstack,
    date: "2021 -",
    points: [
      "Full-stack development according to customer requirements.",
      "Project managing: testing, debugging, deployment, launch, maintenance and updates.",
    ],
  },
  {
    title: "Hidroscopia Maule | Data reader",
    company_name: "Claudia González",
    image: reader,
    date: "2021",
    points: [],
  },
  {
    title: "Hidroscopia Maule | Data recorder",
    company_name: "Claudia González",
    image: recorder,
    date: "2021",
    points: [
      "Work developed to the artist Claudia Gonzalez around the capture and recording electromagnetic fields [EMF] generated by high voltage power lines in the region of Maule, Chile. The results of the research were exhibited at ifa Gallery, Stuttgart.",
    ],
  },
  {
    title: "Freelance Hardware Developer",
    company: "",
    image: hardware,
    date: "2012 -",
    points: [
      "Full-stack development according to customer requirements.",
      "Project managing: testing, debugging, deployment, launch, maintenance and updates.",
    ],
  },
  // {
  //   title: "",
  //   company_name: "",
  //   image: "",
  //   date: "",
  //   points: [],
  // },
];

export const projects = [];

export const contact = [
  {
    title: "email",
    link: "mailto:felipefierrod@gmail.com",
    icon: MailIcon,
  },
  {
    title: "github",
    link: "https://github.com/ffdietz",
    icon: GithubIcon,
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/in/felipe-fierro-dietz/",
    icon: LinkedinIcon,
  },
];

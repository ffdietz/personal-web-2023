import { TypeContact, TypeExperience, TypeSection, TypeSkill, TypeTechnology } from "@types";
import {
  amigo,
  css,
  cpp,
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
import { GithubIcon, LinkedinIcon, MailIcon } from "../theme/icons";

export const sections = {
  about: {
    id: "about",
    title: "About",
    scrollOption: "center",
  },
  works: {
    id: "works",
    title: "Works",
    scrollOption: "start",
  },
  contact:{
    id: "contact",
    title: "Contact",
    scrollOption: "center",
  },
};

export const heroText: String = "Creating with code";

export const aboutText: String = 
  `I'm Felipe, a software artisan merging visual arts with code. 

  With expertise in Javascript and C++, I craft software solutions that are both functional and visually compelling.

  Let's collaborate in creating digital landscapes that leave a lasting impression!`;

export const technologies: TypeTechnology[] = [
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
    name: "C/C++",
    icon: cpp,
  },
  {
    name: "Git",
    icon: git,
  },
];

export const skills: TypeSkill[] = [
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

export const experiences: TypeExperience[] = [
  {
    title: "Front-end Developer",
    company: "Twelve x Twelve",
    image: twelve,
    date: "2022 - 2023",
    points: [
      "Front-end features and improvements in the company's marketplace.",
      "Lead developer and project managment of the homepage www.twlvxtwlv.com.",
    ],
  },
  {
    title: "EMF Workshop",
    company: "Akademie der Künste",
    image: workshop,
    date: "2023",
    points: [
      "Circuit design, production of electronic boards for portable electromagnetic field sensors.",
      "Device construction workshop for children at the MiK Jugendkunstschule Berlin Mitte.",
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
      "Full-stack project development",
      "Instagram data visualisation with React and D3",
      "Project funded by National Fund for the Development of Culture and the Arts, Chile.",
    ],
  },
  {
    title: "Freelance Full-Stack Developer",
    company: "Autonomous",
    image: fullstack,
    date: "2021 -",
    points: [
      "Full-stack development according to customer requirements.",
      "Project managing: testing, debugging, deployment, launch, maintenance and updates.",
    ],
  },
  {
    title: "Hidroscopia Maule Data reader",
    company: "Claudia González",
    image: reader,
    date: "2021",
    points: [
      "Second stage of development for the artist Claudia González. SD memory card reader and transduction to water pump behaviour",
    ],
  },
  {
    title: "Hidroscopia Maule Data recorder",
    company: "Claudia González",
    image: recorder,
    date: "2021",
    points: [
      "Work developed to the artist Claudia González around the capture and sonorization of electromagnetic fields [EMF]. The results of the research were exhibited at ifa Gallery, Stuttgart.",
    ],
  },
  {
    title: "Freelance Hardware Developer",
    company: undefined,
    image: hardware,
    date: "2012 -",
    points: [
      "Electronic design, prototyping, PCB design, manufacturing and implementation of automation solutions and embedded systems.",
      "Firmware programming in AVR / C++.",
    ],
  },
];

export const projects = [];

export const contact: TypeContact[] = [
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

import { StaticImageData } from "next/image";

export interface Experience {
  title: string;
  company: string;
  date: string;
  points: string[];
  image: StaticImageData | undefined;
}

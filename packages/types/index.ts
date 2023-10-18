import { StaticImageData } from "next/image";

export type Experience = {
  title: string;
  company?: string;
  date?: string;
  points?: string[];
  image?: string;
}

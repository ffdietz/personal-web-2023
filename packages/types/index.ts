import { StaticImageData } from "next/image";

export type Experience = {
  title: string,
  company?: string,
  date?: string,
  points?: string[],
  image?: string,
}

export type TLink = {
  id: string,
  title: string,
}

export interface SectionProps {
  id: string;
  children: React.ReactNode;
}
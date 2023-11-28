
export type Experience = {
  title: string,
  company?: string,
  image?: string,
  date?: string,
  points?: string[],
}

export type TLink = {
  id: string,
  title: string,
}

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
}
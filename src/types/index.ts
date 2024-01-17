import { ComponentWithAs, IconProps } from "@chakra-ui/react";

export type Experience = {
  title: string;
  company?: string;
  image?: string;
  date?: string;
  points?: string[];
};

export type TypeSection = {
  id: string;
  title: string;
  scrollOption: ScrollLogicalPosition;
};

export type TypeTechnology = {
  name: string;
  icon: string;
};

export type TypeSkill = {
  name: string
};

export type TypeExperience = {
  title: string,
  company?: string,
  image: string,
  date: string,
  points: string[],
}
export type TypeContact = {
  title: string;
  link: string;
  icon: ComponentWithAs<"svg", IconProps>;
};



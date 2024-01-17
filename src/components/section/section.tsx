import { Stack } from "@chakra-ui/react";


interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id = undefined, children }) => {
  return (
    <section id={id || undefined}>
      <Stack
        justifyContent="center"
        w={{base: "full", md: "7xl", xl:"full"}}
        h={{base: "full", md: "auto"}}
        mx="auto"
        float="right"
      >
        {children}
      </Stack>
    </section>
  );
};

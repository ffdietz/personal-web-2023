import { Stack } from "@chakra-ui/react";


interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id = undefined, children }) => {
  return (
    <section id={id}>
      <Stack
        justifyContent="center"
        w="full"
        h={{base: "full", md: "auto"}}
        mr="auto"
      >
        {children}
      </Stack>
    </section>
  );
};

import { Stack } from "@chakra-ui/react";
import { SectionProps } from "../../../types";

export const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id}>
      <Stack justifyContent="center">{children}</Stack>
    </section>
  );
};

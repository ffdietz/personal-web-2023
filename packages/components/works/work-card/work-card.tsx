import { useState } from "react";
import { Button, GridItem, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "@types";


export function WorkCard({experience}: {experience: Experience}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { title, company, date, points, image } = experience;

  return (
    <GridItem
      w={80}
      h={isOpen ? "auto" : 48}
      color="secondaryColor"
      padding={4}
      bgImage={`url(${image})`}
      bgBlendMode="color-burn"
      bgColor="rgba(0, 0, 0, 0.8)"
      bgSize={isOpen ? "cover" : "contain"}
      bgRepeat="no-repeat"
      bgPosition="center"
      cursor="pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Text fontSize={32} lineHeight="1">
        {title}
      </Text>
      <Text lineHeight="1">{company}</Text>
      <Text>{date}</Text>
      <Text size="xs" w="2xs">
        {isOpen ? "less..." : "info"}
      </Text>
      {isOpen && (
        <UnorderedList>
          {points &&
            points.map((point) => {
              return <ListItem color="secondaryColor">{point}</ListItem>;
            })}
        </UnorderedList>
      )}
    </GridItem>
  );
}

import { useState } from "react";
import { Button, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "@types";


export function WorkCard({experience}: {experience: Experience}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { title, company, date, points, image } = experience;
  return (
    <Stack w="full" border="1px" color="red" padding={4}>
      <Text fontSize="24" lineHeight="1">
        {title}
      </Text>
      <Text lineHeight="0.1">{company}</Text>
      <Text>{date}</Text>
      <Button size="xs" w="2xs" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "less..." : "more..."}
      </Button>
      {isOpen && (
        <UnorderedList>
          {points &&
            points.map((point) => {
              return <ListItem>{point}</ListItem>;
            })}
        </UnorderedList>
      )}
    </Stack>
  );
}

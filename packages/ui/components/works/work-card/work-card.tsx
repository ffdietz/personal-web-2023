import { ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

export interface Experience {
  title: string,
  company_name: string,
  icon: string,
  date: string,
  points: string[]
}

export function WorkCard({experience}: {experience: Experience}) {
  const { title, company_name, date, points } = experience;
  return (
    <Stack border="1px" color="red">
      <Text>{title}</Text>
      <Text>{company_name}</Text>
      <Text>{date}</Text>
      <UnorderedList>
        {points && points.map((point)=> {
          return <ListItem>{point}</ListItem>
        })}
      </UnorderedList>
    </Stack>
  );
}

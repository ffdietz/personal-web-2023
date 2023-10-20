import { useState } from "react";
import { GridItem, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { Experience } from "@types";
import { AnimatePresence, motion } from "framer-motion";


export function WorkCard({experience}: {experience: Experience}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { title, company, date, points, image } = experience;

  return (
    <GridItem
      as={motion.div}
      animate={{
        backgroundSize: isOpen ? "150%" : "60%",
        backgroundColor: isOpen ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.7)",
      }}
      w={80}
      color="secondaryColor"
      bgImage={`url(${image})`}
      bgBlendMode="color"
      bgRepeat="no-repeat"
      bgPosition="top"
      backdropFilter="auto"
      cursor="pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Stack
        as={motion.div}
        animate={{ backdropFilter: isOpen ? "blur(6px)" : "blur(0px)" }}
        w="full"
        h="full"
        padding={8}
      >
        <Text fontSize={32} lineHeight="1">
          {title}
        </Text>
        <Text lineHeight="1">{company}</Text>
        <Text>{date}</Text>
        <AnimatePresence>
          {isOpen && (
            <UnorderedList>
              {points &&
                points.map((point) => {
                  return (
                    <ListItem
                      as={motion.li}
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.6,
                            delay: 0.2,
                          },
                          opacity: {
                            duration: 0.2,
                          },
                        },
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.5,
                          },
                          opacity: {
                            duration: 0.4,
                            delay: 0.3,
                          },
                        },
                      }}
                      color="secondaryColor"
                    >
                      {point}
                    </ListItem>
                  );
                })}
            </UnorderedList>
          )}
        </AnimatePresence>
      </Stack>
    </GridItem>
  );
}

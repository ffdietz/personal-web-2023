import {
  Flex,
  GridItem,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { Experience } from "@types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function WorkCard({ experience }: { experience: Experience }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { title, company, date, points, image } = experience;

  return (
    <GridItem
      as={motion.div}
      animate={{
        backgroundSize: isOpen ? "150%" : "90%",
        backgroundColor: isOpen ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.3)",
      }}
      w="xs"
      h="sm"
      bgImage={`url(${image})`}
      bgBlendMode="color-dodge"
      bgRepeat="no-repeat"
      bgPosition="center"
      color="secondaryColor"
      cursor="pointer"
      borderRadius={20}
      onClick={() => setIsOpen(!isOpen)}
    >
      <Stack
        as={motion.div}
        animate={{ backdropFilter: isOpen ? "blur(35px)" : "blur(0px)" }}
        borderRadius={20}
        w="full"
        h="full"
        padding={4}
        gap={2}
      >
        <Heading fontSize={32} lineHeight="1">
          {title}
        </Heading>
        {company && (
          <Text fontSize={22} lineHeight="0.5">
            {company}
          </Text>
        )}
        <Text fontSize={18}>{date}</Text>
        <Flex align="center" lineHeight="0.5">
          <Text as="span" fontSize={32} color="primaryColor">
            {isOpen ? "-" : "+"}
          </Text>
          <Text as="span" fontSize={18} color="primaryColor">
            INFO
          </Text>
        </Flex>
        <AnimatePresence>
          {isOpen && (
            <UnorderedList>
              {points &&
                points.map((point) => {
                  return (
                    <ListItem
                      as={motion.li}
                      key={point}
                      fontSize={18}
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

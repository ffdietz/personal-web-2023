import { Text, useBreakpointValue } from "@chakra-ui/react";
import { TLink } from "@types";
import { motion } from "framer-motion";
import Link from "next/link";

export function NavLink({
  link, isActive
}:{
  link: TLink; isActive: boolean;
}){
  const animate = useBreakpointValue({
    base: {
      color: isActive ? "#FF0DA4" : "#C9FF00",
    },
    md: {
      color: isActive ? "#FF0DA4" : "#C9FF00",
      fontSize: isActive ? "2.5rem" : "1.5rem",
    },
  });

  return (
    <Link
      key={link.title}
      href={`#${link.id}`}
      scroll={false}
      onClick={(event) => {
        event.preventDefault();
        document
          .getElementById(link.id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      <Text
        as={motion.span}
        animate={animate}
        fontSize={{ base: 8, md: 16 }}
        textAlign="right"
      >
        {link.title}
      </Text>
    </Link>
  );
}

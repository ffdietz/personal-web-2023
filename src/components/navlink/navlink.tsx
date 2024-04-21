"use client";
import { Text, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { TypeSection } from "@types";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavLinkProps {
  section: TypeSection;
  isActive: boolean;
}

export function NavLink({ section, isActive }: NavLinkProps) {
  const { id, title, scrollOption } = section;
  const breakpoint = useBreakpoint({ ssr: true });

  if (breakpoint !== "xl" && breakpoint !== "2xl") {
    scrollOption == "start";
  }

  const animate = useBreakpointValue(
    {
      base: {
        color: isActive ? "#FF0DA4" : "#C9FF00",
      },
      md: {
        color: isActive ? "#FF0DA4" : "#C9FF00",
        fontSize: isActive ? "2.5rem" : "1.5rem",
      },
    },
    { ssr: true }
  );

  return (
    <Link
      key={title}
      href={`#${id}`}
      scroll={false}
      onClick={(event) => {
        event.preventDefault();
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block:
            breakpoint !== "xl" && breakpoint !== "2xl"
              ? "start"
              : scrollOption,
        });
      }}
    >
      <Text
        as={motion.span}
        animate={animate}
        fontSize={16}
        fontWeight={900}
        textAlign="right"
      >
        {title}
      </Text>
    </Link>
  );
}

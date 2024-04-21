"use client";
import { Box, Stack } from "@chakra-ui/react";
import { sections } from "@content";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "../logo";
import { NavLink } from "../navlink";
import { Resume } from "../resume";
import { TypeSection } from "@types";

const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const [isScroll, setIsScroll] = useState<boolean>(false);
  const scrollSet = () => {
    if (window.scrollY >= 80) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  if (isBrowser()) {
    window.addEventListener("scroll", scrollSet);
  }

  function scrollToTop() {
    if (isBrowser()) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.4,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <AnimatePresence>
      <Stack
        as={motion.nav}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 2,
          },
        }}
        w={{ base: "full", md: 44 }}
        h={{ base: "auto", md: "full" }}
        backdropFilter={{ base: "auto", md: "none" }}
        backdropBlur={{ base: isScroll ? "5px" : "0px", md: "none" }}
        flexDir={{ base: "row", md: "column" }}
        py={{ base: 6, md: 14 }}
        px={{ base: 4, md: "none" }}
        position="fixed"
        zIndex={2}
        textAlign="right"
        justifyContent="space-between"
        alignContent={{ base: "center", md: "none" }}
      >
        <Box cursor="pointer" onClick={scrollToTop}>
          <Logo />
        </Box>
        <Box
          display="flex"
          flexDir={{ base: "row", md: "column" }}
          gap={{ base: 4, md: "none" }}
        >
          {Object.values(sections).map((section) => (
            <NavLink
              key={section.title}
              section={section as TypeSection}
              isActive={activeSection === section.id}
            />
          ))}
        </Box>
        <Box display={{ base: "none", md: "block" }}>
          <Resume />
        </Box>
      </Stack>
    </AnimatePresence>
  );
}

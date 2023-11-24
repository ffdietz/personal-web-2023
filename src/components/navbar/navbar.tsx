import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { Logo } from "./logo";
import { NavLink } from "./navlink";
import { TLink } from "@types";
import { sections } from "@content";
import { Resume } from "./resume";


export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.5,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
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
      <Box
        as={motion.nav}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 2,
          },
        }}
        w={{ base: "full", md: 40 }}
        h="full"
        display="flex"
        flexDir={{ base: "row", md: "column" }}
        py={{ base: 6, md: 14 }}
        px={{ base: 4, md: "none" }}
        my="auto"
        position="fixed"
        zIndex={2}
        textAlign="right"
        justifyContent="space-between"
        alignContent={{base: "center",md:"none"}}
      >
        <Box cursor="pointer" onClick={scrollToTop}>
          <Logo />
        </Box>
        <Box display="flex" flexDir={{ base: "row", md: "column" }} gap={{base: 4, md:"none"}}>
          {sections.map((link: TLink) => (
            <NavLink
              key={link.title}
              link={link}
              isActive={activeSection === link.id}
            />
          ))}
        </Box>
        <Box display={{base: "none", md:"block"}}>
          <Resume />
        </Box>
      </Box>
    </AnimatePresence>
  );
}

import { useEffect, useState } from "react";
import { Box, Stack } from "@chakra-ui/react";
import { NavLink } from "../navlink";
import { Resume } from "@components/resume";
import { sections } from "@content";
import { Logo } from "@components/logo";
import { TLink } from "@types";

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
    <Stack
      w={44}
      h="100vh"
      py={14}
      my="auto"
      position="fixed"
      zIndex={1}
      textAlign="right"
      justifyContent="space-between"
    >
      <Box cursor="pointer" onClick={scrollToTop}>
        <Logo />
      </Box>
      <Stack>
        {sections.map((link: TLink) => (
          <NavLink
            key={link.title}
            link={link}
            isActive={activeSection === link.id}
          />
        ))}
      </Stack>
      <Resume />
    </Stack>
  );
}

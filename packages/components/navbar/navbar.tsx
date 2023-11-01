import { Stack } from "@chakra-ui/react";
import { sections } from "@content";
import { useEffect, useState } from "react";
import { NavLink } from "./nav-link";
import { Resume } from "@components/resume";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

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
      h="65vh"
      position="fixed"
      zIndex={1}
      marginTop={60}
      textAlign="right"
      justifyContent="space-between"
    >
      <Stack>
        {sections.map((link) => 
            <NavLink
              link={link}
              isActive={activeSection === link.id}
              key={link.title}
            />
        )}
      </Stack>
      <Resume />
    </Stack>
  );
}

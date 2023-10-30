import { Stack } from "@chakra-ui/react";
import { sections } from "@content";
import { useEffect, useState } from "react";
import { NavLink } from "./nav-link";

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
    <Stack w={48} h="100vh" position="fixed" paddingLeft={20} marginTop={72}>
      {sections.map((link) => {
        return (
          <NavLink
            link={link}
            isActive={activeSection === link.id}
            key={link.title}
          />
        );
      })}
    </Stack>
  );
}

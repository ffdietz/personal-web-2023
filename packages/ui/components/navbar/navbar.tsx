import { Flex } from "@chakra-ui/react";
import Link from "next/link";
import Logo from "../logo/Logo";


export function Navbar() {
  return (
<<<<<<< Updated upstream
    <Flex bg="bgColor" minWidth="100vw" minHeight={38} padding={8}>
      <Logo />
      <Flex gap={8} >
        <Link href="">About</Link>
        <Link href="">Works</Link>
        <Link href="">Contact</Link>
=======
    <Flex
      bg="transparent"
      justifyContent="space-between"
      minWidth="100vw"
      minH={32}
      position="fixed"
      top={0}
      px={28}
      py={8}
    >
      <Box
        cursor="pointer"
        onClick={() => {
          setActive("");
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }}
      >
        <Logo />
      </Box>
      <Flex gap={8}>
        {navLinks.map((link) => {
          return (
            <Link
              key={link.title}
              href={`#${link.id}`}
              onClick={(event) => {
                handleScroll(event);
                setActive(link.id);
              }}
            >
              <Text
                color={active === link.id ? "secondaryColor" : "textColor"}
                fontSize={20}
                textShadow="1px 1px accentColor"
              >
                {link.title}
              </Text>
            </Link>
          );
        })}
>>>>>>> Stashed changes
      </Flex>
    </Flex>
  );
}

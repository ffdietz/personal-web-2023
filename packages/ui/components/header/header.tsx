import { Flex } from '@chakra-ui/react'
import Title from '../title/title'
import { Logo } from '../logo';

function Header() {
  return (
    <Flex
      width="full"
      position="fixed"
      cursor="pointer"
      py={14}
      px={24}
      justifyContent="space-between"
      alignItems="center"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      <Logo />
      <Title />
    </Flex>
  );
}

export default Header
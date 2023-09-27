import { Flex } from '@chakra-ui/react'
import { Title } from '../title'
import { Logo } from '../logo';

function Header() {
  return (
    <Flex
      width="full"
      position="fixed"
      cursor="pointer"
      justifyContent="space-between"
      alignItems="center"
      py={14}
      px={24}
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
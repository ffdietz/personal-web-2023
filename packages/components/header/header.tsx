import { Box, Flex } from '@chakra-ui/react'
import { Title } from '../title'
import { Logo } from '../logo';

function Header() {
  return (
    <Flex
      width="full"
      position="fixed"
      justifyContent="space-between"
      alignItems="center"
      py={14}
      px={24}
    >
      <Box
        cursor="pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Logo />
      </Box>
      <Box
        cursor="pointer"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Title />
      </Box>
    </Flex>
  );
}

export default Header
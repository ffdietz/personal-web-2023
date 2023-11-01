import { Box, Flex } from '@chakra-ui/react'
import { Title } from '../title'

export function Header() {
  function scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Flex
      width="full"
      position="fixed"
      justifyContent="space-between"
      alignItems="center"
      py={14}
      px={24}
    >
      <Box cursor="pointer" onClick={scrollToTop}>
        <Title />
      </Box>
    </Flex>
  );
}

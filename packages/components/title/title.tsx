import { Box, Stack, Text } from '@chakra-ui/react'

export function Title() {
  return (
    <Stack>
      <Text
        w={"auto"}
        fontFamily=""
        fontSize={44}
        fontWeight={500}
        lineHeight="0.75"
        textTransform="uppercase"
        // whiteSpace={"break-spaces"}
      >
        FFD
      </Text>
      <Text fontFamily="" fontSize={18} marginLeft="auto" lineHeight={0.1}>
        developer
      </Text>
    </Stack>
  );
}

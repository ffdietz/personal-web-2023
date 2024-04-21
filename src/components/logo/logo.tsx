import { Stack, Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Stack>
      <Text
        fontSize={{ base: 26, md: 58 }}
        fontWeight={900}
        lineHeight={0.75}
        textTransform="uppercase"
      >
        ffd
      </Text>
      <Text
        fontSize={{ base: 8, md: 18 }}
        fontWeight={900}
        lineHeight={0.1}
        marginLeft="auto"
      >
        developer
      </Text>
    </Stack>
  );
}

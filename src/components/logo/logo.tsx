import { Stack, Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Stack>
      <Text
        w={{base:"auto", md:"full"}}
        fontSize={{ base: 22, md: 28 }}
        fontWeight={900}
        lineHeight={0.75}
      >
        Felipe Fierro
      </Text>
      <Text
        fontSize={{ base: 12, md: 18 }}
        fontWeight={900}
        lineHeight={0.1}
        marginLeft="auto"
      >
        developer
      </Text>
    </Stack>
  );
}

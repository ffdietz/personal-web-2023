import { Stack, Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Stack>
      <Text
        fontFamily=""
        fontSize={58}
        fontWeight={500}
        lineHeight="0.75"
        textTransform="uppercase"
      >
        ffd
      </Text>
      <Text fontFamily="" fontSize={18} marginLeft="auto" lineHeight={0.1}>
        developer
      </Text>
    </Stack>
  );
}

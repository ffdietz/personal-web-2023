import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Resume() {
  return (
    <Link href="/FelipeFierro-Developer2023.pdf" locale={false}>
      <Button
        size="lg"
        w={8}
        h={14}
        colorScheme="cyan"
        variant="outline"
        borderRadius="full"
        borderWidth={4}
      >
        CV
      </Button>
    </Link>
  );
}

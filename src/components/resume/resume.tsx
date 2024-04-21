import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function Resume() {
  return (
    <Link href="/FelipeFierro-Developer2023.pdf" locale={false}>
      <Button
        w={14}
        h={14}
        size="lg"
        colorScheme="cyan"
        variant="outline"
        borderRadius="full"
        borderWidth={3}
        _hover={{bg:"none"}}
      >
        CV
      </Button>
    </Link>
  );
}

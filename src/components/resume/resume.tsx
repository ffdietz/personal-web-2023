import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function Resume() {
  return (
    <Link href="/FelipeFierro-Developer2023.pdf" locale={false}>
      <Button
        size="lg"
        w={24}
        h={10}
        colorScheme="cyan"
        variant="outline"
        borderRadius="full"
        borderWidth={3}
      >
        CV
      </Button>
    </Link>
  );
}

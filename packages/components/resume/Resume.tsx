import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";

export function Resume() {
  return (
    <Link href="/FelipeFierro-Developer2023.pdf" locale={false}>
      <Button colorScheme="teal" variant="outline">
        CV
      </Button>
    </Link>
  );
}
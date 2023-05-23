"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "../packages/ui/components/footer";
import { Navbar } from "../packages/ui/components/navbar";
import { theme } from "../packages/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}

"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@ui/components/footer";
import { Navbar } from "@ui/components/navbar";

import { ReactNode, useRef } from "react";
import { theme } from "@theme/theme";

import { navLinks } from "@constants";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <nav>
              <Navbar />
            </nav>
            <main>
              {children}
            </main>
            <footer>
              <Footer />
            </footer>
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}

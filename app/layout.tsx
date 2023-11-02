"use client";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { theme } from "@theme/theme";
import { Navbar } from "@components/navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <nav>
              <Navbar />
            </nav>
            <main>{children}</main>
            <footer>
              <Footer />
            </footer>
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}

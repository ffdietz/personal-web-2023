"use client";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import { Header } from "@components/header/header";
import { theme } from "@theme/theme";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <header>
              <Header />
            </header>
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

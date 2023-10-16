"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@components/footer";
import Header from "@components/header/header";
import { Navbar } from "@components/navbar";
import { theme } from "@theme/theme";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <header>
              <Header />
            </header>
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

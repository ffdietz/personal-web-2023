"use client";
import { ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "@ui/components/footer";
import { Navbar } from "@ui/components/navbar";
import { theme } from "@theme/theme";
import Header from "@ui/components/header/header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider theme={theme}>
            <header>
              <Header/>
            </header>
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

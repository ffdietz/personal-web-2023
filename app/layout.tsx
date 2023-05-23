"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "../packages/components/footer";
import { Navbar } from "../packages/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <ChakraProvider>
            <Navbar />
            {children}
            <Footer />
          </ChakraProvider>
        </body>
      </html>
    </>
  );
}

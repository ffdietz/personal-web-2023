import { ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Footer } from "../src/components/layout/footer";
import { Navbar } from "../src/components/layout/navbar";
import { theme } from "../src/theme/theme";

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

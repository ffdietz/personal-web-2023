import { About } from "../about";
import { Contact } from "../contact";
import { Hero } from "../hero";
import { Works } from "../works";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Contact />
    </>
  );
}

import Image from "next/image";
import Hero from "./[locale]/sections/Hero";
import FeaturedProjects from "./[locale]/sections/FeaturedProjects";
import About from "./[locale]/sections/About";
import Contact from "./[locale]/sections/Contact";
import InfiniteAnimation from "./components/InfiniteAnimation";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <FeaturedProjects />
      <About />
      <Contact />
      <InfiniteAnimation text=" kamilchrobak.pod@gmail.com" />
    </main>
  );
}

import Image from "next/image";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import InfiniteAnimation from "../components/InfiniteAnimation";

import { getDictionary } from "@/dictionaries";

export default async function Home({params: { lang }}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="">
      <Hero dictionary={dictionary} />
      <FeaturedProjects dictionary={dictionary}/>
      <About dictionary={dictionary}/>
      <Contact dictionary={dictionary}/>
      <InfiniteAnimation text="kamilchrobak.pod@gmail.com" />
    </main>
  );
}

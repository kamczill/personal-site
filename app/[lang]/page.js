import Image from "next/image";
import Hero from "./sections/Hero";
import FeaturedProjects from "./sections/FeaturedProjects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import InfiniteAnimation from "../components/InfiniteAnimation";
import { getDictionary } from "@/dictionaries";

export async function generateMetadata({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.homepage.metadata.title,
    description: dictionary.homepage.metadata.description,
  };
}

export default async function Home({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="overflow-x-hidden">
      <Hero dictionary={dictionary} />
      <FeaturedProjects dictionary={dictionary} />
      <About dictionary={dictionary} lang={lang} />
      <Contact dictionary={dictionary} />
      <InfiniteAnimation text="kamilchrobak.pod@gmail.com" />
    </main>
  );
}

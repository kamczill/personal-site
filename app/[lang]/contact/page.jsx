import React from "react";
import Contact from "../sections/Contact";
import Heading from "@/app/components/Heading";
import { getDictionary } from "@/dictionaries";

export async function generateMetadata({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.contactPage.metadata.title,
    description: dictionary.contactPage.metadata.description,
  };
}

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <Heading>Contact</Heading>
      <Contact dictionary={dictionary} />
    </div>
  );
}

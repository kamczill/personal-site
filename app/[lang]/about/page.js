import React from "react";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import portrait from "../../../public/kamil-img1.webp";

import { getDictionary } from "@/dictionaries";

export async function generateMetadata({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.aboutPage.metadata.title,
    description: dictionary.aboutPage.metadata.description,
  };
}

export default async function Page({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Heading>{dictionary.aboutPage.headline}</Heading>

      <div className="py-5 px-[10px] border-t border-secondary sm:px-5 md:px-[60px] flex flex-col items-center md:grid md:grid-cols-12 md:gap-5 md:py-[100px] md:items-start md">
        <div className="pt-5 pb-[40px] md:col-start-1 md:col-end-6 w-full">
          <Image
            src={portrait}
            alt="Kamil Chrobak"
            className="w-full bg-gray-300"
          />
        </div>
        <div className="md:col-start-7 md:col-end-13">
          <h2 className="text-[40px] md:text-[56px]">
            {dictionary.aboutPage.content.headline}
          </h2>
          <div className="pt-5 md:text-[24px]">
            <p>{dictionary.aboutPage.content.paragraph_1}</p>
            <br />
            <p>{dictionary.aboutPage.content.paragraph_2}</p>
            <br />
            <p>{dictionary.aboutPage.content.paragraph_3}</p>
            <br />
            <p>{dictionary.aboutPage.content.paragraph_4}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

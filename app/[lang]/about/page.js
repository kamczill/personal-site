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
          <Image src={portrait} alt="Kamil Chrobak" className="w-full" />
        </div>
        <div className="md:col-start-7 md:col-end-13">
          <h2 className="text-[40px] md:text-[56px]">
            Crafting Innovative Digital Experiences with Precision and Passion
          </h2>
          <div className="pt-5 md:text-[24px]">
            <p>
              Hi there, I&apos;m Kamil, a passionate frontend developer based in
              Kraków. I thrive on combining creativity with cutting-edge
              technology, bringing to life visually stunning and user-friendly
              digital experiences. With expertise in Shopify, custom solutions,
              and pixel-perfect design, I ensure every project not only meets
              but exceeds expectations.
            </p>
            <br />
            <p>
              I hold a degree in Computer Science Engineering from the
              Pedagogical University of Kraków and completed my education at the
              IT technical school in Rabka-Zdrój. This solid foundation has
              given me the skills and determination to tackle both frontend and
              backend challenges with confidence.
            </p>
            <br />
            <p>
              My skills in JavaScript, React, Liquid, HTML, and CSS allow me to
              handle even the most complex challenges with ease. Additionally,
              my understanding of backend technologies enables me to deliver
              well-rounded, robust solutions.
            </p>
            <br />
            <p>Let&apos;s build something extraordinary together!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

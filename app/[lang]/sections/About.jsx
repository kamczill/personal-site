import React from "react";
import Headline from "@/app/components/Headline";
import JobExperience from "@/app/components/JobExperience";
import UnderlineButton from "@/app/components/UnderlineButton";
import Image from "next/image";
import image from "../../../public/kamil-chrobak.jpg";
import ExperienceList from "@/app/components/ExperienceList";

const About = ({ dictionary, lang }) => {
  const experienceList = [
    {
      position: "Intern Frontend Developer",
      company: "WD Michal Proszek",
      from: "03.2022",
      to: "07.2022",
    },
    {
      position: "Junior Frontend/Shopify Developer",
      company: "NetHype",
      from: "03.2023",
      to: dictionary.homepage.about.experience.current,
    },
  ];

  return (
    <div className="px-[10px] py-5 lg:px-[60px]">
      <Headline>{dictionary.homepage.about.headline}</Headline>

      <div className="py-5">
        <div className="py-[10px] lg:grid lg:grid-cols-12">
          <div className="sm:flex sm:items-start sm:gap-5 lg:col-span-6 xl:col-span-5">
            <ExperienceList experiences={experienceList} />

            <div className="pt-5 sm:pt-0 lg:pr-[60px] lg:w-fit">
              <h6 className=" uppercase pt-2 text-sm text-secondary sm:text-black sm:py-2 lg:text-base">
                CV
              </h6>
              <div className="sm:pt-5 lg:text-2xl lg:w-full">
                <UnderlineButton
                  className="text-nowrap"
                  hasArrow
                  href="my-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dictionary.homepage.about.openCv}
                </UnderlineButton>
              </div>
            </div>
          </div>

          <div className="py-5 lg:col-start-7 lg:col-end-13 xl:col-start-6">
            <div>
              <p className="text-2xl pb-5 sm:text-[28px]">
                {dictionary.homepage.about.description}
              </p>
              <UnderlineButton href={lang + "/about"} hasArrow>
                {dictionary.homepage.about.readMore}
              </UnderlineButton>
            </div>
            <div className="max-w-[200px] h-full max-h-[300px] mt-5 pb-[10px] overflow-hidden flex lg:items-end">
              <Image
                src={image}
                alt="Kamil Chrobak"
                className="w-auto h-[80%] transition duration-300 bg-slate-400 lg:hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

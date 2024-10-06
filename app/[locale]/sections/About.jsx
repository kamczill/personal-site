import React from "react";
import Headline from "@/app/components/Headline";
import JobExperience from "@/app/components/JobExperience";
import UnderlineButton from "@/app/components/UnderlineButton";
import Image from "next/image";
import image from "../../../public/kamil-chrobak.jpg";
import ExperienceList from "@/app/components/ExperienceList";

const experienceList = [
  {
    position: "Nike Senior Designer",
    from: "2023",
    to: "Current",
  },
  {
    position: "Nike Senior Designer",
    from: "2023",
    to: "Current",
  },
  {
    position: "Nike Senior Designer",
    from: "2023",
    to: "Current",
  },
];

const About = () => {
  return (
    <div className="px-[10px] py-5 lg:px-[60px]">
      <Headline>About</Headline>

      <div className="py-5">
        <div className="py-[10px] lg:grid lg:grid-cols-12">
          <div className="sm:flex sm:items-start sm:gap-5 lg:col-span-6 xl:col-span-5">
            <ExperienceList experiences={experienceList} />

            <div className="pt-5 sm:pt-0 lg:pr-[60px] lg:w-fit">
              <h6 className=" uppercase pt-2 text-sm text-secondary sm:text-black sm:py-2 lg:text-base">
                Service
              </h6>
              <ul className="flex flex-col text-lg sm:pt-5 lg:text-2xl lg:w-full">
                <li>Art Director</li>
                <li>Visual Design</li>
                <li>Digital Branding</li>
                <li>UX/UI Design</li>
              </ul>
            </div>
          </div>

          <div className="py-5 lg:col-start-7 lg:col-end-13 xl:col-start-6">
            <div>
              <p className="text-2xl pb-5 sm:text-[28px]">
                Hey there, I'm Mia Chen, a digital designer based right in the
                bustling heart of San Francisco. I thrive on the intersection of
                creativity and technology, always striving to bring a fresh
                perspective to my design projects. With a sharp eye for detail
                and a solid grasp of user experience principles, I specialize in
                crafting visually stunning and intuitive digital experiences.
              </p>
              <UnderlineButton hasArrow>Read more</UnderlineButton>
            </div>
            <div className="max-w-[200px] h-full max-h-[300px] mt-5 pb-[10px] overflow-hidden flex lg:items-end">
              <Image
                src={image}
                alt="Kamil Chrobak"
                className="w-auto h-[80%] transition duration-300 lg:hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

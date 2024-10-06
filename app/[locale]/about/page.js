import React from "react";
import Heading from "../components/Heading";
import Image from "next/image";
import portrait from "./../../public/kamil-chrobak.jpg";
const page = () => {
  return (
    <div>
      <Heading>About</Heading>

      <div className="py-5 px-[10px] border-t border-secondary sm:px-5 md:px-[60px] flex flex-col items-center md:grid md:grid-cols-12 md:gap-5 md:py-[100px] md:items-start md">
        <div className="pt-5 pb-[40px] md:col-start-1 md:col-end-6 w-full">
          <Image src={portrait} alt="Kamil Chrobak" className="w-full" />
        </div>
        <div className="md:col-start-7 md:col-end-13">
          <h2 className="text-[40px] md:text-[56px]">
            I specialize in crafting visually stunning and intuitive digital
            experiences.
          </h2>
          <div className="pt-5 md:text-[24px]">
            <p>
              Hey there, I'm Mia Chen, a digital designer based right here in
              the bustling heart of San Francisco. I thrive on the intersection
              of creativity and technology, always striving to bring a fresh
              perspective to my design projects.
            </p>
            <br />
            <p>
              Hey there, I'm Mia Chen, a digital designer based right here in
              the bustling heart of San Francisco. I thrive on the intersection
              of creativity and technology, always striving to bring a fresh
              perspective to my design projects.
            </p>
            <br />
            <p>
              Hey there, I'm Mia Chen, a digital designer based right here in
              the bustling heart of San Francisco. I thrive on the intersection
              of creativity and technology, always striving to bring a fresh
              perspective to my design projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

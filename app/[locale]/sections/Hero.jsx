import React from "react";
import InfiniteAnimation from "@/app/components/InfiniteAnimation";

const Hero = () => {
  return (
    <div className="flex flex-col py-2 overflow-hidden">
      <div className="p-4 lg:grid lg:grid-cols-12 lg:gap-5 lg:px-[60px]">
        <h4 className="text-2xl pb-5 lg:grid lg:col-start-6 lg:col-end-13 lg:text-[32px] lg:leading-normal lg:pr-5">
          Meet Kamil, a frontend developer based in Kraków. With expertise in creating Shopify themes and custom solutions, Kamil combines precision, pixel-perfect design, and timely delivery. Specializing in JavaScript, CSS, HTML, React, and Liquid, he collaborates closely with UX/UI designers to bring innovative digital projects to life.


        </h4>
      </div>

      <InfiniteAnimation text="Let's Work Together." />
    </div>
  );
};

export default Hero;

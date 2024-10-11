import React from "react";
import InfiniteAnimation from "@/app/components/InfiniteAnimation";

const Hero = ({dictionary}) => {
  return (
    <div className="flex flex-col py-2 overflow-hidden">
      <div className="p-4 lg:grid lg:grid-cols-12 lg:gap-5 lg:px-[60px]">
        <h4 className="text-2xl pb-5 lg:grid lg:col-start-6 lg:col-end-13 lg:text-[32px] lg:leading-normal lg:pr-5">
          {dictionary.homepage.hero.description}
        </h4>
      </div>

      <InfiniteAnimation text={dictionary.homepage.hero.animationText} />
    </div>
  );
};

export default Hero;

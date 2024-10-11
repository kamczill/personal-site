import React from "react";
import Image from "next/image";
import UnderlineButton from "./UnderlineButton";

const FeaturedProject = ({
  data
}) => {

  const {
    date, title, description, features, cover
  } = data
  const projectYear = new Date(date).getFullYear()

  const pills = features.split(', ').map((pill) => (
    <div
      key={pill}
      className="px-[20px] py-[10px] text-sm uppercase border border-primary rounded-[80px]"
    >
      {pill}
    </div>
  ));

  return (
    <div className="py-5 border-b border-b-primary lg:grid lg:grid-cols-12 lg:gap-4 lg:py-10">
      <h6 className="text-sm lg:col-start-5 lg:col-end-6 lg:my-4 lg:text-base lg:text-center">
        {projectYear}
      </h6>

      <div className="lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:flex lg:flex-col lg:gap-[100px]">
        <div className="pt-[10px] lg:pt-0">
          <h2 className="text-[40px] uppercase lg:text-[56px]">{title}</h2>
          <div className="py-2 lg:py-0 lg:pb-5">
            <p className="pt-[10px] pb-[20px] text-lg lg:text-[24px]">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 pb-10">{pills}</div>
        </div>

        <UnderlineButton href="#" hasArrow={true}>
          View project
        </UnderlineButton>
      </div>

      <a
        href={'#'}
        className="py-5 block lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:py-0 overflow-hidden"
      >
        <Image
          alt={cover.alternativeText}
          src={process.env.NEXT_PUBLIC_STRAPI_API_URL + cover.url}
          width={cover.width}
          height={cover.height}
          className="lg:object-contain lg:h-full lg:hover:scale-110 transition duration-500"
        />
      </a>
    </div>
  );
};

export default FeaturedProject;

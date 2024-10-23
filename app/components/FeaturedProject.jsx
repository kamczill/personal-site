import React from "react";
import Image from "next/image";
import UnderlineButton from "./UnderlineButton";
import Pill from "./Pill";
import Link from "next/link";

const FeaturedProject = ({ data, dictionary }) => {
  const { date, title, description, features, cover } = data;
  const projectYear = new Date(date).getFullYear();
  const url = dictionary.lang + "/projects/" + data?.project?.documentId;

  if (cover) console.log(cover);

  const pills = features
    .split(", ")
    .map((pill) => <Pill key={pill}>{pill}</Pill>);

  return (
    <div className="py-5 border-b border-b-primary lg:grid lg:grid-cols-12 lg:gap-4 lg:py-10">
      <h6 className="text-sm lg:col-start-5 lg:col-end-6 lg:my-4 lg:text-base lg:text-center">
        {projectYear}
      </h6>

      <div className="lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:flex lg:flex-col lg:gap-[100px]">
        <div className="pt-[10px] lg:pt-0">
          <Link href={url}>
            <h2 className="text-[40px] uppercase lg:text-[56px]">{title}</h2>
          </Link>
          <div className="py-2 lg:py-0 lg:pb-5">
            <p className="pt-[10px] pb-[20px] text-lg lg:text-[24px]">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-5 pb-10">{pills}</div>
        </div>

        <UnderlineButton href={url} hasArrow={true}>
          {dictionary.homepage.featuredProjects.viewProject}
        </UnderlineButton>
      </div>

      <Link
        href={url}
        className="py-5 block lg:col-start-6 lg:col-end-13 lg:row-start-1 lg:py-0 overflow-hidden"
      >
        {cover && (
          <Image
            alt={cover.alternativeText || title}
            src={cover.url}
            width={cover.width}
            height={cover.height}
            className="bg-gray-300 lg:bg-transparent lg:object-contain lg:h-full lg:hover:scale-110 transition duration-500"
          />
        )}
      </Link>
    </div>
  );
};

export default FeaturedProject;

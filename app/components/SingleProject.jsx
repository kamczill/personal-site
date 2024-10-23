import Image from "next/image";
import React from "react";
import UnderlineButton from "./UnderlineButton";
import Link from "next/link";

const SingleProject = ({ title, description, link, image, dictionary }) => {
  const url = "/" + dictionary.lang + "/projects/" + link;

  return (
    <div className="flex flex-col gap-5 pb-5">
      <Link href={url} className="overflow-hidden">
        {image && (
          <Image
            className="bg-gray-300 lg:hover:scale-110 transition duration-500"
            src={image?.url}
            alt={title}
            width={image.width}
            height={image.height}
          />
        )}
      </Link>
      <div className="flex flex-col gap-5">
        <Link href={url}>
          <h2 className="text-[40px] underline-offset-8 hover:underline">
            {title}
          </h2>
        </Link>
        <p className="pb-5">{description}</p>
      </div>
      <UnderlineButton href={url} hasArrow>
        {dictionary.projectsPage.singleProject.viewProject}
      </UnderlineButton>
    </div>
  );
};

export default SingleProject;

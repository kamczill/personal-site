import Image from "next/image";
import React from "react";
import UnderlineButton from "./UnderlineButton";

const SingleProject = ({ title, description, link, image }) => {
  return (
    <div className="flex flex-col gap-5 pb-5">
      <div>
        <Image src={image} alt={title} />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-[40px]">{title}</h2>
        <p className="pb-5">{description}</p>
      </div>
      <UnderlineButton hasArrow>View project</UnderlineButton>
    </div>
  );
};

export default SingleProject;

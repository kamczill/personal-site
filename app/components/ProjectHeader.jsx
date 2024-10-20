import React from "react";
import Pill from "./Pill";
import UnderlineButton from "./UnderlineButton";

const ProjectHeader = ({ title, description, features, links }) => {
  const pills = features
    .split(", ")
    .map((pill) => <Pill key={pill}>{pill}</Pill>);

  const linkButtons =
    links &&
    Object.entries(links).map((link, idx) => (
      <UnderlineButton key={idx} href={link[1]} hasArrow>
        {link[0]}
      </UnderlineButton>
    ));

  return (
    <header className="flex flex-col p-[60px] lg:grid lg:gap-5 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h2 className="text-[40px] break-words uppercase lg:text-[54px]">
          {title}
        </h2>
      </div>
      <div className="pt-5 lg:col-start-6 lg:col-end-13">
        <p className="text-2xl leading-9 lg:text-3xl">{description}</p>
        <div className="pt-5 flex flex-wrap gap-4 pb-10">{pills}</div>
        <div className="flex flex-wrap gap-8 w-fit">{linkButtons}</div>
      </div>
    </header>
  );
};

export default ProjectHeader;

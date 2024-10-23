import React from "react";
import JobExperience from "./JobExperience";

const ExperienceList = ({ experiences, dictionary }) => {
  return (
    <div className="max-w-[400px] sm:pr-5 sm:pb-5 lg:max-w-none lg:w-fit lg:pr-[60px]">
      <h6 className=" uppercase py-2 text-sm text-secondary sm:text-black lg:text-base">
        {dictionary.homepage.about.experience.title}
      </h6>
      <div className="flex flex-col gap-5 sm:pt-5">
        {experiences.reverse().map((experience, index) => (
          <JobExperience
            key={`${experience.position}--${experience.from}`}
            position={experience.position}
            company={experience.company}
            from={experience.from}
            to={experience.to}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;

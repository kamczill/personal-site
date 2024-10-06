import React from "react";
import JobExperience from "./JobExperience";

const ExperienceList = ({ experiences }) => {
  return (
    <div className="max-w-[148px] sm:pr-5 sm:pb-5 lg:max-w-none lg:w-fit lg:pr-[60px]">
      <h6 className=" uppercase py-2 text-sm text-secondary sm:text-black lg:text-base">
        Experience
      </h6>
      <div className="flex flex-col gap-5 sm:pt-5">
        {experiences.map((experience, index) => (
          <JobExperience
            key={`${experience.position}--${experience.from}`}
            position={experience.position}
            from={experience.from}
            to={experience.to}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceList;

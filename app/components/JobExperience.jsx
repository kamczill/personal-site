import React from "react";

const JobExperience = ({ position, company, from, to }) => {
  return (
    <div>
      <p className="text-[18px] lg:text-2xl">{position}</p>
      <p className="text-black lg:text-lg">{company}</p>
      <p className="text-secondary">
        {from} - {to}
      </p>
    </div>
  );
};

export default JobExperience;

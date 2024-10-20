import React from "react";
import Headline from "@/app/components/Headline";
import SingleProject from "@/app/components/SingleProject";
import image from "../../../public/project1.webp";

const AllProjects = ({ data, dictionary }) => {
  const projects = [...data].map((project) => (
    <SingleProject
      key={project.documentId}
      title={project.title}
      description={project.description}
      image={project.cover}
      link={project.documentId}
      dictionary={dictionary}
    />
  ));

  return (
    <div className="p-[10px] sm:p-[20px] lg:px-[60px] pt-5 border-t border-secondary flex flex-col gap-5">
      <Headline>{dictionary.projectsPage.allProjects.headline}</Headline>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-6">
        {projects}
      </div>
    </div>
  );
};

export default AllProjects;

import React from "react";
import { fetchFromStrapi } from "../utils/fetchFromStrapi";
import Link from "next/link";

const ProjectPagination = async ({ currentId, dictionary }) => {
  const res = await fetchFromStrapi(
    "projects",
    dictionary.lang,
    "fields[0]=documentId&fields[1]=title",
    "false"
  );
  const json = await res.json();
  const arrayData = [...json.data];

  const projectIndex = arrayData.findIndex((el) => el.documentId === currentId);
  const previousProjectIndex = projectIndex > 0 ? projectIndex - 1 : null;
  const nextProjectIndex =
    projectIndex < arrayData.length - 1 ? projectIndex + 1 : null;

  const previousProject = arrayData[previousProjectIndex];
  const nextProject = arrayData[nextProjectIndex];

  const PaginationElement = ({ spanText, project, className }) => (
    <div className={`flex flex-col ${className}`}>
      <span className="uppercase text-primary">{spanText}</span>
      <Link
        href={project.documentId}
        className="text-4xl uppercase lg:text-5xl lg:leading-[1.4] hover:underline hover:underline-1 hover:underline-offset-4"
      >
        {project.title}
      </Link>
    </div>
  );

  return (
    <div className="flex flex-col gap-12 py-[60px] px-5 border-y border-primary lg:grid lg:grid-cols-12 lg:gap-5 lg:px-[60px] ">
      {previousProject && (
        <PaginationElement
          spanText={dictionary.projectPage.pagination.previousProject}
          project={previousProject}
          className="lg:col-start-1 lg:col-end-6"
        />
      )}

      {nextProject && (
        <PaginationElement
          spanText={dictionary.projectPage.pagination.nextProject}
          project={nextProject}
          className="items-end lg:col-start-6 lg:col-end-13 lg:justify-end lg:items-end"
        />
      )}
    </div>
  );
};

export default ProjectPagination;

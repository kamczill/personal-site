import React from "react";
import Headline from "../components/Headline";
import SingleProject from "../components/SingleProject";
import image from "../../public/project1.webp";
const AllProjects = () => {
  return (
    <div className="p-[10px] sm:p-[20px] lg:px-[60px] pt-5 border-t border-secondary flex flex-col gap-5">
      <Headline>All projects</Headline>

      <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-6">
        <SingleProject
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          image={image}
          link={"#"}
        />
        <SingleProject
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          image={image}
          link={"#"}
        />
        <SingleProject
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          image={image}
          link={"#"}
        />
        <SingleProject
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          image={image}
          link={"#"}
        />
      </div>
    </div>
  );
};

export default AllProjects;

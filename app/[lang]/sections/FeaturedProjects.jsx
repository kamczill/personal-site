import FeaturedProject from "@/app/components/FeaturedProject";
import image from "../../../public/project1.webp";
import Headline from "@/app/components/Headline";
import { fetchFromStrapi } from "../../utils/fetchFromStrapi";

const FeaturedProjects = async ({ dictionary }) => {
  const res = await fetchFromStrapi("featured-projects1", dictionary.lang);

  if (!res.ok) {
    console.log(res);
    return (
      <p className="text-xl text-red-500 text-center">
        {dictionary.errors.error404}
      </p>
    );
  }

  const json = await res.json();
  const data = await json.data;

  return (
    <section className="p-[10px] sm:p-[20px] lg:px-[60px] pt-5 border-t border-secondary flex flex-col gap-5">
      <Headline>{dictionary.homepage.featuredProjects.headline}</Headline>

      <div className="flex flex-col">
        {data &&
          data.map((project) => (
            <FeaturedProject
              data={project}
              key={project.id}
              dictionary={dictionary}
            />
          ))}

        {/* <FeaturedProject
          year="2023"
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          pillsArray={["UX/UI Design", "Web Design"]}
          image={image}
          link={"#"}
        />

        <FeaturedProject
          year="2023"
          title="mIA Website DESIGN"
          description="Minimalist website with a strong influence from Swiss typography, a sleek and sophisticated online presence that reflects our brand identity."
          pillsArray={["UX/UI Design", "Web Design"]}
          image={image}
          link={"#"}
        /> */}
      </div>
    </section>
  );
};

export default FeaturedProjects;

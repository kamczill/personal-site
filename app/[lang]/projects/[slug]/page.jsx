import React from "react";

import { fetchFromStrapi } from "@/app/utils/fetchFromStrapi";
import { getDictionary } from "@/dictionaries";
import ProjectHeader from "@/app/components/ProjectHeader";
import ProjectContent from "@/app/components/ProjectContent";
import ProjectPagination from "@/app/components/ProjectPagination";

export async function generateMetadata({ params: { lang, slug } }) {
  const dictionary = await getDictionary(lang);
  const res = await fetchFromStrapi(`projects/${slug}`, dictionary.lang);
  if (!res.ok) {
    return (
      <p className="text-xl text-red-500 text-center">
        {dictionary.errors.error404}
      </p>
    );
  }
  const json = await res.json();
  const data = json.data;

  const title = data.title + " | " + dictionary.projectsPage.metadata.title;

  return {
    title: title,
    description: dictionary.projectsPage.metadata.description,
  };
}

const page = async ({ params: { lang, slug } }) => {
  const dictionary = await getDictionary(lang);

  const res = await fetchFromStrapi(`projects/${slug}`, dictionary.lang);
  if (!res.ok) {
    return (
      <p className="text-xl text-red-500 text-center">
        {dictionary.errors.error404}
      </p>
    );
  }
  const json = await res.json();
  const data = json.data;

  return (
    <article>
      <ProjectHeader
        title={data.title}
        description={data.description}
        features={data.features}
        links={data.links}
      />
      <hr className="border-primary" />
      <ProjectContent
        content={data.content}
        images={data?.images}
        cover={data?.cover}
        title={data.title}
      />
      <ProjectPagination currentId={slug} dictionary={dictionary} />
    </article>
  );
};

export default page;

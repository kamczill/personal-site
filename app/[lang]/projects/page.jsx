import React from "react";
import Heading from "@/app/components/Heading";
import AllProjects from "../sections/AllProjects";

import { fetchFromStrapi } from "@/app/utils/fetchFromStrapi";
import { getDictionary } from "@/dictionaries";

export async function generateMetadata({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

  return {
    title: dictionary.projectsPage.metadata.title,
    description: dictionary.projectsPage.metadata.description,
  };
}

const page = async ({ params: { lang } }) => {
  const dictionary = await getDictionary(lang);

  const res = await fetchFromStrapi(`projects`, dictionary.lang);
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
    <div className="">
      <Heading>{dictionary.projectsPage.headline}</Heading>
      <AllProjects dictionary={dictionary} data={data} />
    </div>
  );
};

export default page;

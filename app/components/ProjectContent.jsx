import Image from "next/image";
import React from "react";

const ProjectContent = ({ content, images, cover, title }) => {
  const getImageByName = (imageName) => {
    const index = imageName.match(/\d+/);
    const image = images[index];
    console.log(image);
    return (
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI_API_URL + image?.url}
        width={image?.width}
        height={image?.height}
        alt={image?.alternativeText || title}
      />
    );
  };

  const formattedContent = content?.map((el, idx) => {
    switch (el.type) {
      case "paragraph":
        console.log(el);
        const children = el.children.map((child, idx2) => {
          const images = child.text.match(/\[image\d+\]/g) || [];
          const imagesLength = images?.length;

          switch (imagesLength) {
            case 0:
              return (
                <p
                  key={idx2}
                  className="lg:col-start-6 lg:col-end-13 lg:text-[18px]"
                >
                  {child.text}
                </p>
              );
            case 1:
              return (
                <div key={idx2} className="w-full my-5 lg:col-span-12 lg:my-12">
                  {getImageByName(images[0])}
                </div>
              );
            case 2:
              return (
                <div
                  key={idx2}
                  className="flex flex-col gap-5 my-5 lg:flex-row lg:col-span-12 lg:my-12"
                >
                  <div className="w-full">{getImageByName(images[0])}</div>
                  <div className="w-full">{getImageByName(images[1])}</div>
                </div>
              );
          }
        });

        return children;

      case "heading":
        switch (el.level) {
          case 1:
            return <h1 key={idx}>{el.children[0].text}</h1>;
          case 2:
            return (
              <h2
                key={idx}
                className="text-2xl font-semibold my-3 lg:col-start-6 lg:col-end-13 lg:text-4xl"
              >
                {el.children[0].text}
              </h2>
            );
          case 3:
            return <h3 key={idx}>{el.children[0].text}</h3>;
          case 4:
            return <h4 key={idx}>{el.children[0].text}</h4>;
        }
    }
  });

  return (
    <div className="flex flex-col gap-5 py-5 px-4 lg:grid lg:grid-cols-12 lg:px-[60px] lg:py-[100px]">
      {cover && (
        <div className="w-full lg:col-span-12 lg:mb-12">
          <Image
            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + cover.url}
            width={cover.width}
            height={cover.height}
            alt={cover.alternativeText || title}
          />
        </div>
      )}
      {formattedContent}
    </div>
  );
};

export default ProjectContent;

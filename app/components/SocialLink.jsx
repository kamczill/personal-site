import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SocialLink = ({ href, children, ...attrs }) => {
  return (
    <a
      href={href}
      className="flex gap-2 items-center text-lg sm:text-xl md:text-2xl underline-offset-4 hover:underline"
      {...attrs}
    >
      {children}
      <FaArrowRightLong />
    </a>
  );
};

export default SocialLink;

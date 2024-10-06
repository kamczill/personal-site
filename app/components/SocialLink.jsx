import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const SocialLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="flex gap-2 items-center text-lg sm:text-xl md:text-2xl"
    >
      {children}
      <FaArrowRightLong />
    </a>
  );
};

export default SocialLink;

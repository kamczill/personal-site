import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const UnderlineButton = ({ href, hasArrow, children }) => {
  return (
    <a
      href={href}
      className="uppercase text-sm border-b border-b-black flex items-center gap-2 w-fit pr-1 pb-1 transition duration-300 lg:hover:text-secondary lg:hover:border-secondary lg:text-base"
    >
      {children}
      {hasArrow && <FaArrowRightLong />}
    </a>
  );
};

export default UnderlineButton;

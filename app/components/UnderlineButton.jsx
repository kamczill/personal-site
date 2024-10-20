import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const UnderlineButton = ({ href, className, hasArrow, children, ...attrs }) => {
  return (
    <Link
      href={href}
      className={`uppercase text-sm border-b border-b-black flex items-center gap-2 w-fit pr-1 pb-1 transition duration-300 lg:hover:text-secondary lg:hover:border-secondary lg:text-base ${className}`}
      {...attrs}
    >
      {children}
      {hasArrow && <FaArrowRightLong />}
    </Link>
  );
};

export default UnderlineButton;

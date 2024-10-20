import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <ul className="flex flex-col sm:grid sm:grid-cols-2 md:flex">
      <li>
        <SocialLink href="https://github.com/kamczill">Github</SocialLink>
      </li>
      <li>
        <SocialLink href="https://www.linkedin.com/in/kamil-chrobak-543748269/">LinkedIn</SocialLink>
      </li>
    </ul>
  );
};

export default SocialLinks;

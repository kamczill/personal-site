import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SocialLink from "./SocialLink";

const SocialLinks = () => {
  return (
    <ul className="flex flex-col sm:grid sm:grid-cols-2 md:flex">
      <li>
        <SocialLink>Linkedin</SocialLink>
      </li>
      <li>
        <SocialLink>Dribble</SocialLink>
      </li>
      <li>
        <SocialLink>Behance</SocialLink>
      </li>
      <li>
        <SocialLink>Github</SocialLink>
      </li>
    </ul>
  );
};

export default SocialLinks;

import React from "react";
import Link from "next/link";
const NavLink = ({ href, currentPath, children }) => {
  return (
    <Link
      className={`link underline-offset-4 ${
        currentPath.includes(href) ? "underline" : ""
      } text-xl uppercase py-6 hover:opacity-70`}
      href={href}
    >
      {children}
    </Link>
  );
};

export default NavLink;

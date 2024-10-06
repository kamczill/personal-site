"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu((val) => !val);

  return (
    <div className="px-2 w-full lg:px-[60px]">
      <nav className="flex flex-col relative lg:flex-row">
        <div className="flex justify-between w-full lg:w-full">
          <Link
            className={`link ${pathname === "/" ? "active" : ""} px-1 py-6 text-2xl tracking-widest`}
            href="/"
          >
            KAMIL
          </Link>
          <button onClick={handleOpenMenu} className="py-6 px-4 lg:hidden">
            <GiHamburgerMenu />
          </button>
        </div>

        <div
          className={`absolute top-full flex flex-col justify-center items-center w-full ${
            isOpenMenu ? "visible" : "invisible"
          } z-10 bg-white lg:static lg:flex-row lg:visible lg:items-end lg:justify-end lg: gap-8`}
        >
          <NavLink href="/about" currentPath={pathname}>
            About
          </NavLink>
          <NavLink href="/projects" currentPath={pathname}>
            Projects
          </NavLink>
          <NavLink href="/contact" currentPath={pathname}>
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

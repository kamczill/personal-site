"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";

const Navbar = ({ lang, dictionary }) => {
  const pathname = usePathname();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = () => setIsOpenMenu((val) => !val);

  const handleCloseMenu = () => {
    if (window.innerWidth < 1000) setIsOpenMenu(false);
  };

  const changeLanguage = (nextLang) => {
    return pathname.replace(lang, nextLang);
  };

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpenMenu]);

  return (
    <div className="px-2 w-full relative lg:px-[60px]">
      <nav className="flex flex-col lg:flex-row">
        <div className="flex justify-between w-full lg:w-full">
          <Link
            className={`link ${
              pathname === "/" ? "active" : ""
            } px-1 py-6 text-2xl tracking-widest`}
            href={"/" + lang}
          >
            KAMIL
          </Link>
          <button onClick={handleOpenMenu} className="py-6 px-4 lg:hidden">
            {isOpenMenu ? (
              <IoMdClose className="text-3xl" />
            ) : (
              <IoMdMenu className="text-3xl" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-full left-0 flex flex-col justify-center items-center w-screen ${
            isOpenMenu ? "visible" : "invisible"
          } z-10 bg-white h-screen lg:h-auto lg:static lg:flex-row lg:visible lg:items-end lg:justify-end lg: gap-8`}
        >
          <NavLink
            href={"/" + lang + "/projects"}
            currentPath={pathname}
            onClick={handleCloseMenu}
          >
            {dictionary.navigation.projects}
          </NavLink>
          <NavLink
            href={"/" + lang + "/about"}
            currentPath={pathname}
            onClick={handleCloseMenu}
          >
            {dictionary.navigation.about}
          </NavLink>
          <NavLink
            href={"/" + lang + "/contact"}
            currentPath={pathname}
            onClick={handleCloseMenu}
          >
            {dictionary.navigation.contact}
          </NavLink>

          <div className="flex gap-2 items-center justify-center h-full lg:ml-8">
            <Link
              href={changeLanguage("pl")}
              className={`underline-offset-4 p-2 ${
                pathname.includes("pl") && "underline hover:opacity-70"
              }`}
              onClick={handleCloseMenu}
            >
              PL
            </Link>
            /
            <Link
              href={changeLanguage("en")}
              className={`underline-offset-4 p-2 ${
                pathname.includes("en") && "underline hover:opacity-70"
              }`}
              onClick={handleCloseMenu}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

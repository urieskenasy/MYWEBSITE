import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { SiCodechef } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { BsSun, BsFillMoonFill } from "react-icons/bs";
import { Context } from "../store/Context";
import { Links } from "../assets/data/navigationMenuData.js";
import Button from "./Button";
import { HashLink } from "react-router-hash-link";
export default function NavigationMenu() {
  const [navOpen, setNavOpen] = useState(false);
  const { setTheme, theme } = useContext(Context);
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="z-50 w-full shadow-md fixed top-0 left-0 ">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 dark:bg-gray-900 bg-white">
        <div className="font-bold text-2x1 cursor-pointer flex items-center text-gray-800 dark:bg-gray-900 bg-white">
          <span className="text-5xl text-indigo-600 dark:text-indigo-200 mr-1 pt-2">
            <NavLink to="/">
              <SiCodechef />
            </NavLink>
          </span>
        </div>

        <div className="text-3xl flex absolute right-8 top-6 cursor-pointer md:hidden text-indigo-600 dark:text-indigo-200">
          <span
            onClick={handleThemeSwitch}
            className="ml-8 text-indigo-600 dark:text-indigo-200 cursor-pointer mr-6"
          >
            {theme === "dark" ? <BsSun /> : <BsFillMoonFill />}
          </span>{" "}
          <div onClick={() => setNavOpen(!navOpen)}>
            {" "}
            {navOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
          </div>
        </div>
        <ul
          className={`md:flex md:items-center justify-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in dark:bg-gray-900 bg-white ${
            navOpen ? "top-20 opacity-100" : "top-[-490px]"
          } md:opacity-100`}
        >
          {Links.map((item, i) => {
            return (
              <li
                className="md:ml-8 text-xl text-gray-800 dark:text-indigo-50 hover:text-gray-400 duration-500 text-xl md:my-0 my-7"
                key={i}
              >
                {" "}
                <NavLink onClick={() => setNavOpen(!navOpen)} to={item.link}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
          <span
            onClick={handleThemeSwitch}
            className="ml-8 text-indigo-600 dark:text-indigo-200 cursor-pointer"
          >
            {theme === "dark" ? <BsSun /> : <BsFillMoonFill />}
          </span>
          <a href="Uri-Eskenasy-CV.pdf" download="Uri-Eskenasy-CV.pdf">
            <Button>Download My CV</Button>
          </a>
        </ul>
      </div>
    </div>
  );
}

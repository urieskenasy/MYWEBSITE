import React from "react";
import Typed from "react-typed";
import LandingPageAnimation from "../../components/LandingPageAinmation";
import LandingPageAnimation2 from "../../components/LandingPageAnimation2";
import About from "../about/About";
export default function LandingPage() {
  return (
    <div
      id="landingPage"
      className=" flex h-screen w-screen overflow-hidden justify-center items-center flex-col "
    >
      <div className="z-40 justify-center items-center flex-col overflow-hidden md:h-96 md:w-96 flex w-56 h-56 shadow-xl rounded-full p-2 hover:shadow-lg duration-500 shadow-indigo-500 hover:shadow-indigo-400 dark:shadow-indigo-100 cursor-pointer">
        {" "}
        <h1 className="text-sm md:text-3xl text-slate-500 font-bold mb-2 text-black-700 font-light dark:text-indigo-50">
          Welcome To My page
        </h1>
        <h1 className="text-sm md:text-4xl text-slate-500 font-bold mb-2 text-black-700 font-light dark:text-indigo-50">
          I'm Uri,
        </h1>
        <h1 className="text-sm md:text-3xl  text-slate-500 font-bold text-black-700 font-light dark:text-indigo-50">
          {" "}
          <Typed
            strings={[
              " A Fullstack Developer 👨‍💻",
              " A Happy Cat Father 🐈‍⬛",
              " A Life Partner Of My Wife 👩",
              "AND I Love Software Development 💜",
            ]}
            typeSpeed={125}
            backSpeed={95}
            loop
          />
        </h1>{" "}
      </div>
      <div className="flex justify-center items-center z-10 absolute h-full w-full  overflow-hidden">
        <div className="w-28 absolute">
          <LandingPageAnimation />
        </div>
        <div
          className="w-28 absolute
        "
        >
          <LandingPageAnimation2 />
        </div>
      </div>
    </div>
  );
}

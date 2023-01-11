import React from "react";
import { aboutMe, mySkills } from "../../assets/data/aboutMeData.js";
import meCode01 from "../../assets/aboutImages/meCode01.jpeg";
import meSmile02 from "../../assets/aboutImages/meSmile02.png";
export default function About() {
  return (
    <div id="about" className="mt-14 flex flex-col justify-center items-center">
      <img
        className="h-fit w-96 object-cover rounded-3xl"
        src={meSmile02}
        alt="me code"
      />
      <h2 className="mt-10 mb-8 text-3xl font-light dark:text-indigo-50">
        About Me
      </h2>

      <div className="w-11/12 md:w-2/3 lg:w-2/5 flex flex-col dark:text-indigo-50 justify-center items-center min-h-screen">
        {aboutMe.map((el, i) => {
          return <p className="mb-4 text-lg font-light text-left">{el}</p>;
        })}
        <small className="font-light dark:text-indigo-50 mt-20 mb-4">
          Thinking about what to answer in slack 😆...
        </small>
        <img
          className="h-96 w-96 rounded-3xl object-cover mb-20"
          src={meCode01}
          alt="me code"
        />
      </div>
      <div className="md:w-2/3 lg:w-2/5 w-11/12 min-h-screen ">
        <h2 className="mt-10 mb-20 text-3xl font-extralight dark:text-indigo-50">
          My Skills
        </h2>
        <div className=" text-3xl flex flex-col items-start justify-center text-left ">
          <h3 className="mb-6 text-2xl font-light dark:text-indigo-50">
            Soft Skills
          </h3>
          {mySkills[0].skills.map((el, i) => {
            return (
              <div className="text-sm w-11/12 flex justify-between mb-2">
                <span className="font-light dark:text-indigo-50">
                  {el.name}
                </span>
                <span>{el.level}</span>
              </div>
            );
          })}

          <h3 className="mt-10 mb-6 text-2xl font-light dark:text-indigo-50">
            Tech Skills
          </h3>
          {mySkills[1].skills.map((el, i) => {
            return (
              <div className="text-sm w-11/12 flex justify-between mb-2">
                <div className="flex align-center w-36">
                  {" "}
                  <span className="w-10 text-2xl dark:text-indigo-50">
                    {el.icon}
                  </span>
                  <span className="w-10 text-md font-light dark:text-indigo-50">
                    {el.name}
                  </span>
                </div>

                <span>{el.level}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { PROJECTS } from "../../assets/data/projectsData.js";

const Card = ({ id, name, img }) => {
  return (
    <Link
      key={id}
      className=" transition-all rounded  w-11/12 text-zinc-900 h-2/5 m-10 md:w-4/12 cursor-pointer p-4 hover:shadow-lg duration-500 shadow-indigo-500 hover:shadow-indigo-400 dark:shadow-indigo-100 "
      to={`/project/${id}`}
    >
      <img
        src={img}
        alt="project description"
        className="h-64 object-cover w-full"
      />
      <h3 className="text-xl font-extralight text-gray-800 dark:text-indigo-50">
        {name}
      </h3>
    </Link>
  );
};

export default function Projects() {
  return (
    <div
      className="min-h-screen w-full mt-10 md:w-11/12 flex flex-wrap justify-center items-center p-8"
      style={{ margin: "2rem auto" }}
    >
      <h2 className="text-3xl font-extralight text-gray-800 mt-12 mb-10 dark:text-indigo-50">
        PROJECTS
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {PROJECTS.map((project, i) => {
          return <Card key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "../../assets/data/projectsData.js";
export default function Project() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState();
  useEffect(() => {
    PROJECTS.forEach((item) => {
      console.log(item.id);
      console.log(id);
      if (item.id == id) {
        console.log("go");
        setProject(item);
      }
    });

    console.log("result", project);
  }, [id]);
  return project ? (
    <div className="mt-16 flex flex-col justify-center items-center font-extralight text-left p-10">
      <img className="mb-10 w-11/12" src={project.img} alt="project" />
      <h1 className="mb-8 text-3xl dark:text-indigo-50">{project.name} </h1>
      <p className="mb-2 text-2xl dark:text-indigo-50 ">
        <span>Technologies Used:</span> {project.description.technologies}
      </p>
      <p className="mb-2 text-xl dark:text-indigo-50">
        {project.description.description}
      </p>
      <span className="border-b-2 mb-3 dark:text-indigo-50">
        <a href={project.githubLink} target="_blank" rel="noreferrer">
          Github Link
        </a>
      </span>
      <span className="border-b-2 dark:text-indigo-50">
        <a href={project.live} target="_blank" rel="noreferrer">
          Live App
        </a>
      </span>
      <span
        className="cursor-pointer dark:text-indigo-50 border-2 rounded mt-10 border-slate-500 pr-3 pl-3 pb-1.5 pt-1.5"
        onClick={() => navigate("/projects")}
      >
        Go Back
      </span>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

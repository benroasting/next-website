import React from "react";
import Image from "next/image";
import Link from "next/link";
import projectsMap from "./components/projectsMap";

function projects() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex p-5">
        {projectsMap.map((project) => (
          <div
            key={project.title}
            className="w-[20rem] rounded-lg shadow-xl bg-white m-5"
          >
            <img
              src={project.src}
              alt=""
              className="rounded-t-lg h-60 w-full object-cover"
            />
            <div className="px-6 pt-6 items-center">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                {project.title}
              </h5>
              <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-200">
                {project.description}
              </p>
              {project.stack.map((tech) => (
                <span
                  key={project.stack[tech]}
                  className="m-1 px-2 text-sm bg-slate-400 rounded-lg text-white uppercase justify-center"
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between ">
                <Link
                  href={project.code}
                  type="button"
                  className="inline-block text-xs font-medium uppercase text-black"
                >
                  Code
                </Link>
                {project.website ? (
                  <Link
                    href={project.website}
                    type="button"
                    className="inline-block text-xs font-medium uppercase text-black"
                  >
                    View Live
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default projects;

import React from "react";
import Link from "next/link";
import { projects } from "../data/projects";

const linkBase =
  "font-overpass my-3 py-2 px-4 rounded-md inline-block text-xs font-medium uppercase text-black";

const hasCaseStudy = (p) => Boolean(p.problem || p.solution || p.outcome);

function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold font-overpass">Projects</h1>
      <ul className="flex flex-wrap justify-center p-5">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="w-[25rem] rounded-lg shadow-xl bg-white m-5 list-none"
          >
            {(() => {
              const img = (
                <img
                  src={project.src}
                  alt={`${project.title} screenshot`}
                  className="rounded-t-lg h-60 w-full object-cover border-b-2 border-gray-300"
                />
              );
              return hasCaseStudy(project) ? (
                <Link href={`/projects/${project.slug}`}>{img}</Link>
              ) : (
                img
              );
            })()}
            <div className="px-6 pt-6 items-center">
              <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                {hasCaseStudy(project) ? (
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                ) : (
                  project.title
                )}
              </h5>
              <p className="mb-2 text-sm text-neutral-600">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-sm bg-slate-400 rounded-lg text-white uppercase whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                {hasCaseStudy(project) && (
                  <Link
                    href={`/projects/${project.slug}`}
                    className={`${linkBase} bg-slate-200`}
                  >
                    Case study
                  </Link>
                )}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} bg-amber-300`}
                  >
                    Code
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${linkBase} bg-teal-500`}
                  >
                    View Live
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;

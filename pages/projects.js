import React from "react";
import Link from "next/link";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className="flex min-h-screen flex-col items-center px-6 py-12">
      <h1 className="retro-title">Projects</h1>
      <p className="mt-2 text-brick">$ ls ~/projects</p>
      <ul className="mt-10 grid w-full max-w-6xl grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const img = (
            <img
              src={project.src}
              alt={`${project.title} screenshot`}
              className="h-60 w-full border-b-[3px] border-ink object-cover object-top sepia-[.3] saturate-[1.1]"
            />
          );
          return (
            <li
              key={project.slug}
              className="flex w-full max-w-[25rem] list-none flex-col rounded-xl border-[3px] border-ink bg-card shadow-retro-lg"
            >
              <div className="flex items-center gap-2 rounded-t-[9px] border-b-[3px] border-ink bg-mustard px-3 py-1.5 text-xs font-bold text-onaccent">
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-tangerine" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-paper" />
                <span className="h-3 w-3 rounded-full border-2 border-ink bg-olive" />
                <span className="ml-2 truncate">~/projects/{project.slug}</span>
              </div>
              <Link href={`/projects/${project.slug}`}>{img}</Link>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="mb-2 font-display text-2xl font-black leading-tight">
                  <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                </h2>
                <p className="mb-3 flex-1 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="retro-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href={`/projects/${project.slug}`} className="retro-btn bg-paper">
                    Details
                  </Link>
                  {project.code && (
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn bg-mustard"
                    >
                      Code
                    </a>
                  )}
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn bg-tangerine"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;

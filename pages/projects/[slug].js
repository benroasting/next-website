import React from "react";
import Link from "next/link";
import { projects, getProject } from "../../data/projects";

const linkBase =
  "font-overpass py-2 px-4 rounded-md inline-block text-xs font-medium uppercase text-black";

function Section({ title, children }) {
  if (!children) return null;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2 border-b-2 border-sky-600 pb-1">
        {title}
      </h2>
      <p className="text-base leading-relaxed">{children}</p>
    </section>
  );
}

function ProjectScreen({ project }) {
  if (!project) return null;
  const { title, description, src, stack, role, problem, solution, outcome, images, website, code } =
    project;

  return (
    <div className="flex min-h-screen flex-col items-center p-12 font-overpass">
      <div className="w-full max-w-3xl">
        <Link href="/projects" className="text-sm underline">
          &larr; All projects
        </Link>
        <h1 className="text-4xl font-bold mt-4 mb-2">{title}</h1>
        {role && <p className="text-sm text-neutral-600 mb-4">{role}</p>}
        <p className="text-lg mb-4">{description}</p>
        <div className="mb-6">
          {stack.map((tech) => (
            <span
              key={tech}
              className="mr-2 px-2 text-sm bg-slate-400 rounded-lg text-white uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
        <img
          src={src}
          alt={`${title} screenshot`}
          className="rounded-lg shadow-xl w-full mb-8"
        />
        <Section title="The problem">{problem}</Section>
        <Section title="What I built">{solution}</Section>
        <Section title="Outcome">{outcome}</Section>
        {images?.length > 0 && (
          <div className="grid gap-4 mb-8">
            {images.map((img) => (
              <img key={img} src={img} alt="" className="rounded-lg shadow-md w-full" />
            ))}
          </div>
        )}
        {!problem && !solution && !outcome && (
          <p className="text-neutral-500 italic mb-8">Case study coming soon.</p>
        )}
        <div className="flex gap-3">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className={`${linkBase} bg-teal-500`}>
              View Live
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className={`${linkBase} bg-amber-300`}>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProject(params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}

export default ProjectScreen;

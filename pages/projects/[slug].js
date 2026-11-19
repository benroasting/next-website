import React from "react";
import Link from "next/link";
import { projects, getProject } from "../../data/projects";

function Section({ title, children }) {
  if (!children) return null;
  return (
    <section className="mb-6">
      <h2 className="mb-2 border-b-[3px] border-ink pb-1 font-display text-2xl font-black text-brick">
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
    <div className="flex min-h-screen flex-col items-center p-12">
      <div className="w-full max-w-3xl">
        <Link href="/projects" className="text-sm underline decoration-2 underline-offset-4">
          &larr; cd ..
        </Link>
        <h1 className="retro-title mb-2 mt-4">{title}</h1>
        {role && <p className="mb-4 text-sm text-brick">{role}</p>}
        <p className="mb-4 text-lg">{description}</p>
        <div className="mb-6 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="retro-tag">
              {tech}
            </span>
          ))}
        </div>
        <img
          src={src}
          alt={`${title} screenshot`}
          className="mx-auto mb-8 block max-h-[32rem] w-auto max-w-full rounded-xl border-[3px] border-ink shadow-retro-lg sepia-[.2]"
        />
        <Section title="The problem">{problem}</Section>
        <Section title="What I built">{solution}</Section>
        <Section title="Outcome">{outcome}</Section>
        {images?.length > 0 && (
          <div className="mb-8 grid gap-4">
            {images.map((img) => (
              <img key={img} src={img} alt="" className="mx-auto block max-h-[32rem] w-auto max-w-full rounded-xl border-[3px] border-ink shadow-retro" />
            ))}
          </div>
        )}
        {!problem && !solution && !outcome && (
          <p className="mb-8 italic text-brick">Case study coming soon.</p>
        )}
        <div className="flex gap-3">
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer" className="retro-btn bg-tangerine">
              View Live
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer" className="retro-btn bg-mustard">
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

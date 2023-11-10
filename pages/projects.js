import React from "react";
import Image from "next/image";
import Link from "next/link";

const projectsMap = [
    {
      src: "/Veterans-Form.png",
      title: "Free FPU for Veterans",
      slug: "fpu-for-veterans",
      description:
        "Created a flow for veterans to claim a free year of financial peace university.",
      stack: ["Javascript", "React", "Java", "Segment"],
      website: "https://www.ramseysolutions.com/veterans",
    },
    {
      src: "/ramsey-plus-benefits.png",
      title: "Ramsey Plus Benefits Screen",
      slug: "rplus-benefits",
      description:
        "Built a member benefits table to show feature comparisons between subscriptions.",
      stack: ["Javascript", "Ruby on Rails"],
      website: "https://www.ramseysolutions.com/ramseyplus",
    },
    {
      src: "/EveryDollarCarousel.png",
      title: "EveryDollar Budgeting Carousel",
      slug: "everydollar-budgeting-carousel",
      description:
        "Built as a user experiment to see if an image carousel would help with premium account activation.",
      stack: ["CSharp", "Xamarin"],
      website: "https://apps.apple.com/us/app/everydollar-budget-your-money/id942571931",
    },
    {
      src: "/baby-yoda-project.png",
      title: "Baby Yoda Project",
      slug: "baby-yoda-project",
      description:
        "Built a SPA about Baby Yoda, from the Mandalorian, as a take-home project for a job application.",
      stack: ["Javascript"],
      website: "https://youngyodaproject.netlify.app/",
      code: "https://github.com/benroasting/BabyYoda_Project",
    },
    {
      src: "/ClassFinderResults.png",
      title: "Financial Peace Class Finder",
      slug: "fpu-class-finder",
      description:
        "Improved the class finder design and experience for users to be able to better find FPU classes.",
      stack: ["Javascript", "React", "Java"],
      website: "https://www.financialpeace.com/app/classes/guide",
    },
    {
      src: "/DET030.png",
      title: "Det 030 Website",
      slug: "det030-website",
      description: "First website I ever built ... taught myself HTML & CSS. Static site, but helped with recruiting candidates.",
      stack: ["HTML", "CSS"],
      code: "https://github.com/benroasting/Det030_Website_2013",
    },
    {
      src: "/Veggie_Tender.png",
      title: "Veggie Tender - Final Project",
      slug: "veggie-tender-project",
      description: "Final project for coding bootcamp. Allowing users to find local farmers and connect with them.",
      stack: ["Javascript", "React", "Node"],
      code: "https://github.com/benroasting/team-gigasowers-frontend",
    },
    {
      src: "/would-you-rather.png",
      title: "Would You Rather",
      slug: "would-you-rather",
      description:
        "Built and deployed so friends could filter and search for 'would you rather' questions.",
      stack: ["Javascript", "React"],
      website: "https://would-you-rather-questions.netlify.app/",
      code: "https://github.com/benroasting/would-you-rather",
    },
  ];

function projects() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="text-4xl font-bold font-overpass">Projects</h1>
      <div className="flex flex-wrap p-5">
        <ul>
        {projectsMap.map((project) => (
          <li key={project.title}>
            <Link
            href={{
              pathname: '/projects/[slug]',
              query: { slug: project.slug },
            }}
            >
          <div
            className="w-[25rem] rounded-lg shadow-xl bg-white m-5"
          >
            <img
              src={project.src}
              alt=""
              className="rounded-t-lg h-60 w-full object-cover border-b-2 border-gray-300"
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
                {project.code? <Link
                  href={project.code}
                  type="button"
                  className="font-overpass my-3 p-2 px-4 rounded-md bg-amber-300 inline-block text-xs font-medium uppercase text-black"
                > 
                  Code
                </Link> : <Link href=""></Link>}
                {project.website ? (
                  <Link
                    href={project.website}
                    type="button"
                    className="font-overpass my-3 py-2 px-4 rounded-md bg-teal-500 inline-block text-xs font-medium uppercase text-black"
                  >
                    View Live
                  </Link>
                ) : <Link href=""></Link>}
              </div>
            </div>
          </div>
          </Link>
          </li>
        ))}
        </ul>
      </div>
    </div>
  );
}

export default projects;

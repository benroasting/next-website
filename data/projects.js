// Optional case-study fields: role, problem, solution, outcome, images (array of paths in /public)
// Omit `website` / `code` for private or unreleased work; buttons only render when present.
export const projects = [
{
  src: "/Prophit.png",
  title: "Prophit",
  slug: "prophit",
  description:
    "Mobile app that helps beginner investors discover companies tied to trends they notice. Built the onboarding flow, discover and search screens, and portfolio swipe experience as part of a small contract team.",
  stack: ["React Native", "Expo", "TypeScript", "React Query", "C#"],
  website: "https://apps.apple.com/us/app/prophit/id6751884644",
},
{
  src: "/EveryDollar-Forms-BFF.png",
  title: "EveryDollar Forms BFF",
  slug: "everydollar-forms-bff",
  description:
    "Built a backend-for-frontend service that serves React forms into CMS-managed marketing pages, like the Budgeting 101 workshop signup, so engineers can update forms without touching the CMS.",
  stack: ["Java", "Spring Boot", "React", "TypeScript", "Redis"],
  website: "https://www.ramseysolutions.com/money/everydollar/intro-to-everydollar",
},
{
  src: "/Ordinal.png",
  cardSrc: "/Ordinal-card.png", // optional tighter crop for the list card
  title: "Ordinal",
  slug: "ordinal",
  description:
    "AI platform that helps local government staff search codes and regulations and get cited answers from approved documents. Built the React chat frontend on a Rails backend.",
  stack: ["React", "TypeScript", "Vite", "Tailwind", "Rails", "Vitest"],
  website: "https://www.ordinalforgov.com/",
  role: "Frontend developer, Sept 2024 to Mar 2025",
  solution:
    "Built out the chat interface, including a document filter flyout that keeps the selected documents between chats and message citations that show where an answer came from. Refactored the chat state (ChatContext and ChatProvider), moved the frontend tests from Jest to Vitest with much broader coverage, and added CI and Biome linting.",
},
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

export const getProject = (slug) => projects.find((p) => p.slug === slug) || null;

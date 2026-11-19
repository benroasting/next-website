import React from "react";

const links = [
  { label: "GitHub", href: "https://github.com/benroasting" },
  { label: "LinkedIn", href: "https://linkedin.com/in/benjamin-young-developing" },
];

function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="retro-title mb-8">Contact</h1>
      <div className="w-full max-w-md rounded-xl border-[3px] border-ink bg-card shadow-retro-lg">
        <div className="flex items-center gap-2 rounded-t-[9px] border-b-[3px] border-ink bg-mustard px-3 py-1.5 text-xs font-bold text-onaccent">
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-tangerine" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-paper" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-olive" />
          <span className="ml-2">~/contact</span>
        </div>
        <div className="p-8">
          <div className="mb-5 border-b-2 border-dashed border-ink/40 pb-5">
            <p className="font-display text-2xl font-black text-brick">Ben Young</p>
            <p className="text-lg">Software Engineer</p>
            <p className="text-lg">... currently in Nashville, TN</p>
          </div>
          <div className="mb-5 border-b-2 border-dashed border-ink/40 pb-5">
            <p className="text-lg">developing.ben@gmail.com</p>
            <p className="text-lg">501.548.5087</p>
          </div>
          <div className="flex gap-3">
            {links.map(({ label, href }, i) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`retro-btn ${i === 0 ? "bg-tangerine" : "bg-olive text-paper"}`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

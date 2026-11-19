import React from "react";

function About() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12">
      <h1 className="retro-title mb-8">About Me</h1>
      <div className="max-w-xl rounded-xl border-[3px] border-ink bg-card shadow-retro-lg">
        <div className="flex items-center gap-2 rounded-t-[9px] border-b-[3px] border-ink bg-mustard px-3 py-1.5 text-xs font-bold text-onaccent">
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-tangerine" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-paper" />
          <span className="h-3 w-3 rounded-full border-2 border-ink bg-olive" />
          <span className="ml-2">~/about.txt</span>
        </div>
        <div className="space-y-5 p-8 text-lg leading-relaxed">
          <p>I am a bridge-builder, connector, and communicator.</p>
          <p>
            I am a servant leader who truly cares about people and fosters a
            culture of trust, honor, and love.
          </p>
          <p>
            I love to learn and seek to extend my skillset with new languages
            and frameworks.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import benImage from "../public/ben-image.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 p-12 md:flex-row md:justify-center md:gap-14">
      <Image
        className="h-[220px] w-[220px] rounded-full border-4 border-ink object-cover shadow-retro-lg sepia-[.5]"
        height={250}
        width={250}
        src={benImage}
        alt="Ben Young"
        priority
      />
      <div className="w-full max-w-xl text-center md:w-[32rem] md:text-left">
        <p className="mb-3 text-sm font-bold text-brick">{"// hello, world"}</p>
        <h1 className="retro-title mb-4 leading-none">Ben Young</h1>
        <div className="h-[7rem] text-xl">
          <span className="text-brick">&gt; </span>
          <TypeAnimation
            sequence={[
              "Hi, my name is Ben Young",
              2000,
              "I am a Software Engineer.",
              2000,
              "I want to improve the lives of others through my actions and my code.",
              2000,
            ]}
            wrapper="span"
            cursor={true}
            speed={50}
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}

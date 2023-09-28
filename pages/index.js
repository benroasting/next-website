import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import benImage from "../public/ben-image.png";

export default function Home() {
  return (
    <main
      className={'flex  min-h-screen flex-col items-center px-24 py-12 font'}
    >
      <div className="border-b-2 border-sky-600 p-5">
        <Image
          className="drop-shadow-lg rounded-full filter grayscale"
          height={250}
          width={250}
          src={benImage}
          alt=""
        />
      </div>

      <div className="p-5">
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Hi, My name is Ben Young",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "I am a Software Engineer.",
            2000,
            "I want to improve the lives of others through my actions and my code.",
            2000,
          ]}
          wrapper="span"
          cursor="true"
          speed={50}
          className="font-overpass"
          style={{
            fontSize: "2em",
            color: "black",
            display: "inline-block",
          }}
          repeat={Infinity}
        />
      </div>
    </main>
  );
}

import { useEffect, useRef } from "react";

export default function Home() {
  // const terminalContRef = useRef<HTMLDivElement | null>(null);
  const worldSpanRef = useRef<HTMLSpanElement | null>(null);
  const helloSpanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (helloSpanRef?.current) {
      helloSpanRef.current.addEventListener("animationend", function () {
        helloSpanRef.current?.classList.add("remove-cursor");
        if (worldSpanRef.current) {
          worldSpanRef.current.style.animationPlayState = "running";
          const span = document.querySelector(".blinking-cursor");
          span?.classList.add("blinking-cursor-add");
        }
      });
    }
    if (worldSpanRef.current) {
      worldSpanRef.current.addEventListener("animationend", function () {
        helloSpanRef.current?.classList.add("remove-cursor");
      });
    }
  }, []);

  return (
    <div className="px-2">
      <div
        id="terminal-container"
        className=" relative rounded-xl px-2 py-4 my-4"
        // ref={terminalContRef}
      >
        <p id="" className=" font-medium text-lg">
          <span className="  text-slate-400 text-xl ml-1 mr-2 font-semibold inline-block">
            {"$ "}
          </span>
          <span
            ref={helloSpanRef}
            id="hello"
            className="text-span typing-words text-[#495e84] text-2xl uppercase"
          >
            {"Hello"}
          </span>{" "}
          <span
            id="welcome-text"
            className="text-span  w-0 overflow-hidden inline-block"
          >
            {" "}
            Welcome to my{" "}
          </span>{" "}
          <span
            ref={worldSpanRef}
            id="world"
            className="text-span typing-words text-[#495e84] text-2xl uppercase"
          >
            World
          </span>
          <span className="translate-y-2 blinking-cursor blinking-cursor-remove"></span>
        </p>
      </div>
      <div
        id="intro"
        className="flex flex-col md:flex-row-reverse justify-between mt-16 pl-8 gap-4 "
      >
        <div
          id="passport-container"
          className="w-full md:w-2/5 place-self-center flex relative"
        >
          <div
            id="passport-photo"
            className="w-full md:w-3/4 h-full absolute right-4 -bottom-4 "
          >
            <img
              src="/pass-photo.JPG"
              alt="HEADSHOT"
              className="w-full h-full rounded-bl-2xl rounded-tr-2xl"
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <p className=" font-extrabold text-4xl sm:text-5xl">
            I am <span className="text-[#495e84]">Oluwatobiloba Bamisebi</span>{" "}
            a Developer.
          </p>
          <p className="md:leading-8 font-semibold mt-6">
            I am a{" "}
            <span className="font-medium uppercase">Software engineer</span>{" "}
            dedicated to helping clients achieve their technical goals by
            developing user-friendly and forward-thinking applications.
            Experienced in using modern tools to build fully functional web
            apps, aesthetic web pages, and robust backend systems. A
            quality-focused professional with a proven track record of thriving
            in fast-paced, challenging, and collaborative environments.
            Comfortable working both independently and as part of a team, with a
            strong commitment to continuous learning and self-improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

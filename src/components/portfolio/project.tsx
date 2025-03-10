// import { useState } from "react";

import classNames from "classnames";
import { useState } from "react";

export interface IProject {
  name: string;
  type: string;
  role: string;
  description: string;
  roleDescripitons: string[];
  technologies: string[];
  features: string[];
  url: string;
  codebase: string;
  isPrivate: boolean;
  image: string;
}

const Project: React.FC<IProject> = (data) => {
  // const [collapsed, setCollapsed] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="w-full grid grid-cols-12 gap-4 my-4 relative overflow-hidden">
      <span
        className={classNames(
          " absolute text-xs bottom-1 font-bold z-4 right-0 capitalize p-1 rounded-sm shadow-2xs",
          {
            " bg-white text-zinc-800": data.type == "frontend",
            " bg-zinc-800 text-white": data.type == "backend",
          }
        )}
      >
        {data.type}
      </span>
      <div className="relative w-full z-0 h-52 md:h-64 overflow-hidden col-span-full md:col-span-5">
        <img
          className="absolute w-full h-full hover:scale-110 transition-all duration-700 rounded-md"
          style={{ objectFit: "cover" }}
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="col-span-full md:col-span-7">
        <p className="w-full">
          <span className="font-bold">{data.name}</span> |
          {`${data.description}`}
        </p>
        <div
          className={classNames(
            "md:my-5",
            "inset-0 bg-white md:bg-transparent px-4 pb-4 z-10 absolute md:static md:p-0 md:w-full transition-transform duration-500",
            {
              "translate-x-full md:translate-x-0 ": !isClicked,
              "translate-x-0  overflow-scroll md:overflow-auto": isClicked,
            }
          )}
        >
          <p className="pt-4 mb-2 text-zinc-900 md:text-inherit font-semibold sticky top-0 z-9 bg-white/90 md:bg-transparent">
            Features
            <span className="hidden md:inline-block">:</span>
            <span className="text-teal-600 ml-2 md:hidden border-l-2 border-zinc-700 ">
              {" "}
              {data.name}
            </span>
          </p>
          <div className={classNames("flex flex-wrap gap-4")}>
            {data.features.map((feat) => (
              <span
                key={feat}
                className={
                  "inline-flex relative rounded-xs p-1 bg-[#101e37] even:bg-slate-50 even:text-[#091221] backdrop-blur-xl justify-between items-start"
                }
              >
                <span>
                  <i className="fi fi-rr-bullet"></i>
                </span>
                <p className="">{feat}</p>
              </span>
            ))}
            <div className="md:hidden my-5">
              <button
                onClick={() => setIsClicked(false)}
                className=" p-2 bg-zinc-950 hover:bg-zinc-950/70 rounded-xl w-20 cursor-pointer md:hidden"
              >
                <i className="fi fi-rr-arrow-left"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <button
          onClick={() => setIsClicked((prev) => !prev)}
          className=" p-2 bg-zinc-950 hover:bg-zinc-950/70 rounded-xl w-20 cursor-pointer md:hidden"
        >
          <i className="fi fi-rr-arrow-right"></i>
        </button>
      </div>
      {/* <div className="grid">
        a list of features of the app goes some where here.
      </div> */}
    </div>
  );
};

export default Project;

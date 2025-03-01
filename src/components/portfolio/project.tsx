import { useState } from "react";

export interface IProject {
  name: string;
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
  const [collapsed, setCollapsed] = useState(true);
  return (
    <div className="w-full grid grid-cols-12 gap-x-4">
      <div className="relative w-full h-52 md:h-56 overflow-hidden col-span-5">
        <img
          className="absolute w-full h-full hover:scale-110 transition-all duration-700 rounded-md"
          style={{ objectFit: "cover" }}
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="col-span-7">
        <p className="w-full">
          <span className="font-bold">{data.name}</span> |
          {`${data.description}`}
        </p>
      </div>
      <div className="grid">
        a list of features of the app goes some where here.
      </div>
    </div>
  );
};

export default Project;

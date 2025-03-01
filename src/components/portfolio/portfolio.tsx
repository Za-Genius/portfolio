import "./portfolio.css";
import projectsData from "./list-of-projects.json";
import Project from "./project";

const Portfolio = () => {
  return (
    <div className="w-full pt-5 max-w-4xl mx-auto">
      <div className="slide-up md:text-center text-xl font-semibold mt-6 mb-20">
        <p className="">
          I have been privileged to work on some interesting live projects, that
          have helped me to become better as a software engineer. Working with
          and collaborating with teams.
        </p>
      </div>
      <div id="projects">
        {projectsData.map((prj) => (
          <div key={prj.name}>
            <Project {...prj} roleDescripitons={prj["role-descriptions"]} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Portfolio;

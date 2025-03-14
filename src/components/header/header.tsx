import { Link, useLocation } from "@tanstack/react-router";
import classNames from "classnames";

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Resume", path: "/OLUWATOBILOBA BAMISEBI-CV.pdf" },
    { name: "Portfolio", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <div className=" w-full flex justify-between px-4 py-6 sm:px-16 items-center">
      <div className="rounded-full h-16 w-16">
        <img
          src="/logo.png"
          alt="HEADSHOT"
          className="w-full h-full rounded-full"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </div>
      <div id="nav" className=" font-bold">
        <ul className="flex justify-evenly gap-3 text-xs">
          {navItems.map((navItem) => (
            <li
              key={navItem.name}
              className={classNames(
                "p-0 m-0 hover:text-[#495e84] hover:scale-110 transition-all duration-500 uppercase flex gap-1",
                { "text-[#6e7d99]": location.href == navItem.path }
              )}
            >
              {navItem.name.toLowerCase() === "resume" && (
                <i className="fi fi-rr-download"></i>
              )}
              {navItem.name.toLowerCase() !== "resume" ? (
                <Link to={navItem.path} title={navItem.name}>
                  {navItem.name}
                </Link>
              ) : (
                <a href={navItem.path} download={"OLUWATOBILOBA-CV"}>
                  {navItem.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;

import { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  useEffect(() => {
    let emailTimeoutId: number;
    let githubTimeoutId: number;
    const mailFront = document.getElementById("mail-front");
    const mailBack = document.getElementById("mail-back");
    const githubFront = document.getElementById("github-front");
    const githubBack = document.getElementById("github-back");
    const gitImg = document.getElementById("github-img");
    if (mailFront && githubFront) {
      githubFront.addEventListener("mouseenter", function () {
        githubFront.classList.add("flip-front");
        if (githubBack) {
          githubBack.classList.add("flip-back");
          if (gitImg) {
            gitImg.classList.add("swoosh-transitions");
          }
        }
      });
      githubFront.addEventListener("touchstart", function () {
        githubFront.classList.add("flip-front");
        if (githubBack) {
          githubBack.classList.add("flip-back");
          if (gitImg) {
            gitImg.classList.add("swoosh-transitions");
          }
        }
      });
      mailFront.addEventListener("mouseenter", function () {
        mailFront.classList.add("flip-front");
        if (mailBack) {
          mailBack.classList.add("flip-back");
        }
      });
      mailFront.addEventListener("touchstart", function () {
        mailFront.classList.add("flip-front");
        if (mailBack) {
          mailBack.classList.add("flip-back");
        }
      });
    }
    if (mailBack && githubBack) {
      githubBack.addEventListener("mouseleave", function () {
        setTimeout(() => {
          if (gitImg) {
            gitImg.classList.remove("swoosh-transitions");
          }
        }, 1000 * 4);
        githubTimeoutId = setTimeout(() => {
          if (githubFront) githubFront.classList.remove("flip-front");
          githubBack.classList.remove("flip-back");
        }, 1000 * 5);
      });
      mailBack.addEventListener("mouseleave", function () {
        emailTimeoutId = setTimeout(() => {
          if (mailFront) mailFront.classList.remove("flip-front");
          mailBack.classList.remove("flip-back");
        }, 1000 * 5);
      });
    }
    return () => {
      clearTimeout(emailTimeoutId);
      clearTimeout(githubTimeoutId);
    };
  }, []);

  return (
    <div className="w-full text-center">
      <h1 id="contact-me" className=" font-semibold inline-flex mb-28">
        Contact Me
      </h1>
      <div className="gap-16 grid justify-center items-center">
        <div className="w-full relative">
          <p id="send-mail" className=" text-xl font-semibold">
            <span id="mail-front" className="front uppercase">
              Send me a mail
            </span>
            <a
              href="mailto:oluwatobiofficial15@gmail.com"
              className="text-sm md:text-base"
            >
              <span id="mail-back" className="flex back">
                <i className="fi fi-rr-envelope inline-block translate-y-1"></i>
                oluwatobiofficial15@gmail.com
              </span>
            </a>
          </p>
        </div>
        <div className="w-full relative">
          <p id="github" className=" text-xl font-semibold">
            <span id="github-front" className="front uppercase">
              git checkout
            </span>
            <a
              target="_blank"
              href="https://github.com/Za-Genius"
              className="text-center text-sm uppercase"
            >
              <span id="github-back" className="flex back">
                <img
                  id="github-img"
                  src="/github.png"
                  width={25}
                  height={25}
                  className="github-img absolute top-1/2 -translate-y-1/2"
                />
                @Za-Genius
              </span>
            </a>
          </p>
        </div>
        <div id="socials">
          <ul className="w-3/4 font-extrabold text-2xl inline-flex justify-between">
            <li className="hover:scale-130 transition-transform duration-700">
              <a
                target="_blank"
                href="https://www.instagram.com/oluwatobilobabamisebi/"
              >
                <i className="fi fi-brands-instagram"></i>
              </a>
            </li>
            <li className="hover:scale-130 transition-transform duration-700">
              <a target="_blank" href="https://x.com/Za_Genius1">
                <i className="fi fi-brands-twitter-alt"></i>
              </a>
            </li>
            <li className="hover:scale-130 transition-transform duration-700">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/oluwatobiloba-bamisebi-469800347"
              >
                <i className="fi fi-brands-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;

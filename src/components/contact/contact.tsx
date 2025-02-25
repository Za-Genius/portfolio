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
      mailFront.addEventListener("mouseenter", function () {
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
            <span id="mail-back" className="flex back">
              <a href="mailto:oluwatobiofficial15@gmail.com">
                <i className="fi fi-rr-envelope inline-block translate-y-1 "></i>
                oluwatobiofficial15@gmail.com
              </a>
            </span>
          </p>
        </div>
        <div className="w-full relative">
          <p id="github" className=" text-xl font-semibold">
            <span id="github-front" className="front uppercase">
              git checkout
            </span>
            <span id="github-back" className="flex back">
              <a
                href="https://github.com/Za-Genius"
                className="text-center text-sm uppercase"
              >
                <img
                  id="github-img"
                  src="/github.png"
                  width={25}
                  height={25}
                  className="github-img absolute top-1/2 -translate-y-1/2"
                />
                @Za-Genius
              </a>
            </span>
          </p>
        </div>
        <div id="socials"></div>
      </div>
    </div>
  );
};
export default Contact;

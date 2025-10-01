import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const skills = [
  {
    name: "React",
    icon: <Icon icon="devicon:react" width="4em" height="4em" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    icon: <Icon icon="devicon:nodejs" width="4em" height="4em" />,
    link: "https://nodejs.org/",
  },
  {
    name: "Git",
    icon: <Icon icon="devicon:git" width="4em" height="4em" />,
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    icon: <Icon icon="devicon:github" width="4em" height="4em" />,
    link: "https://github.com/",
  },
  {
    name: "HTML",
    icon: <Icon icon="devicon:html5" width="4em" height="4em" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <Icon icon="devicon:css3" width="4em" height="4em" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: <Icon icon="devicon:javascript" width="4em" height="4em" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TailwindCSS",
    icon: <Icon icon="devicon:tailwindcss" width="4em" height="4em" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "Bootstrap",
    icon: <Icon icon="devicon:bootstrap" width="4em" height="4em" />,
    link: "https://getbootstrap.com/",
  },
  {
    name: "VS Code",
    icon: <Icon icon="devicon:vscode" width="4em" height="4em" />,
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Figma",
    icon: <Icon icon="devicon:figma" width="4em" height="4em" />,
    link: "https://figma.com/",
  },
];


  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="skills"
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      className="text-black dark:text-white rounded-5 p-8 md:p-16 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center text-black dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Skills
        </Typography>
        <Marquee pauseOnHover>
          <div className="flex flex-nowrap overflow-x-auto mt-12">
            {skills.map((skill) => (
              <a
                key={skill.name}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center mr-4"
              >
                <div className="p-4 bg-primary rounded-full">{skill.icon}</div>
                <Typography variant="h6" align="center" className="ml-2 font-poppins">
                  {skill.name}
                </Typography>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Skills;

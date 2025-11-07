import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import toolsWebImg from "../../assets/Tools-Website.png"
import pizzaImg from "../../assets/pizza-img.png"
import businessWeb from "../../assets/p1.png"
import nexcent from "../../assets/p2.png"

const projectsData = [
  {
    id: 1,
    image: `${toolsWebImg}`,
    title: "React + Tailwind UI Project",
    description:
      "A fully responsive React and Tailwind CSS UI project featuring modern layouts, reusable components, and smooth design. Focused on clean code, optimized structure, and professional web UI implementation.",
    liveDemoLink: "https://react-tailwind-ui-project-one.vercel.app/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/React-Tailwind-UI-Project",
  },
  {
    id: 2,
    image:
      "https://github.com/fuzailahmed-developer/CSS-Projects/blob/main/NexaAi/nexa.png?raw=true",
    title: "Nexa AI Landing Page Clone",
    description:
      "A responsive Nexa AI landing page clone built with HTML, CSS, and JavaScript. Showcases modern UI, smooth layout design, and clean code structure. Live demo and open-source code available on GitHub.",
    liveDemoLink: "https://nexa-ai-clone-by-fuzail.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/CSS-Projects/tree/main/NexaAi",
  },
  {
    id: 3,
    image: `${pizzaImg}`,
    title: "Pizza Ordering Website (Next.js)",
    description:
      "A modern pizza ordering web app built with Next.js, React, and Tailwind CSS. Features responsive UI, dynamic routing, and optimized page performance. Designed as a beginner-friendly full-stack foundation using Next.js for real-world web apps.",
    liveDemoLink: "https://first-nextjs-project-kappa-topaz.vercel.app/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/first-next_js-project",
  },
  {
    id: 4,
    image: `${businessWeb}`,
    title: "Business Website with Bootstrap",
    description:
      "A professional business website built using HTML, CSS, and Bootstrap. Fully responsive with modern layouts, service sections, and clean UI. Designed for corporate branding and fast web deployment.",
    liveDemoLink:
      "https://fuzailahmed-developer.github.io/business-website-bootstrap/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/business-website-bootstrap",
  },
  {
    id: 5,
    image: `${nexcent}`,
    title: "Nexcent CSS Hackathon Project",
    description:
      "A creative multi-section landing page built during a CSS Hackathon challenge. Uses modern layout techniques, smooth animations, and fully responsive design with HTML and CSS.",
    liveDemoLink: "https://fuzailahmed-developer.github.io/CSS-Hackathon/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/CSS-Hackathon",
  },
  {
    id: 6,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/10.weather-app.png?raw=true",
    title: "Weather Forecast App",
    description:
      "A sleek, responsive weather app built using JavaScript, HTML & CSS. Fetches live data from APIs to display current weather for any city. Try it live and explore the source code on GitHub.",
    liveDemoLink: "https://fuzail-weather-app.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/10_Weather-App",
  },
  {
    id: 7,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/16.country-project.png?raw=true",
    title: "All Countries Details Dashboard",
    description:
      "A detailed countries information app built with JavaScript, HTML & CSS. Fetches data from REST APIs to display flags, populations, capitals, and more. Fully responsive, user-friendly, and open-source on GitHub.",
    liveDemoLink: "http://all-countries.details-api-project.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/Countries-Api-Project",
  },
  {
    id: 8,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/9.landing-page.png?raw=true",
    title: "Dynamic Landing Page",
    description:
      "A dynamic landing page built with JavaScript, HTML & CSS. Features animated content sections, smooth scroll effects, and responsive design. Live demo available and full source code open on GitHub.",
    liveDemoLink: "https://dynamic-landing-page.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/09_Dynamic-Landing-Page",
  },
  {
    id: 9,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/11.stop-watch.png?raw=true",
    title: "Stopwatch Timer App",
    description:
      "A simple and responsive stopwatch application built using JavaScript, HTML & CSS. Start, pause, reset features included with clean UI. Experience it live and check the full source code on GitHub.",
    liveDemoLink: "https://my-stop-watch-project.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/16.StopWatch",
  },
  {
    id: 10,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/8.todo-app.png?raw=true",
    title: "To-Do List with Local Storage",
    description:
      "A user-friendly To-Do List app built with JavaScript, HTML & CSS, which stores tasks in browser’s localStorage so your data persists. Add, remove, and mark tasks complete. Try the live version or explore the source code on GitHub.",
    liveDemoLink: "https://local-storage-todo.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/05_To_DO_List/Todo_with_local-storage",
  },
  {
    id: 11,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/1.counter-app.png?raw=true",
    title: "Counter App",
    description:
      "A lightweight counter app built with JavaScript, HTML & CSS. Increment, decrement, and reset functionalities with clean UI. Try the live demo and view full source code on GitHub.",
    liveDemoLink: "https://fuzail-counter-app.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/01_Counter-APP",
  },
  {
    id: 12,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/12.gradient-generator.png?raw=true",
    title: "Gradient Generator Tool",
    description:
      "A modern gradient generator built with JavaScript, HTML & CSS. Lets users create, preview, and copy CSS gradients with ease. View the live tool and check the full source code on GitHub.",
    liveDemoLink: "https://gradient-generator-program.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/13.Gradient%20Genetor",
  },
  {
    id: 13,
    image:
      "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/5.calculator.png?raw=true",
    title: "Calculator App",
    description:
      "A sleek calculator built with JavaScript, HTML & CSS. Supports basic arithmetic operations with a clean, responsive UI. Test it live and explore the source code on GitHub.",
    liveDemoLink: "http://fuzail-calculator.surge.sh/",
    sourceCodeLink:
      "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/09_Calculator",
  },
];




function ProjectCard({ project }) {
  const [isHovered, setHovered] = React.useState(false);

  const blurProps = useSpring({
    filter: isHovered ? "blur(5px)" : "blur(0px)",
    opacity: isHovered ? 0.9 : 1,
  });

  const overlayProps = useSpring({
    opacity: isHovered ? 1 : 0,
  });

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Card
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      color="white"
      className="w-full max-w-[100%] dark:bg-black relative mx-auto mb-8 md:max-w-screen-md"
    >
      <animated.div style={blurProps}>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-t-lg object-cover w-full h-64 md:h-64"
        />
        <Typography className="text-lg text-black dark:text-white flex justify-center font-semibold mx-3 my-6 font-poppins">
          {project.title}
        </Typography>
      </animated.div>
      <animated.div
        style={{
          ...overlayProps,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          borderRadius: "10px",
          padding: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          minHeight: "360px"
        }}
        className="bg-white dark:bg-black"
      >
        <Typography className="sm:text-xl text-black dark:text-white font-semibold mb-2 font-poppins">
          {project.title}
        </Typography>

        <CardBody>
          <p className="text-sm text-black dark:text-white">
            {project.description}
          </p>
        </CardBody>

        <div className="flex mt-3 min-h-[100px]">
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.liveDemoLink)}
            className="mr-4 flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="material-symbols-light:play-circle"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Live Demo</span>
          </Button>
          <Button
            variant="text"
            onClick={() => handleButtonClick(project.sourceCodeLink)}
            className="flex items-center rounded-full text-second font-medium dark:hover:bg-gray-50"
          >
            <Icon
              icon="mdi:github"
              height={52}
              width={52}
              style={{ marginRight: "5px" }}
            />
            <span>Source Code</span>
          </Button>
        </div>
      </animated.div>
    </Card>
  );
}

function Projects() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-in"
      data-aos-duration="1500"
      data-aos-mirror="true"
      id="projects"
      className="flex flex-col items-center p-4 md:p-8 scroll-mt-64 md:scroll-mt-28"
    >
      <div className="w-full text-center">
        <Typography
          variant="h1"
          color="black"
          className="underline text-center dark:text-white font-medium text-4xl md:text-5xl font-poppins"
        >
          My Projects
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3 lg:gap-4 items-center mt-12">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} className="mb-4" />
        ))}
      </div>
    </div>
  );
}

export default Projects;

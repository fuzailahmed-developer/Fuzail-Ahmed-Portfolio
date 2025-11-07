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
import toolsWebImg from "../../assets/Tools-Website.png";

const projectsData = [
  {
    id: 0,
    image: "https://github.com/fuzailahmed-developer/first-next_js-project/blob/main/public/preview.png?raw=true",
    title: "First Next.js + Tailwind Project",
    description:
      "A fully responsive Next.js project styled with Tailwind CSS and shadcn/ui. Designed with modern UI patterns, smooth animations, and clean code structure. Deployed on Vercel and open-sourced on GitHub.",
    liveDemoLink: "https://first-nextjs-project-kappa-topaz.vercel.app/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/first-next_js-project",
  },
  {
    id: 1,
    image: `${toolsWebImg}`,
    title: "React + Tailwind UI Project",
    description:
      "A fully responsive React and Tailwind CSS UI project featuring modern layouts, reusable components, and smooth design. Focused on clean code, optimized structure, and professional web UI implementation.",
    liveDemoLink: "https://react-tailwind-ui-project-one.vercel.app/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/React-Tailwind-UI-Project",
  },
  {
    id: 2,
    image: "https://github.com/fuzailahmed-developer/CSS-Projects/blob/main/NexaAi/nexa.png?raw=true",
    title: "Nexa AI Landing Page Clone",
    description:
      "A responsive Nexa AI landing page clone built with HTML, CSS, and JavaScript. Showcases modern UI, smooth layout design, and clean code structure. Live demo and open-source code available on GitHub.",
    liveDemoLink: "https://nexa-ai-clone-by-fuzail.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/CSS-Projects/tree/main/NexaAi",
  },
  {
    id: 3,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/10.weather-app.png?raw=true",
    title: "Weather Forecast App",
    description:
      "A sleek, responsive weather app built using JavaScript, HTML & CSS. Fetches live data from APIs to display current weather for any city. Try it live and explore the source code on GitHub.",
    liveDemoLink: "https://fuzail-weather-app.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/10_Weather-App",
  },
  {
    id: 4,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/16.country-project.png?raw=true",
    title: "All Countries Details Dashboard",
    description:
      "A detailed countries information app built with JavaScript, HTML & CSS. Fetches data from REST APIs to display flags, populations, capitals, and more. Fully responsive, user-friendly, and open-source on GitHub.",
    liveDemoLink: "http://all-countries.details-api-project.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/Countries-Api-Project",
  },
  {
    id: 5,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/9.landing-page.png?raw=true",
    title: "Dynamic Landing Page",
    description:
      "A dynamic landing page built with JavaScript, HTML & CSS. Features animated content sections, smooth scroll effects, and responsive design. Live demo available and full source code open on GitHub.",
    liveDemoLink: "https://dynamic-landing-page.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/09_Dynamic-Landing-Page",
  },
  {
    id: 6,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/11.stop-watch.png?raw=true",
    title: "Stopwatch Timer App",
    description:
      "A simple and responsive stopwatch application built using JavaScript, HTML & CSS. Start, pause, reset features included with clean UI. Experience it live and check the full source code on GitHub.",
    liveDemoLink: "https://my-stop-watch-project.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/16.StopWatch",
  },
  {
    id: 7,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/8.todo-app.png?raw=true",
    title: "To-Do List with Local Storage",
    description:
      "A user-friendly To-Do List app built with JavaScript, HTML & CSS, which stores tasks in browser’s localStorage so your data persists. Add, remove, and mark tasks complete. Try the live version or explore the source code on GitHub.",
    liveDemoLink: "https://local-storage-todo.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/05_To_DO_List/Todo_with_local-storage",
  },
  {
    id: 8,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/1.counter-app.png?raw=true",
    title: "Counter App",
    description:
      "A lightweight counter app built with JavaScript, HTML & CSS. Increment, decrement, and reset functionalities with clean UI. Try the live demo and view full source code on GitHub.",
    liveDemoLink: "https://fuzail-counter-app.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/SMIT-Project-List/01_Counter-APP",
  },
  {
    id: 9,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/12.gradient-generator.png?raw=true",
    title: "Gradient Generator Tool",
    description:
      "A modern gradient generator built with JavaScript, HTML & CSS. Lets users create, preview, and copy CSS gradients with ease. View the live tool and check the full source code on GitHub.",
    liveDemoLink: "https://gradient-generator-program.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/13.Gradient%20Genetor",
  },
  {
    id: 10,
    image: "https://github.com/fuzailahmed-developer/JS-Projects/blob/main/JS-Portfolio/5.calculator.png?raw=true",
    title: "Calculator App",
    description:
      "A sleek calculator built with JavaScript, HTML & CSS. Supports basic arithmetic operations with a clean, responsive UI. Test it live and explore the source code on GitHub.",
    liveDemoLink: "http://fuzail-calculator.surge.sh/",
    sourceCodeLink: "https://github.com/fuzailahmed-developer/JS-Projects/tree/main/09_Calculator",
  },
];

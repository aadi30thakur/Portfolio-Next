import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import {  AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and  scalable SPA using <b> HTML</b>,<b>CSS</b>  and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <bExpress</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>CodeChef</b>  and <b>Geek for Geeks</b> ",
  },
  // {
  //   Icon: AiOutlineAntDesign,
  //   title: "UI/UX designer",
  //   about:
  //     "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  // },
  // {
  //   Icon: RiComputerLine,
  //   title: "Whatever",
  //   about:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  // },
];

export const languages: Skill[] = [ 
  {
    Icon: BsCircleFill,
    name: "Java",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Docker",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Express",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "VS Code",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Adobe XD",
    level: "55",
  },

];

export const projects: IProject[] = [
  {
    id:1,
    name: "Youtube clone",
    description:
      "Youtube clone with minimal or no ads",
    image_path: "/images/yt-clone.png",
    deployed_url: "https://u-tube.vercel.app/",
    github_url: "https://github.com/aadi30thakur/yt-clone",
    category: ["react","node","express","mongo"],
    key_techs: ["NextJS", "Tailwind", "TypeScript"],
  },
  {
    id:2,
    name: "Tee Store",
    description:
      "This app is a usual  e-commerce Store made with Complete Mern Stack",
    image_path: "/images/TeeStore.png",
    deployed_url: "https://tees-store.herokuapp.com/",
    github_url: "https://github.com/aadi30thakur/mern-website",
    category: ["react","node","express","mongo"],
    key_techs: ["React", "Bootstrap", "Node","express","Rest Api"],
  },
  {
    id:3,

    name: "U-Shot ",
    image_path: "/images/ushot.jpg",
    deployed_url: "https://ushot.herokuapp.com/",
    github_url: "https://github.com/aadi30thakur/url-shortner",
    category: ["react","mongo","express","node"],
    description:
      "An web app which shorten long links into tiny urls  ",
    key_techs: ["React", "Bootstrap", "Mongo"],
  },

  {
    id:4,

    name: "WhatsApp Clone",
    image_path: "/images/whatsapp.png",
    deployed_url: "https://aadi30thakur.github.io/whatsapp-react/",
    github_url: "https://github.com/aadi30thakur/whatsapp-react",
    category: ["react"],
    description:
      "Social Media app for developers who can share project,create posts,etc...",
    key_techs: [
      "React",
      "Firebase",
      "Css",
    ],
  },

  {
    id:5,

    name: "Music Player",
    image_path: "/images/musicPlayer.png",
    deployed_url: "https://aadi30thakur.github.io/Music-Player//",
    github_url: "https://github.com/aadi30thakur/Music-Player",
    category: ["Html"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["Html", "Css", "JavaScript"],
  },

  {
    id:6,

    name: "Gif Generator",
    image_path: "/images/GifApp.png",
    deployed_url: "https://aadi30thakur.github.io/GIF-link-gen/",
    github_url: "https://github.com/aadi30thakur/GIF-link-gen",
    category: [ "react"],
    description:
      "A random Gif generator and Searcher Using Giphy API",
    key_techs: ["React", "Api"],
  },

  {
    id:7,

    name: "Couture Point",
    image_path: "/images/CouturePoint.png",
    deployed_url: "https://couturepoint.herokuapp.com/",
    github_url: "https://github.com/aadi30thakur/couture-point",
    description:
      "A fashion Store For  all, allows you to buy clothes for just very minial data",
      category: ["react","node","express","mongo"],
      key_techs: ["React", "Bootstrap", "Node","express","Rest Api"],
  },
  {
    id:8,

    name: "Weather Detector ",
    image_path: "/images/weatherApp.png",
    deployed_url: "https://aadi30thakur.github.io/Weather-App/",
    github_url: "https://github.com/aadi30thakur/Weather-App",
    category: ["react"],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: [
      "React",
      "Bootstrap",
    ],
  },
  {
    id:9,

    name: "2048 game",
    image_path: "/images/2048.png",
    deployed_url: "https://aadi30thakur.github.io/2048-game/",
    github_url: "https://github.com/aadi30thakur/2048-game",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
  {
    id:10,

    name: "Markdown Previewer",
    image_path: "/images/Markdown.png",
    github_url: "https://github.com/aadi30thakur/Markdown-Previewer",
    deployed_url: "https://aadi30thakur.github.io/Markdown-Previewer/",
    category: ["react"],
    description:
      "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
    key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
  },
];
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { SiCodechef } from "react-icons/si";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        height="128"
        width="128"
        layout="intrinsic"
        src="/images/profile.jpg"
        alt="user avtar"
        quality="100"
        className="mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Aditya</span> Thakur
      </h3>
      <p className="px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-300">
        Web developer
      </p>
      <a
        href="/assets/Aditya_Resume.pdf"
        download="Aditya Thakur Resume.pdf"
        className="flex items-center justify-center px-2 py-2 my-3 bg-gray-200 rounded-full dark:bg-dark-300"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* social icons */}

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.codechef.com/users/aadi89880">
          <SiCodechef
            className="w-8 h-8 cursor-pointer"
            aria-label="CodeChef"
          />
        </a>
        <a href="https://github.com/aadi30thakur">
          <AiFillGithub
            className="w-8 h-8 cursor-pointer"
            aria-label="Github"
          />
        </a>
        <a href="https://www.linkedin.com/in/aditya-thakur/">
          <AiFillLinkedin
            className="w-8 h-8 cursor-pointer"
            aria-label="Linkedin"
          />
        </a>
      </div>
      {/* address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-300"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Himachal, India</span>
        </div>
        <p className="my-2 font-bold">aadi30.thakur@gmail.com</p>
        <p className="my-2 font-bold text-gray-700 dark:text-white">
          <span className="text-black dark:text-gray-400">+91</span> 8091719949
        </p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:aadi30.thakur@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
      >
        Toggle theme
      </button>
    </div>
  );
};

export default Sidebar;

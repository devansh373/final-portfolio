// import React from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
import AnimatedLetters from "../components/LetterAnimation";
import { glowPathSvg } from "../constants/glowPathSvg";

const ProjectSection = ({ setProjectSection }) => {
  return (
    <>
      <div className="w-full flex justify-around items-center gap-[15rem] relative">
        {/* {glowPathSvg} */}

        {" "}
        <img src="assets/sticker.png" alt="" className="w-[450px] " />
        <div
          className="text-7xl cursor-pointer p-2 bg-pink-600 hover:bg-pink-700 rounded-lg mx-auto flex items-center gap-[1rem] gradientText"
          onClick={() => setProjectSection(true)}
        >
          {/* PROJECTS */}
          <AnimatedLetters text={"PROJECTS"} classParam={"gradientText"} />
        </div>
      </div>
      <div className=" w-full flex justify-end absolute right-[25%] top-[70%]">
        <button
          class="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold 
    bg-gradient-to-r from-purple-600 to-fuchsia-600
    hover:from-fuchsia-600 hover:to-purple-600
    shadow-lg hover:shadow-fuchsia-500/40 transition-all duration-300 cursor-pointer"
          onClick={() => setProjectSection(true)}
        >
          OPEN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              class="transition stroke-white group-hover:stroke-cyan-200 "
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 3h7m0 0v7m0-7L10 14M5 19h14"
            />
          </svg>
        </button>

        {/* <button className=" flex gap-[1rem] items-center bg-purple-700 w-[100px] justify-center p-2 rounded-lg cursor-pointer hover:bg-purple-800">
          OPEN<FaExternalLinkAlt />
          </button> */}
      </div>
    </>
  );
};

export default ProjectSection;

// import React from "react";
// import { FaExternalLinkAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import AnimatedLetters from "../components/LetterAnimation";
import { glowPathSvg } from "../constants/glowPathSvg";

const ProjectSection = ({ setProjectSection }) => {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full flex justify-around items-center gap-[1rem] pl-50 relative">
        {/* {glowPathSvg} */}

        {" "}
        <img src="assets/sticker.png" alt="" className="w-[450px] " />
        <div
          className="text-8xl cursor-pointer p-2 rounded-lg mx-auto flex flex-col items-center gap-[1rem] tracking-widest"
          // onClick={() => setProjectSection(true)}
          // onClick={() => navigate("/projectsPage")}
          // onClick={() => window.open("/projectsPage", "_blank")}
        >
          {/* PROJECTS */}
          <Link to={"/projectsPage"}>
          <h1 className="text-center">3D</h1>
          {/* <h1>PROJECTS</h1> */}
          {/* <AnimatedLetters text={"PROJECTS"} classParam={"gradientText"} /> */}
          </Link>
           <div className=" w-full flex justify-center text-2xl tracking-normal">
        <Link to={"/projectsPage"}
          class="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold 
    bg-gradient-to-r from-purple-600 to-fuchsia-600
    hover:from-fuchsia-600 hover:to-purple-600
    shadow-lg hover:shadow-fuchsia-500/40 transition-all duration-300 cursor-pointer"
          // onClick={() => setProjectSection(true)}
          // onClick={() => window.open("/projectsPage", "_blank")}

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
        </Link>

       
      </div>
        </div>
       
      </div>
      
    </>
  );
};

export default ProjectSection;

import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { manSvg } from "../constants/manSvg";
import { useState } from "react";
import { Link } from "react-router";
import { givePhotoURL } from "../helper/helper";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title,url,desc }) => {
  // const [showSvg,setShowSvg] = useState(false)
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
     z-30 flex flex-col justify-center items-center text-center p-16 cursor-pointer rounded-lg font-medium`;
  // const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative" >
      <Link to={url}  className={`${overlayStyles} text-[#2CBCE9] bg-[#ededed]`}>
        {/* {showSvg && <div className="absolute top-0 left-0 z-20">{manSvg}</div>} */}
        <p className="text-2xl font-playfair">{title?.includes("Project") ? "Dummy Project":title}</p>
        <p className="mt-7">
          {desc}
        </p>
      </Link>
      <img src={givePhotoURL(title)} alt={"projectTitle"} className=" object-cover rounded-lg" />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-[#DC4492]">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
        Following are the projects I made as a Front End Developer:
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center ">
        <motion.div
          className="sm:grid gap-3 sm:grid-cols-3 rounded-lg"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center  text-center items-center p-10 bg-[#922d61]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-medium"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          {/* desc={"This is a responsive clone of Youtube which uses Live Youtube Data Api and have features like search functionality, debouncing of 200ms, colour theme switch."} */}
          {/* desc={"This is a kind of Netflix(responsive) which has feature of Ai search"} */}
          <Project title="YouTube Dev" url={"/project/youtubeDev"}  />
          <Project title="Netflix Ai" url={"/project/netflixAi"} />

          {/* ROW 2 */}
          <Project title="Project 3" url={"/"}/>
          <Project title="Project 4" url={"/"}/>
          <Project title="Project 5" url={"/"}/>

          {/* ROW 3 */}
          <Project title="Project 6" url={"/"}/>
          <Project title="Project 7" url={"/"}/>
          <div
            className="flex justify-center text-center items-center p-10 bg-[#237791]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
      {/* <div>
        {manSvg}
      </div> */}
    </section>

  );
};

export default Projects;

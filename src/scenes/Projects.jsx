import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
// import { manSvg } from "../constants/manSvg";
import { useState } from "react";
import { Link } from "react-router";
import { givePhotoURL } from "../helper/helper";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      // staggerChildren: Math.floor(Math.random()*10)/10,
      // delayChildren: Math.floor(Math.random()*10)/10,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

// import { motion } from "framer-motion";
// import { Link } from "react-router";
// import { givePhotoURL } from "../helper/helper";

const Project = ({ title, url, hoveredProject, setHoveredProject }) => {

  const isHovered = hoveredProject === title;

  const sizeClass = isHovered
    ? "w-[400px] h-[400px]"
    : hoveredProject
    ? "w-[300px] h-[300px]"
    : "w-[300px] h-[300px]";

  return (
    <motion.div
      layout
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
      }}
      transition={{
        // ease: [.29,-0.8,.87,2.06],
        duration: 0.2,
        // delay:Math.floor(Math.abs(5 - (Math.random()*10)))/10
      }}
      
      onMouseEnter={() => setHoveredProject(title)}
      onMouseLeave={() => setHoveredProject(null)}
      className={`relative  rounded-lg ${sizeClass} min-w-[200px] min-h-[200px]`}
    >
      <Link
        to={url}
        className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
          z-30 flex flex-col justify-center items-center text-center p-10 cursor-pointer rounded-lg font-medium text-[#2CBCE9] bg-[#ededed]"
      >
        <p className="text-2xl font-playfair">
          {title?.includes("Project") ? "Dummy Project" : title}
        </p>
        {/* <p className="mt-7">Project description goes here.</p> */}
      </Link>
      <img
        src={givePhotoURL(title)}
        alt={title}
        className="w-full h-full object-cover rounded-lg"
      />
    </motion.div>
  );
};

// export default Project;



const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projectsList = [
    { title: "YouTube Dev", url: "/project/youtubeDev" },
    { title: "Netflix Ai", url: "/project/netflixAi" },
    { title: "dev WC", url: "/project/autoCertificateDelivery" },
    { title: "Project 4", url: "/" },
    { title: "Project 5", url: "/" },
    { title: "Project 6", url: "/" },
    // { title: "Project 7", url: "/" },
  ];

  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.5 }}
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
      <div className="flex justify-center w-full sm:pl-[10rem] pl-[2rem]">
        <motion.div
          className="flex flex-wrap gap-[8rem] sm:gap-[2rem] rounded-lg"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {projectsList.map(({ title, url }, index) => (
            <Project
              key={index}
              title={title}
              url={url}
              hoveredProject={hoveredProject}
              setHoveredProject={setHoveredProject}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};


export default Projects;

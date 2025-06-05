import React from "react";
import { useParams } from "react-router";
import { givePhotoURL } from "../helper/helper";
import {motion} from "framer-motion"

const ProjectDetails = () => {
  const { id } = useParams();
  const projectDetails = [
    {
      id: "devPortfolio",
      name: "Dev Portfolio",
      liveUrl: "https://dev-final-portfolio.netlify.app/",
      description:
        "This is my portfolio website where all my projects are listed. It is a showcase of my frontend skills.",
      pageSpeedInsights: "",
    },
    {
      id: "youtubeDev",
      name: "Youtube Dev",
      liveUrl: "https://dev-yt.netlify.app/",
      description:
        "This is a responsive clone of Youtube which uses Live Youtube Data Api and have features like search functionality, debouncing of 200ms, colour theme switch.",
      techStack: [
        "Html","Css","Javascript","React","Tailwind Css","Redux",
      ],
      
      features: [
        {
          photoUrl: "../assets/light-theme-yt-dev.jpg",
          title: "Light Theme",
        },
        {
          photoUrl: "../assets/dark-theme-yt-dev.jpg",
          title: "Dark Theme",
        },
        {
          photoUrl: "../assets/caching-search-results-yt-dev.jpg",
          title: "Caching",
        },
        {
          photoUrl: "../assets/country-wise-yt-dev.jpg",
          title: "Choose Your Country",
        },
        {
          photoUrl: "../assets/country-wise-results-yt-dev.jpg",
          title: "Country-wise Popular Videos",
        },
        {
          photoUrl: "../assets/filters-yt-dev.jpg",
          title: "Filters",
        },
      ],
    },
    {
      id: "netflixAi",
      name: "Netflix Ai",
      liveUrl: "https://dev-ntflx.netlify.app/",
      description:
        "This is a kind of Netflix(responsive) which has feature of Ai search",
      techStack: "",
      features:[
        
      ]
    },
  ];
  const projectOpened = projectDetails.find((project) => project.id === id);
  return (
    <div className="text-white p-8">
      <h1 className="text-5xl text-center font-medium text-[#DC4492]">{projectOpened.name}</h1>
      <p className="text-3xl text-[#922d61] font-medium py-5">Description:</p>
      <p className="text-xl">{projectOpened.description}</p>
      <p className="text-3xl text-[#922d61] font-medium py-5">Live Site URL:</p>
      <a
        href={projectOpened.liveUrl}
        target="_blank"
        className="text-xl underline py-5 inline-block hover:text-white text-[#2CBCE9]"
      >
        {projectOpened.liveUrl}
      </a>
      <h1 className="text-3xl text-[#922d61] font-medium py-3">Features:</h1>
      <div className=" pt-7 flex flex-col gap-[14rem] ">
        {projectOpened?.features.map((feautre, index) => (
          <motion.div
          initial={"small"}
          whileInView={"normal"}
          viewport={{amount:0.5}}
          transition={{duration:0.5}}
          variants={{
            "small":{opacity:0,y:80,scale:0.8},
            "normal":{
              opacity:1,
              y:0,
              scale:1
            },
          }}
          >

          <div
            className={`flex ${
              index % 2 !== 0 && "flex-row-reverse"
              } items-center justify-around flex-wrap gap-[2rem]`}
              >
            <h1 className="text-4xl font-medium underline decoration-[#DC4492]">
              {feautre.title}
            </h1>
            <img
              src={feautre.photoUrl}
              alt="Project Photo"
              className="min-w-[700px] w-[60vw]  border-4 border-[#DC4492] rounded-lg"
              />
          </div>
              </motion.div>
        ))}
      </div>
      {/* {projectOpened.id === "youtubeDev" && (
        <div className=" pt-7 flex flex-col gap-[14rem] ">
          <div className="flex items-center justify-around flex-wrap gap-[2rem]">
            <h1 className="text-4xl font-medium underline decoration-[#DC4492]">
              Light Theme
            </h1>
            <img
              src={"../assets/light-theme-yt-dev.jpg"}
              alt="Project Photo"
              className="min-w-[700px] w-[60vw]  border-4 border-[#DC4492] rounded-lg"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-around">
            <h1 className="text-4xl font-medium underline decoration-[#2CBCE9]">
              Dark Theme
            </h1>
            <img
              src={"../assets/dark-theme-yt-dev.jpg"}
              alt="Project Photo"
              className="w-[60vw] border-4 border-[#2CBCE9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-around">
            <h1 className="text-4xl font-medium underline decoration-[#DC4492]">
              Caching
            </h1>
            <img
              src={"../assets/caching-search-results-yt-dev.jpg"}
              alt="Project Photo"
              className="w-[60vw] border-4 border-[#DC4492] rounded-lg"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-around">
            <h1 className="text-4xl font-medium underline decoration-[#2CBCE9]">
              Choose your Country
            </h1>
            <img
              src={"../assets/country-wise-yt-dev.jpg"}
              alt="Project Photo"
              className="w-[60vw] border-4 border-[#2CBCE9] rounded-lg"
            />
          </div>
          <div className="flex items-center justify-around">
            <h1 className="text-4xl font-medium underline decoration-[#DC4492]">
              Country-wise Popular Videos
            </h1>
            <img
              src={"../assets/country-wise-results-yt-dev.jpg"}
              alt="Project Photo"
              className="w-[60vw] border-4 border-[#DC4492] rounded-lg"
            />
          </div>
          <div className="flex flex-row-reverse items-center justify-around">
            <h1 className="text-4xl font-medium underline decoration-[#4449dc]">
              Filters
            </h1>
            <img
              src={"../assets/filters-yt-dev.jpg"}
              alt="Project Photo"
              className="w-[60vw] border-4 border-[#4449dc] rounded-lg"
            />
          </div>
        </div>
      )} */}
      {/* <p>{projectOpened}</p> */}
    </div>
  );
};

export default ProjectDetails;

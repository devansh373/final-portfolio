import React, { useEffect } from "react";
import { useParams } from "react-router";

import { motion } from "framer-motion";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(100, 100);
  }, []);
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
        "Html",
        "Css",
        "Javascript",
        "React",
        "Tailwind Css",
        "Redux",
      ],
      disclaimer:
        "Some functionalities may not work due to CORS policy as the api is the original Youtube Data Api",
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
        {
          photoUrl: "../assets/nested-comments-yt-dev.jpg",
          title: "n-level Nested Comments",
        },
        {
          photoUrl: "../assets/pagination-yt-dev.jpg",
          title: "Pagination in Comments",
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
      features: [
        {
          photoUrl: "../assets/NetflixAi_Ai_Authentication_firebase.jpg",
          title: "Google Firebase Authentication",
        },
        {
          photoUrl: "../assets/NetflixAi_Ai_search.jpg",
          title: "Ai search",
        },
        {
          photoUrl: "../assets/NetflixAi_pagination.jpg",
          title: "Pagination",
        },
        {
          photoUrl: "../assets/NetflixAi_movie_search.jpg",
          title: "Movie Search with Debouncing of 200ms",
        },
      ],
    },
    {
      id: "autoCertificateDelivery",
      name: "Auto Certificate Delivery Workshop",
      liveUrl: "https://workshop-certificates-56fb5.firebaseapp.com/",
      description:
        "A workshop feedback system with Automatic Certificate Delivery",
      techStack: "",
      features: [
        {
          photoUrl: "../assets/dev-WC-homepage.jpg",
          title: "Secure Admin Login",
        },
        {
          photoUrl: "../assets/Admin_Dashboard.jpg",
          title: "Admin Dashboard",
        },
        {
          photoUrl: "../assets/form_creation.jpg",
          title: "Form Creation",
        },
        {
          photoUrl: "../assets/All_templates.jpg",
          title: "All Templates",
        },
        {
          photoUrl: "../assets/dynamic-placement-drag.jpg",
          title: "Dynamic Placement of Fields (Drag)",
        },
      ],
    },
  ];
  const projectOpened = projectDetails.find((project) => project.id === id);
  return (
    <div className="text-white p-6 stars-bg">
      <h1 className="text-5xl text-center font-medium text-[#DC4492]">
        {projectOpened?.name}
      </h1>
      <p className="text-3xl text-[#922d61] font-medium py-5">Description:</p>
      <p className="text-xl">{projectOpened?.description}</p>
      <p className="text-3xl text-[#922d61] font-medium py-5">Live Site URL:</p>
      <a
        href={projectOpened?.liveUrl}
        target="_blank"
        className="text-xl underline py-5 inline-block hover:text-white text-[#2CBCE9]"
      >
        {projectOpened?.liveUrl}
      </a>
      {projectOpened?.disclaimer && (
        <>
          <p className="text-3xl text-[#922d61] font-medium py-5">
            Disclaimer:
          </p>
          <p className="text-xl">{projectOpened.disclaimer}</p>
        </>
      )}
      <h1 className="text-3xl text-[#922d61] font-medium py-3">Features:</h1>

      <div className=" pt-7 flex flex-col gap-[14rem] ">
        {projectOpened?.features.map((feautre, index) => (
          <motion.div
            initial={"small"}
            whileInView={"normal"}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              small: { opacity: 0, y: 80, scale: 0.8 },
              normal: {
                opacity: 1,
                y: 0,
                scale: 1,
              },
            }}
          >
            <div
              className={`flex ${
                index % 2 !== 0 && "flex-row-reverse"
              } items-center justify-around flex-wrap gap-[2rem]`}
            >
              <h1 className="text-4xl font-medium underline decoration-[#DC4492] text-center">
                {feautre?.title}
              </h1>
              <img
                src={feautre?.photoUrl}
                alt="Project Photo"
                className="sm:min-w-[700px] min-h-[200px] min-w-[320px] w-[60vw]  border-4 border-[#DC4492] rounded-lg"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

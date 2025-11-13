// import React, { useEffect } from "react";
// import { useParams } from "react-router";

// import { motion } from "framer-motion";

// const ProjectDetails = () => {
//   useEffect(() => {
//     window.scrollTo(100, 100);
//   }, []);
//   const { id } = useParams();
//   const projectDetails = [
//     {
//       id: "devPortfolio",
//       name: "Dev Portfolio",
//       liveUrl: "https://dev-final-portfolio.netlify.app/",
//       description:
//         "This is my portfolio website where all my projects are listed. It is a showcase of my frontend skills.",
//       pageSpeedInsights: "",
//     },
//     {
//       id: "youtubeDev",
//       name: "Youtube Dev",
//       liveUrl: "https://dev-yt.netlify.app/",
//       description:
//         "This is a responsive clone of Youtube which uses Live Youtube Data Api and have features like search functionality, debouncing of 200ms, colour theme switch.",
//       techStack: [
//         "Html",
//         "Css",
//         "Javascript",
//         "React",
//         "Tailwind Css",
//         "Redux",
//       ],
//       disclaimer:
//         "Some functionalities may not work due to CORS policy as the api is the original Youtube Data Api",
//       features: [
//         {
//           photoUrl: "../assets/light-theme-yt-dev.avif",
//           title: "Light Theme",
//         },
//         {
//           photoUrl: "../assets/dark-theme-yt-dev.avif",
//           title: "Dark Theme",
//         },
//         {
//           photoUrl: "../assets/caching-search-results-yt-dev.avif",
//           title: "Caching",
//         },
//         {
//           photoUrl: "../assets/country-wise-yt-dev.avif",
//           title: "Choose Your Country",
//         },
//         {
//           photoUrl: "../assets/country-wise-results-yt-dev.avif",
//           title: "Country-wise Popular Videos",
//         },
//         {
//           photoUrl: "../assets/filters-yt-dev.avif",
//           title: "Filters",
//         },
//         {
//           photoUrl: "../assets/nested-comments-yt-dev.avif",
//           title: "n-level Nested Comments",
//         },
//         {
//           photoUrl: "../assets/pagination-yt-dev.avif",
//           title: "Pagination in Comments",
//         },
//       ],
//     },
//     {
//       id: "netflixAi",
//       name: "Netflix Ai",
//       liveUrl: "https://dev-ntflx.netlify.app/",
//       description:
//         "This is a kind of Netflix(responsive) which has feature of Ai search",
//       techStack: "",
//       features: [
//         {
//           photoUrl: "../assets/NetflixAi_Ai_Authentication_firebase.avif",
//           title: "Google Firebase Authentication",
//         },
//         {
//           photoUrl: "../assets/NetflixAi_Ai_search.avif",
//           title: "Ai search",
//         },
//         {
//           photoUrl: "../assets/NetflixAi_pagination.avif",
//           title: "Pagination",
//         },
//         {
//           photoUrl: "../assets/NetflixAi_movie_search.avif",
//           title: "Movie Search with Debouncing of 200ms",
//         },
//       ],
//     },
//     {
//       id: "autoCertificateDelivery",
//       name: "Auto Certificate Delivery Workshop",
//       liveUrl: "https://workshop-certificates-56fb5.firebaseapp.com/",
//       description:
//         "A workshop feedback system with Automatic Certificate Delivery",
//       techStack: "",
//       features: [
//         {
//           photoUrl: "../assets/dev-WC-homepage.avif",
//           title: "Secure Admin Login",
//         },
//         {
//           photoUrl: "../assets/Admin_Dashboard.avif",
//           title: "Admin Dashboard",
//         },
//         {
//           photoUrl: "../assets/form_creation.avif",
//           title: "Form Creation",
//         },
//         {
//           photoUrl: "../assets/All_templates.avif",
//           title: "All Templates",
//         },
//         {
//           photoUrl: "../assets/dynamic-placement-drag.avif",
//           title: "Dynamic Placement of Fields (Drag)",
//         },
//       ],
//     },
//   ];
//   const projectOpened = projectDetails.find((project) => project.id === id);
//   return (
//     <div className="px-66 py-6">
//     <div className="text-white p-4 rounded-2xl shadow-2xl shadow-white  bg-teal-800   ">
//       <h1 className="text-5xl text-center font-medium text-[#DC4492]">
//         {projectOpened?.name}
//       </h1>
//       <p className="text-3xl text-[#DC4492] font-medium py-5">Description:</p>
//       <p className="text-xl">{projectOpened?.description}</p>
//       <p className="text-3xl text-[#DC4492] font-medium py-5">Live Site URL:</p>
//       <a
//         href={projectOpened?.liveUrl}
//         target="_blank"
//         className="text-xl underline py-5 inline-block hover:text-white text-[#2CBCE9]"
//       >
//         {projectOpened?.liveUrl}
//       </a>
//       {projectOpened?.disclaimer && (
//         <>
//           <p className="text-3xl text-[#DC4492] font-medium py-5">
//             Disclaimer:
//           </p>
//           <p className="text-xl">{projectOpened.disclaimer}</p>
//         </>
//       )}
//       <h1 className="text-3xl text-[#DC4492] font-medium py-3">Features:</h1>

//       <div className=" pt-7 flex flex-col gap-[14rem] ">
//         {projectOpened?.features.map((feautre, index) => (
//           <motion.div
//             initial={"small"}
//             whileInView={"normal"}
//             viewport={{ amount: 0.5 }}
//             transition={{ duration: 0.5 }}
//             variants={{
//               small: { opacity: 0, y: 80, scale: 0.8 },
//               normal: {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//               },
//             }}
//           >
//             <div
//               className={`flex ${
//                 index % 2 !== 0 && "flex-row-reverse"
//               } items-center justify-around flex-wrap gap-[2rem]`}
//             >
//               <h1 className="text-4xl font-medium underline decoration-[#DC4492] text-center">
//                 {feautre?.title}
//               </h1>
//               <img
//                 src={feautre?.photoUrl}
//                 alt="Project Photo"
//                 className="sm:min-w-[700px] min-h-[200px] min-w-[320px] w-[60vw]  border-4 border-[#DC4492] rounded-lg"
//               />
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProjectDetails;

import React, { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  const projectDetails = [
    {
      id: "devPortfolio",
      name: "Dev Portfolio",
      liveUrl: "https://dev-final-portfolio.netlify.app/",
      description:
        "This is my portfolio website where all my projects are listed. It is a showcase of my frontend skills.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "JavaScript",
      ],
      category: "Frontend Development",
      duration: "2 weeks",
      features: [
        {
          photoUrl: "../assets/portfolio-hero.avif",
          title: "Modern Hero Section",
        },
        {
          photoUrl: "../assets/portfolio-projects.avif",
          title: "Interactive Projects Gallery",
        },
      ],
    },
     {
      id: "tradingAi",
      name: "Ai Powered Trading Website",
      liveUrl: "https://dev-fintrade-app.netlify.app/",
      description:
        "A trading website to buy/sell stocks with powers of AI Chatbot.",
      techStack: ["Frontend- React+Next", "Backend- Node+MongoDB+PostgreSQL",],
      category: "Full Stack Application",
      duration: "Ongoing",
      features: [
        {
          photoUrl: "../assets/products-page.webp",
          title: "FinnHub Products",
        },
        {
          photoUrl: "../assets/product-details.webp",
          title: "Product + News Sentiment Details",
        },
        // {
        //   photoUrl: "../assets/form_creation.avif",
        //   title: "Dynamic Form Creation",
        // },
        // {
        //   photoUrl: "../assets/All_templates.avif",
        //   title: "Certificate Templates",
        // },
        // {
        //   photoUrl: "../assets/dynamic-placement-drag.avif",
        //   title: "Drag & Drop Field Placement",
        // },
      ],
    },
    {
      id: "youtubeDev",
      name: "Youtube Dev",
      liveUrl: "https://dev-yt.netlify.app/",
      description:
        "This is a responsive clone of Youtube which uses Live Youtube Data Api and have features like search functionality, debouncing of 200ms, colour theme switch.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Redux",
      ],
      category: "Full Stack Application",
      duration: "3 weeks",
      disclaimer:
        "Some functionalities may not work due to CORS policy as the api is the original Youtube Data Api",
      features: [
        {
          photoUrl: "../assets/light-theme-yt-dev.avif",
          title: "Light Theme",
        },
        {
          photoUrl: "../assets/dark-theme-yt-dev.avif",
          title: "Dark Theme",
        },
        {
          photoUrl: "../assets/caching-search-results-yt-dev.avif",
          title: "Intelligent Caching",
        },
        {
          photoUrl: "../assets/country-wise-yt-dev.avif",
          title: "Choose Your Country",
        },
        {
          photoUrl: "../assets/country-wise-results-yt-dev.avif",
          title: "Country-wise Popular Videos",
        },
        {
          photoUrl: "../assets/filters-yt-dev.avif",
          title: "Advanced Filters",
        },
        {
          photoUrl: "../assets/nested-comments-yt-dev.avif",
          title: "n-level Nested Comments",
        },
        {
          photoUrl: "../assets/pagination-yt-dev.avif",
          title: "Pagination in Comments",
        },
      ],
    },
    {
      id: "netflixAi",
      name: "Netflix AI",
      liveUrl: "https://dev-ntflx.netlify.app/",
      description:
        "This is a kind of Netflix(responsive) which has feature of AI search powered by OpenAI GPT for intelligent movie recommendations.",
      techStack: [
        "React",
        "Tailwind CSS",
        "Gemini Ai",
        "TMDB API",
      ],
      category: "AI-Powered Application",
      duration: "2 weeks",
      features: [
        {
          photoUrl: "../assets/NetflixAi_Ai_Authentication_firebase.avif",
          title: "Google Firebase Authentication",
        },
        {
          photoUrl: "../assets/NetflixAi_Ai_search.avif",
          title: "AI-Powered Search",
        },
        {
          photoUrl: "../assets/NetflixAi_pagination.avif",
          title: "Smooth Pagination",
        },
        {
          photoUrl: "../assets/NetflixAi_movie_search.avif",
          title: "Movie Search with Debouncing",
        },
      ],
    },
   
  ];

  const projectOpened = projectDetails.find((project) => project.id === id);

  if (!projectOpened) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl  mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 py-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Back Button */}
        <motion.button
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 mb-8 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
          variants={itemVariants}
          whileHover={{ x: -5 }}
        >
          <svg
            className="w-5 h-5 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Portfolio
        </motion.button>

        {/* Header Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-medium">
              {projectOpened.category}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl  mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {projectOpened.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Duration: {projectOpened.duration}
            </div>
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-700/50 mb-12"
          variants={itemVariants}
        >
          {/* Description */}
          <motion.div className="mb-10" variants={itemVariants}>
            <h2 className="text-3xl  mb-6 text-cyan-400">Overview</h2>
            <p className="text-xl leading-relaxed text-gray-300">
              {projectOpened.description}
            </p>
          </motion.div>

          {/* Live URL */}
          <motion.div className="mb-10" variants={itemVariants}>
            <h2 className="text-3xl  mb-6 text-blue-400">Live Demo</h2>
            <div className="flex items-center justify-center sm:justify-start flex-wrap gap-4">
              <a
                href={projectOpened.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit Live Site
                <svg
                  className="w-4 h-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
              <div className="text-gray-400 text-sm text-center sm:text-left">
                {projectOpened.liveUrl}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack */}
          {projectOpened.techStack && (
            <motion.div className="mb-10" variants={itemVariants}>
              <h2 className="text-3xl  mb-6 text-purple-400">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {projectOpened.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 font-medium hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Disclaimer */}
          {projectOpened.disclaimer && (
            <motion.div className="mb-10" variants={itemVariants}>
              <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-r-lg">
                <h3 className="text-xl  mb-3 text-yellow-400 flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  Important Note
                </h3>
                <p className="text-gray-300">{projectOpened.disclaimer}</p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Features Section */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl  mb-12 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent p-2">
            Key Features
          </h2>

          <div className="space-y-24">
            {projectOpened.features.map((feature, index) => (
              <motion.div
                key={index}
                className={`flex ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                } flex-col items-center gap-12 lg:gap-16`}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3, once: true }}
                variants={featureVariants}
              >
                {/* Feature Text */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 mb-4">
                    <span className="text-cyan-400 text-sm font-medium">
                      Feature {index + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl  mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent p-2">
                    {feature.title}
                  </h3>
                </div>

                {/* Feature Image */}
                <div className="flex-1 max-w-2xl">
                  <motion.div
                    className="relative group"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700">
                      <img
                        src={feature.photoUrl}
                        alt={feature.title}
                        className="w-full h-auto transition-transform duration-300 scale-120 group-hover:scale-100"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-24 p-8 bg-gradient-to-r from-cyan-900/20 to-purple-900/20 rounded-3xl border border-cyan-500/20"
          variants={itemVariants}
        >
          <h3 className="text-2xl  mb-4">
            Interested in this project?
          </h3>
          <p className="text-gray-400 mb-6">
            Check out the live demo or explore more projects in my portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={projectOpened.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              View Live Demo
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;

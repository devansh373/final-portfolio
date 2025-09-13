import { motion } from "framer-motion";
import { useState } from "react";

const Resume = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section
      id="resume"
      className="w-full min-h-screen flex flex-col justify-center items-center relative py-20"
    >
     

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-[10%] w-16 h-16 opacity-20"
        animate={floatingAnimation}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-cyan-400">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-[15%] w-12 h-12 opacity-30"
        animate={{
          rotate: [0, 360],
          transition: { duration: 8, repeat: Infinity, ease: "linear" },
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-blue-400">
          <polygon points="50,0 61,35 96,35 69,57 79,91 50,70 21,91 31,57 4,35 39,35" />
        </svg>
      </motion.div>

      <motion.div
        className="flex flex-col items-center gap-12 max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Main Title */}
        <motion.div className="text-center" variants={itemVariants}>
          <h1 className="text-6xl md:text-8xl  bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent tracking-wider mb-4">
            RESUME
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 text-center max-w-2xl leading-relaxed"
          variants={itemVariants}
        >
          Explore my professional journey, skills, and achievements in a
          comprehensive overview
        </motion.p>

        {/* Resume Preview Card */}
        <motion.div
          className="relative group cursor-pointer"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        //   onClick={() => setIsResumeModalOpen(true)}
        >
          {/* Glowing border effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>

          {/* Resume preview container */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Resume thumbnail with professional photo */}
              <div className="flex-shrink-0">
                <div className="w-48 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-gray-700 p-4 shadow-2xl overflow-hidden">
                  {/* Professional photo section */}
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-cyan-400 shadow-lg">
                      <img
                        src="/assets/fotor-20241111204342.webp"
                        alt="Professional headshot"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name placeholder */}
                    <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded w-3/4"></div>

                    {/* Contact info mockup */}
                    <div className="space-y-1 w-full">
                      <div className="h-1.5 bg-gray-600 rounded w-full"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-5/6"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-4/6"></div>
                    </div>

                    {/* Experience section mockup */}
                    <div className="space-y-1 pt-2 w-full">
                      <div className="h-2 bg-blue-500 rounded w-1/2"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-full"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-3/4"></div>
                    </div>

                    {/* Skills section mockup */}
                    <div className="space-y-1 pt-2 w-full">
                      <div className="h-2 bg-purple-500 rounded w-1/3"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-4/5"></div>
                      <div className="h-1.5 bg-gray-600 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Resume info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl  text-white mb-4">My Resume</h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Complete overview of my experience, education, skills, and
                  projects. Download or view online to learn more about my
                  professional background.
                </p>

                {/* Stats */}
                {/* <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">3+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">15+</div>
                    <div className="text-sm text-gray-400">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">10+</div>
                    <div className="text-sm text-gray-400">Technologies</div>
                  </div>
                </div> */}
                 
                {/*<div className="text-sm text-cyan-300 font-medium">
                  Click to view full resume →
                </div> */}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="https://drive.google.com/file/d/1fK-X6abx5N0NZsmV9M-qq3DaYbQF9F5_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-xl text-white font-semibold 
             bg-gradient-to-r from-cyan-600 to-blue-700 
             hover:from-cyan-500 hover:to-blue-600 
             hover:shadow-lg hover:shadow-cyan-500/25 
             transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Online
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </motion.a>

        </motion.div>

        
        
      </motion.div>

      
      {isResumeModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        //   onClick={() => setIsResumeModalOpen(false)}
        >
          <motion.div
            className="bg-gray-900 rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            // onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-white">Resume Preview</h3>
              <button
                onClick={() => setIsResumeModalOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

           
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Resume;

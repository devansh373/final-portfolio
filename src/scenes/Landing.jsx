import { useState } from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { quadSVG } from "../constants/quadSVG";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { circleSVG } from "../constants/circleSVG";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-[#2CBCE9]  before:z-[-1]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { x: -80, y: -80 },
                visible: { x: 0, y: 0 },
              }}
            >
              <img
                alt="profile"
                className=" transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px] rounded-t-full"
                // src="assets/profile-image.png"
                src="assets/avatar-1_upscayl_4x_realesrgan-x4plus.webp"
                // src="assets/avatar-1_upscayl_4x_realesrgan-x4plus.png"
                // src="assets/avatar-1.png"
                // src="assets/IMG-20240227-WA0007-fotor-20250531211634.png"
                // src="assets/fotor-20241111204342.png"
                // src="assets/IMG-20240227-WA0007.jpg"
                // src="./assets/ReadyPlayerMe-Avatar.jpeg"
                // src="./assets/ReadyPlayerMe-Avatar.png"
              />
            </motion.div>
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-full"
            src="assets/avatar-1_upscayl_4x_realesrgan-x4plus.webp"
            // src="assets/avatar-1_upscayl_4x_realesrgan-x4plus.png"
            // src="assets/avatar-1.png"
            // src="assets/IMG-20240227-WA0007-fotor-20250531211634.png"
            // src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-4xl font-playfair z-10 text-center md:text-start flex flex-wrap gap-1">
            <span className="p-1 sm:py-4">Devansh {""}</span>
            <span
              className="sm:font-semibold sm:text-[#010026] z-20 bg-[url('../assets/brush.webp')] bg-no-repeat bg-cover bg-center
                 before:z-[-1]  p-4 sm:py-4"
            >
              <span className="text">Raghav</span>
            </span>
          </p>

          <p className="mt-10 mb-7 text-lg text-center md:text-start">
            Frontend Developer proficient in React
          </p>
        </motion.div>
        
        {/* {quadSVG} */}

        {/* CALL TO ACTIONS */}
        {/* {circleSVG} */}
        <motion.div
          className="flex w-[250px] mt-5 justify-center md:justify-start move-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-[linear-gradient(90deg,_#24CBFF_14.53%,_#FC59FF_69.36%,_#FFBD0C_117.73%)] text-[#010026] rounded-sm py-3.5 px-10.5 font-medium 
              hover:bg-[#2CBCE9] hover:text-white transition duration-500 move-left-contact-btn"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-[linear-gradient(90deg,_#24CBFF_14.53%,_#FC59FF_69.36%,_#FFBD0C_117.73%)] py-0.5 pr-0.5 lets-talk"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-[#010026] hover:text-[#DC4492] transition duration-500 w-full h-full flex items-center justify-center py-3 px-10 font-playfair ">
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

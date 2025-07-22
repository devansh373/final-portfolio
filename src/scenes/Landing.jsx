import SocialMediaIcons from "../components/SocialMediaIcons";

import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

import AnimatedLetters from "../components/LetterAnimation";
import { rocketSvg } from "../constants/rocketSvg";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id="home"
      className="md:justify-around md:items-center gap-6 !md:h-[100vh] py-10  relative bg-transparent overflow-hidden"
    >
      {/* MAIN TEXT */}
      <div
        className={`z-30 basis-2/5 ${
          isAboveLarge ? "mt-12" : "mt-[5rem]"
        } md:mt-32 w-full overflow-hidden`}
      >
        {/* HEADINGS */}

        <div
          className={`${
            isAboveLarge ? "text-8xl" : "text-5xl"
          } font-playfair z-10 text-center  flex flex-wrap justify-center items-center gap-1 w-full`}
        >
          <AnimatedLetters text={"DEVANSH"} classParam={"nameText"} />

          <AnimatedLetters text={"RAGHAV"} />
        </div>
        {isAboveLarge ? (
          <>
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
              <p
                className={`mt-10 mb-7 text-lg text-center md:text-start ${
                  isAboveLarge ? "pl-[3.7rem]" : "pl-0"
                }`}
              >
                Frontend Developer
              </p>
            </motion.div>

            <motion.div
              className="flex w-[250px] mt-5 justify-center md:justify-start move-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: "33vw" },
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
              className="flex w-fit mt-5 justify-center md:justify-start"
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: "70vw" },
              }}
            >
              <div className=" !w-fit pl-[3.7rem]">
                <SocialMediaIcons />
              </div>
            </motion.div>
          </>
        ) : (
          <>
            <p
              className={`mt-10 mb-7 text-lg text-center md:text-start  ${isAboveLarge ? "pl-[3.7rem]" : "pl-0"}`}
            >
              Frontend Developer
            </p>

            <div className=" w-fit move-left">
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
            </div>
            <div className=" !w-fit pl-[3.7rem]">
              <SocialMediaIcons />
            </div>
          </>
        )}
      </div>

      {rocketSvg}
    </section>
  );
};

export default Landing;

import { Typewriter } from "react-simple-typewriter";
import LineGradient from "../components/LineGradient";
import { jsSvg, reactSvg, tailwindSvg } from "../constants/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const colors=["#2CBCE9","#DC4492","#FDCC49"]
  const [ccolor,setCcolor]=useState(colors[0])
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="lg:flex lg:justify-between md:gap-16 mt-32">
        <motion.div
          className="lg:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-[#DC4492]">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <span className="mt-10 text-2xl mb-7">I often code in </span>
          <span style={{ color: `${ccolor}`, fontSize:"1.8rem" }}>
          
          <Typewriter
            words={['React', 'Javascript', 'Tailwind']}
            loop={25}
            cursor
            cursorStyle='|'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onDelay={()=>setCcolor(colors[Math.floor(Math.random()*3)])}
          />
        </span>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-[#2CBCE9] before:z-[-1]"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.5 }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { x: -40, y: -40 },
                  visible: { x: 0, y: 0 },
                }}
              >
                <img
                  alt="skills"
                  className="z-10"
                  src="assets/skills-image.png"
                />
              </motion.div>
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="lg:flex lg:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="lg:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl w-[90px]">
                {reactSvg}
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3">React</p>
            </div>
            <div className="w-1/2  h-32 bg-[#2CBCE9] absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
            React is a JavaScript library used to build fast and interactive single-page applications (SPAs). It uses JSX — a syntax extension that lets you write HTML-like code in JavaScript — and follows a component-based architecture.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="lg:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-2xl w-[90px]">
                {jsSvg}
              </p>
              <p className="font-playfair font-semibold text-3xl mt-2 ">
                Javascript
              </p>
            </div>
            <div className="w-1/2  h-32 bg-[#FDAD95] absolute right-0 lg:-right-15 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
            JavaScript is the language that makes websites interactive. It helps add things like buttons that work, forms that react, and content that changes without refreshing the page.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="lg:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl w-[90px]">
                {tailwindSvg}
              </p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Tailwind
              </p>
            </div>
            <div className="w-1/2  h-32 bg-[#44a8b3] absolute right-0 lg:-right-10 top-0 z-[-1]" />
          </div>
          <p className="mt-5 text-justify">
           Tailwind is a CSS tool that lets you style your website by using ready-made classes. Instead of writing custom CSS, you just add class names to your HTML and quickly build clean designs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

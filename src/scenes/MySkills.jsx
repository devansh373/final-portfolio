import { Typewriter } from "react-simple-typewriter";
import LineGradient from "../components/LineGradient";
import { jsSvg, reactSvg, tailwindSvg } from "../constants/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { htmlSvg } from "../constants/htmlSvg";
import { cssSvg } from "../constants/cssSvg";
import { reduxSvg } from "../constants/reduxSvg";
import { apiSvg } from "../constants/apiSvg";
import { svgLogoSvg } from "../constants/svgLogoSvg";
import { parallaxBgCirclesArray } from "../constants/parallaxBgSvg";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const svgRefs = useRef([]);
  const svgCircleRefs = useRef([]);
  const parallaxFactors = useRef([]);
  const svgLocations = useRef([]);
  const svgWrapRef = useRef();
  const colors = ["#2CBCE9", "#DC4492", "#FDCC49"];
  const [ccolor, setCcolor] = useState(colors[0]);
  const svgs = [
    reactSvg,
    jsSvg,
    tailwindSvg,
    htmlSvg,
    cssSvg,
    reduxSvg,
    apiSvg,
    svgLogoSvg,
  ];

  useEffect(() => {
    // window.onmousemove

    const handleMouseMove = (e) => {
      if (!svgWrapRef.current) return;

      const rect = svgWrapRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate how far the mouse is from the center
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Parallax factor — lower means slower movement
      // const factor = -0.1;

      svgRefs.current?.forEach((svg, index) => {
        if (svg) {
          const factor = parallaxFactors.current[index] || -0.1;
          svg.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
        }
      });
      svgCircleRefs.current?.forEach((svg, index) => {
        if (svg) {
          const factor = parallaxFactors.current[index] || -0.1;
          svg.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
        }
      });
    };

    console.log(svgWrapRef.current);
    svgWrapRef.current &&
      svgWrapRef.current.addEventListener("mousemove", handleMouseMove);
    return () =>
      svgWrapRef.current &&
      svgWrapRef.current.removeEventListener("mousemove", handleMouseMove);
  }, [isAboveLarge]);
  // console.log("render")
  return (
    <section
      id="skills"
      className="pt-10 pb-24 relative h-[200vh] overflow-hidden"
    >
      {/* HEADER AND IMAGE SECTION */}
      <div className="sm:h-[80vh] h-[30vh] lg:justify-between md:gap-16 mt-32 relative">
        {/* <div className="mt-16 md:mt-0 relative"> */}
        {isAboveLarge ? (
          // <div
          //   className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
          //   before:w-full before:h-full before:border-2 before:border-[#2CBCE9] before:z-[-1]"
          // >
          //   <motion.div
          //     initial="hidden"
          //     whileInView="visible"
          //     viewport={{ amount: 0.5 }}
          //     transition={{ duration: 1 }}
          //     variants={{
          //       hidden: { x: -40, y: -40 },
          //       visible: { x: 0, y: 0 },
          //     }}
          //   >
          // </motion.div>
          // </div>
          // bg-[url(../assets/ooorganize.svg)]
          <div
            className={`w-[100%] h-[70vh] left-0  absolute overflow-hidden skills-parallax-wrap z-[5]`}
            ref={svgWrapRef}
          >
            {svgs.map((svg, index) => {
              if (!parallaxFactors.current[index]) {
                parallaxFactors.current[index] = -0.05 - Math.random() * 0.15;
              }
              if (!svgLocations.current[index]) {
                svgLocations.current[index] = {
                  left: Math.floor(Math.random() * 900),
                  top: Math.floor(Math.random() * 300),
                };
              }
              return (
                <>
                  <span
                    key={index}
                    ref={(el) => (svgRefs.current[index] = el)}
                    style={{
                      left: `${svgLocations.current[index].left}px`,
                      top: `${svgLocations.current[index].top}px`,
                      // left: `${Math.floor(Math.random() * 400)}px`,
                      // top: `${Math.floor(Math.random() * 300)}px`,
                    }}
                    className={`w-[100px] h-[50px] absolute move-svg`}
                  >
                    {svg}
                  </span>
                </>
              );
            })}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:svgjs="http://svgjs.dev/svgjs"
              viewBox="0 0 800 800"
              className="w-full"
            >
              {parallaxBgCirclesArray.map((circle, index) => (
                <g
                  stroke-width="3.5"
                  stroke="hsla(182, 78%, 45%, 1.00)"
                  fill="none"
                  ref={(el) => (svgCircleRefs.current[index] = el)}
                >
                  {circle}
                </g>
              ))}
            </svg>
            {/* <span className="w-[100px] h-[50px] absolute">{reactSvg}</span>
              <span className="w-[100px] h-[50px] absolute">{jsSvg}</span>
              <span className="w-[100px] h-[50px] absolute">{tailwindSvg}</span> */}
          </div>
        ) : (
          <img alt="skills" className="z-10" src="assets/skills-image.webp" />
        )}
      </div>
      <motion.div
        className="lg:w-1/3 mt-[0vh]"
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
        <span style={{ color: `${ccolor}`, fontSize: "1.8rem" }}>
          <Typewriter
            words={["React", "Javascript", "Tailwind"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onDelay={() => setCcolor(colors[Math.floor(Math.random() * 3)])}
          />
        </span>
      </motion.div>

      {/* SKILLS */}
      <div className="lg:flex lg:justify-between  gap-32 pt-[10vh]">
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
            React is a JavaScript library used to build fast and interactive
            single-page applications (SPAs). It uses JSX — a syntax extension
            that lets you write HTML-like code in JavaScript — and follows a
            component-based architecture.
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
            JavaScript is the language that makes websites interactive. It helps
            add things like buttons that work, forms that react, and content
            that changes without refreshing the page.
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
            Tailwind is a CSS tool that lets you style your website by using
            ready-made classes. Instead of writing custom CSS, you just add
            class names to your HTML and quickly build clean designs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;

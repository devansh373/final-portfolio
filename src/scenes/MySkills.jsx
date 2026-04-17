import { Typewriter } from "react-simple-typewriter";
import LineGradient from "../components/LineGradient";
import { reactSvg } from "../constants/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  nextjsSvg,
  typescriptSvg,
  nodejsSvg,
  postgresSvg,
  geminiSvg,
  langchainSvg,
  dockerSvg,
} from "../constants/techIcons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const svgRefs = useRef([]);
  
  const colors = [
    "#000000", // Next.js
    "#3178c6", // TypeScript
    "#61dafb", // React
    "#339933", // Node.js
    "#336791", // PostgreSQL
    "#8e75ff", // Gemini
    "#00d28a", // LangChain
    "#2496ed", // Docker
  ];

  const [ccolor, setCcolor] = useState(colors[0]);
  const [hover, setHover] = useState(true);
  const [count, setCount] = useState(0);

  const svgs = [
    nextjsSvg,
    typescriptSvg,
    reactSvg,
    nodejsSvg,
    postgresSvg,
    geminiSvg,
    langchainSvg,
    dockerSvg,
  ];

  const skillsRef = useRef(null);
  const setSvgRef = (el, index) => {
    if (el) svgRefs.current[index] = el;
  };

  useEffect(() => {
    if (!isAboveLarge) return;
    if (hover) {
      gsap.fromTo(".circle", { scale: 0 }, { scale: 1 });
    } else {
      gsap.to(".circle", { scale: 0 });
    }
  }, [hover, isAboveLarge]);

  const rotateRef = useRef(0);

  useEffect(() => {
    if (!isAboveLarge) return;

    gsap.to(".circle", {
      rotateZ: rotateRef.current + "deg",
    });
    gsap.to(".anti-rotate", {
      rotateZ: Math.abs(rotateRef.current) + "deg",
    });
    rotateRef.current -= 45;
  }, [ccolor, isAboveLarge]);

  useEffect(() => {
    if (isAboveLarge) return;
    if (!skillsRef.current || !svgRefs.current.length) return;

    svgRefs.current.forEach((el, i) => {
      if (el) gsap.set(el, { x: i % 2 === 0 ? "-100vw" : "100vw" });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
      },
    });

    svgRefs.current.forEach((svg) => {
      if (svg) tl.to(svg, { x: 0, duration: 1 });
    });
  }, [isAboveLarge]);

  const categories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3 / SCSS"],
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React.js", "Next.js", "Redux Toolkit", "Framer Motion", "GSAP", "Tailwind CSS", "Material UI"],
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "REST APIs", "PostgreSQL", "MongoDB", "Prisma ORM", "Auth (JWT/OAuth2)"],
    },
    {
      title: "AI & Data",
      skills: ["Gemini API", "LangChain", "Vector Databases (ChromaDB)", "Data Viz (Chart.js)", "Data Processing"],
    },
    {
      title: "Tools & DevOps",
      skills: ["Git / GitHub", "Docker", "Postman", "Razorpay Payment Gateway"],
    },
  ];

  return (
    <>
      {isAboveLarge ? (
        <section
          id="skills"
          style={{
            background: `radial-gradient(circle at center 47%, ${ccolor}20 0%,${ccolor}40 10%,${ccolor}50 15%,${ccolor}60 20%,${ccolor}70 25%, transparent 30%)`,
          }}
          className="pt-10 relative h-[150vh]"
        >
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
            <p className="font-playfair font-semibold text-4xl mb-2">
              MY <span className="text-[#DC4492]">SKILLS</span>
            </p>
            <LineGradient width="w-1/3" />
            <span className="mt-10 text-2xl mb-7">I often use </span>
            <span style={{ color: `${ccolor}`, fontSize: "1.8rem" }}>
              <Typewriter
                words={[
                  "<Next.js",
                  "<TypeScript",
                  "<React",
                  "<Node.js",
                  "<PostgreSQL",
                  "<Gemini API",
                  "<LangChain",
                  "<Docker",
                ]}
                loop={0}
                cursor
                cursorStyle="\>"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onDelay={() => {
                  setCcolor(colors[count]);
                  if (count < colors.length - 1) setCount((prev) => prev + 1);
                  else setCount(0);
                }}
              />
            </span>
          </motion.div>

          <div className="relative w-full h-screen flex justify-center items-center">
            <h1
              className={`text-2xl p-2 rounded-[50%] w-[100px] h-[100px] flex justify-center items-center cursor-pointer transition-colors duration-500`}
              style={{ 
                backgroundColor: ccolor,
                color: (ccolor === "#000000" || ccolor === "#3178c6" || ccolor === "#339933" || ccolor === "#336791" || ccolor === "#2496ed") ? "white" : "black"
              }}
            >
              SKILLS
            </h1>
            <div className="circle absolute w-[500px] h-[500px] rounded-full scale-100">
              <span className="anti-rotate absolute left-[220px] top-0 w-[70px]">
                {svgs[0]}
              </span>
              <span className="anti-rotate absolute left-[370px] top-[50px] w-[70px]">
                {svgs[1]}
              </span>
              <span className="anti-rotate absolute left-[430px] top-[210px] w-[70px]">
                {svgs[2]}
              </span>
              <span className="anti-rotate absolute left-[380px] top-[370px] w-[70px]">
                {svgs[3]}
              </span>
              <span className="anti-rotate absolute left-[220px] top-[430px] w-[70px]">
                {svgs[4]}
              </span>
              <span className="anti-rotate absolute left-[70px] top-[370px] w-[75px]">
                {svgs[5]}
              </span>
              <span className="anti-rotate absolute left-[10px] top-[220px] w-[80px]">
                {svgs[6]}
              </span>
              <span className="anti-rotate absolute left-[70px] top-[70px] w-[70px]">
                {svgs[7]}
              </span>
            </div>
            <div
              className="absolute highlight-skill w-[120px] h-[110px] rounded-full top-[80px] left-[45%]"
              style={{ boxShadow: `0px 0px 33px 1px ${ccolor} inset` }}
            ></div>
          </div>
        </section>
      ) : (
        <section ref={skillsRef} id="skills" className="min-h-screen py-20 px-6 bg-transparent">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-center mb-16"
          >
            <p className="font-playfair font-semibold text-4xl mb-2">
              MY <span className="text-[#DC4492]">SKILLS</span>
            </p>
            <LineGradient width="mx-auto w-1/3" />
          </motion.div>

          <div className="grid grid-cols-1 gap-12 max-w-2xl mx-auto">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50"
              >
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 bg-gray-800/60 rounded-lg text-sm text-gray-200 border border-gray-700/30 hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-8 mt-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
             {[svgs[0], svgs[1], svgs[4], svgs[5]].map((svg, i) => (
                <div key={i} className="w-10">
                  {svg}
                </div>
             ))}
          </div>
        </section>
      )}
    </>
  );
};

export default MySkills;

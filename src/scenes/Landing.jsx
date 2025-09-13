// import SocialMediaIcons from "../components/SocialMediaIcons";

// import useMediaQuery from "../hooks/useMediaQuery";
// import { motion } from "framer-motion";
// import AnchorLink from "react-anchor-link-smooth-scroll";

// import AnimatedLetters from "../components/LetterAnimation";
// import { rocketSvg } from "../constants/rocketSvg";
// import { useEffect, useRef } from "react";

// const Landing = ({ setSelectedPage }) => {
//   const isAboveLarge = useMediaQuery("(min-width: 1060px)");
//   const ref1 = useRef();
//   const ref2 = useRef();

//   useEffect(() => {
//     if (!ref1.current || !ref2.current) return;

//     const handleMouseMove = (e) => {
//       const rect = ref1.current.getBoundingClientRect();
//       const circle = ref2.current.getBoundingClientRect();
//       // const offsetX = e.clientX;
//       // const offsetY = e.clientY;
//       const offsetX = e.clientX - (rect.left + circle.width / 2);
//       const offsetY = e.clientY - (rect.top + circle.height / 2);
//       // console.log(e.clientX, rect.left, ref2.current.width);
//       // ref2.current.style.transform=`translate(${offsetX}px,${offsetY}px)`
//       ref2.current.style.left = `${offsetX}px`;
//       ref2.current.style.top = `${offsetY}px`;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <section
//       id="home"
//       className="md:justify-around md:items-center gap-6 !md:h-[100vh] py-10  relative bg-transparent overflow-hidden"
//     >
//       {/* MAIN TEXT */}
//       <div
//         className={`z-30 basis-2/5 ${
//           isAboveLarge ? "mt-12" : "mt-[5rem]"
//         } md:mt-32 w-full overflow-hidden`}
//       >
//         {/* HEADINGS */}

//         <div
//           className={`${
//             isAboveLarge ? "text-8xl" : "text-5xl"
//           } font-playfair z-10 text-center  flex flex-wrap justify-center items-center gap-1 w-full   `}
//         >
//           <span
//             className=" overflow-hidden relative z-1 cursor-none  "
//             ref={ref1}
//           >
//             <AnimatedLetters
//               text={"DEVANSH"}
//               classParam={"nameText "}
//               isDevansh={true}
//             />

//             <AnimatedLetters text={"RAGHAV"} />
//             <div
//               className="absolute w-15 h-15 bg-cyan-500 rounded-full -z-1 top-0 left-0 transition duration-100 ease-in"
//               ref={ref2}
//             ></div>
//           </span>
//         </div>
//         {isAboveLarge ? (
//           <div className="flex items-center justify-center mt-15">
//             <div className=" p-1 min-w-50 min-h-50  max-w-2xl rounded-2xl overflow-hidden  animatedBorder z-5 relative">
//               <div className="bg-transparent backdrop-blur-3xl min-w-full min-h-full p-4 rounded-2xl border border-white/20">
//                 <h3 className="text-center text-2xl bg-clip-text  bg-white underline">
//                   Software Developer
//                 </h3>
//                 <p className=" mt-4 text-justify">
//                   Passionate Software Developer specializing in React with a
//                   strong understanding of Javascript ,building robust web
//                   applications with data management using Redux and smooth user
//                   experience using Tailwind CSS and animation libraries like
//                   Framer Motion and GSAP. Creating dynamic UI by fetching data
//                   through RESTful APIs. I thrive on tackling new challenges and
//                   delivering innovative solutions.
//                 </p>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <>
//             <p
//               className={`mt-10 mb-7 text-lg text-center md:text-start  ${
//                 isAboveLarge ? "pl-[3.7rem]" : "pl-0"
//               }`}
//             >
//               Frontend Developer
//             </p>

//             <div className=" w-fit move-left">
//               <AnchorLink
//                 className="bg-[linear-gradient(90deg,_#24CBFF_14.53%,_#FC59FF_69.36%,_#FFBD0C_117.73%)] text-[#010026] rounded-sm py-3.5 px-10.5 font-medium
//               hover:bg-[#2CBCE9] hover:text-white transition duration-500 move-left-contact-btn"
//                 onClick={() => setSelectedPage("contact")}
//                 href="#contact"
//               >
//                 Contact Me
//               </AnchorLink>
//               <AnchorLink
//                 className="rounded-r-sm bg-[linear-gradient(90deg,_#24CBFF_14.53%,_#FC59FF_69.36%,_#FFBD0C_117.73%)] py-0.5 pr-0.5 lets-talk"
//                 onClick={() => setSelectedPage("contact")}
//                 href="#contact"
//               >
//                 <div className="bg-[#010026] hover:text-[#DC4492] transition duration-500 w-full h-full flex items-center justify-center py-3 px-10 font-playfair ">
//                   Let's talk.
//                 </div>
//               </AnchorLink>
//             </div>
//             <div className=" !w-fit pl-[3.7rem]">
//               <SocialMediaIcons />
//             </div>
//           </>
//         )}
//       </div>

//       {/* {rocketSvg} */}
//     </section>
//   );
// };

// export default Landing;

import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import AnimatedLetters from "../components/LetterAnimation";
import { rocketSvg } from "../constants/rocketSvg";
import { useEffect, useLayoutEffect, useRef } from "react";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();

  useLayoutEffect(() => {
    // if(!isAboveLarge) return
    // if (!ref1.current || !ref2.current || !ref3.current || !ref4.current)
    //   return;

    const handleMouseMove = (e) => {
      const rect = ref1.current.getBoundingClientRect();
      const circle = ref2.current.getBoundingClientRect();
      const rect2 = ref3.current.getBoundingClientRect();
      const circle2 = ref2.current.getBoundingClientRect();

      // console.log(rect,rect2,circle,circle2)
      const offsetX1 = e.clientX - (rect.left + circle.width / 2);
      const offsetY1 = e.clientY - (rect.top + circle.height / 2);
      const offsetX2 = e.clientX - (rect2.left + circle2.width / 2);
      const offsetY2 = e.clientY - (rect2.top + circle2.height / 2);

      ref2.current.style.left = `${offsetX1}px`;
      ref2.current.style.top = `${offsetY1}px`;
      ref4.current.style.left = `${offsetX2}px`;
      ref4.current.style.top = `${offsetY2}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="md:justify-around md:items-center gap-6 !md:h-[100vh] py-20 relative bg-transparent overflow-hidden"
    >
      {/* SVG ANIMATIONS */}
      <FloatingParticles />
      {/* {isAboveLarge && <OrbitingElements />} */}
      {/* <OrbitingElements /> */}
      <CodeBrackets />
      <MorphingBlob />
      <PulseWave />
      <GeometricSpinner />

      {/* MAIN TEXT */}
      <div
        className={`z-30 basis-2/5 ${
          isAboveLarge ? "pt-12" : "pt-[5rem]"
        } md:pt-32 w-full overflow-hidden relative`}
      >
        {/* HEADINGS */}
        <div
          className={`${
            isAboveLarge ? "text-8xl" : "text-3xl"
          } font-playfair z-10 text-center flex flex-wrap justify-center items-center gap-1 w-full`}
        >
          <span className="overflow-hidden relative z-1 cursor-none p-2" ref={ref1}>
            <AnimatedLetters
              text={"DEVANSH"}
              classParam={"nameText "}
              isDevansh={true}
            />
            <AnimatedLetters text={"RAGHAV"} />
            {isAboveLarge && (
              <div
                className="absolute w-15 h-15 bg-cyan-500 rounded-full -z-1 top-0 left-0 transition duration-100 ease-in"
                ref={ref2}
              ></div>
            )}
          </span>
        </div>

        <div className="flex items-center justify-center mt-15 relative z-5">
          <div
            className=" min-w-50 min-h-50 max-w-2xl rounded-2xl   z-5  backdrop-blur-3xl relative overflow-hidden cursor-none"
            ref={ref3}
          >
            {isAboveLarge && (
              <div
                className="absolute w-15 h-15 bg-black/10 shadow-[0px_0px_50px_4px_white] rounded-full -z-2 top-0 left-0 transition duration-100 ease-in"
                ref={ref4}
              ></div>
            )}
            <div className=" backdrop-blur-[100px] min-w-full  min-h-full p-4 rounded-2xl border border-white z-4">
              <h3 className="text-center text-2xl bg-clip-text bg-white underline">
                Software Developer
              </h3>
              <p className="mt-2 text-justify">
                Passionate Software Developer specializing in React with a
                strong understanding of Javascript ,building robust web
                applications with data management using Redux and smooth user
                experience using Tailwind CSS and animation libraries like
                Framer Motion and GSAP. Creating dynamic UI by fetching data
                through RESTful APIs. I thrive on tackling new challenges and
                delivering innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration for larger screens */}
      {isAboveLarge && (
        <div className="absolute top-20 right-20 pointer-events-none opacity-20">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
              <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#24CBFF" />
                <stop offset="50%" stopColor="#FC59FF" />
                <stop offset="100%" stopColor="#FFBD0C" />
              </linearGradient>
            </defs>
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="url(#bgGrad)"
              strokeWidth="2"
            >
              <animate
                attributeName="stroke-dasharray"
                values="0,500;250,500;500,500"
                dur="8s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}
    </section>
  );
};

export default Landing;

// SVG Animation Components
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <svg
      className="absolute top-10 left-10 opacity-60"
      width="60"
      height="60"
      viewBox="0 0 60 60"
    >
      <circle cx="30" cy="30" r="4" fill="#24CBFF" className="animate-bounce">
        <animate
          attributeName="cy"
          values="30;20;30"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    <svg
      className="absolute top-32 right-20 opacity-50"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <polygon
        points="20,5 30,15 30,25 20,35 10,25 10,15"
        fill="#FC59FF"
        className="animate-spin"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 20 20;360 20 20"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#FC59FF;#24CBFF;#FFBD0C;#FC59FF"
          dur="6s"
          repeatCount="indefinite"
        />
      </polygon>
    </svg>

    <svg
      className="absolute bottom-20 left-1/4 opacity-40"
      width="50"
      height="50"
      viewBox="0 0 50 50"
    >
      <circle cx="25" cy="25" r="3" fill="#FFBD0C">
        <animate
          attributeName="r"
          values="3;8;3"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>

    <svg
      className="absolute top-1/3 right-10 opacity-60"
      width="35"
      height="35"
      viewBox="0 0 35 35"
    >
      <rect x="12" y="12" width="10" height="10" fill="#24CBFF" rx="2">
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 17 17;45 17 17;0 17 17"
          dur="5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#24CBFF;#FC59FF;#24CBFF"
          dur="5s"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
  </div>
);

const OrbitingElements = () => (
  <div className="absolute top-20 right-32 pointer-events-none opacity-70">
    <svg width="120" height="120" viewBox="0 0 120 120">
      <circle cx="60" cy="60" r="6" fill="#FFBD0C" opacity="0.9" />
      <g style={{ transformOrigin: "60px 60px" }}>
        <circle cx="95" cy="60" r="4" fill="#24CBFF">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 60 60;360 60 60"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g style={{ transformOrigin: "60px 60px" }}>
        <circle cx="25" cy="60" r="3" fill="#FC59FF">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 60 60;-360 60 60"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g style={{ transformOrigin: "60px 60px" }}>
        <circle cx="60" cy="25" r="5" fill="#FFBD0C">
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 60 60;360 60 60"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  </div>
);

const CodeBrackets = () => (
  <div className="absolute bottom-10 right-10 pointer-events-none opacity-50">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <path
        d="M20,20 L10,20 L10,40 L10,60 L20,60"
        fill="none"
        stroke="#24CBFF"
        strokeWidth="3"
        opacity="0.8"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,200;60,200;120,200"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
      <path
        d="M60,20 L70,20 L70,40 L70,60 L60,60"
        fill="none"
        stroke="#FC59FF"
        strokeWidth="3"
        opacity="0.8"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,200;60,200;120,200"
          dur="4s"
          repeatCount="indefinite"
          begin="1s"
        />
      </path>
      <circle cx="40" cy="40" r="2" fill="#FFBD0C">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  </div>
);

const MorphingBlob = () => (
  <div className="absolute top-1/2 left-10 pointer-events-none opacity-30">
    <svg width="100" height="100" viewBox="0 0 100 100">
      <path fill="#FC59FF" opacity="0.6">
        <animate
          attributeName="d"
          values="M50,10 Q80,40 50,70 Q20,40 50,10 Z;
                           M60,15 Q85,35 60,65 Q15,45 60,15 Z;
                           M40,20 Q75,50 40,80 Q25,50 40,20 Z;
                           M50,10 Q80,40 50,70 Q20,40 50,10 Z"
          dur="8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill"
          values="#FC59FF;#24CBFF;#FFBD0C;#FC59FF"
          dur="8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

const PulseWave = () => (
  <div className="absolute bottom-32 left-20 pointer-events-none opacity-60">
    <svg width="80" height="80" viewBox="0 0 80 80">
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="none"
        stroke="#24CBFF"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          values="5;30"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="none"
        stroke="#FC59FF"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          values="5;30"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
        <animate
          attributeName="opacity"
          values="1;0"
          dur="3s"
          repeatCount="indefinite"
          begin="1s"
        />
      </circle>
      <circle
        cx="40"
        cy="40"
        r="5"
        fill="none"
        stroke="#FFBD0C"
        strokeWidth="2"
      >
        <animate
          attributeName="r"
          values="5;30"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
        <animate
          attributeName="opacity"
          values="1;0"
          dur="3s"
          repeatCount="indefinite"
          begin="2s"
        />
      </circle>
      <circle cx="40" cy="40" r="6" fill="#fff" />
    </svg>
  </div>
);

const GeometricSpinner = () => (
  <div className="absolute top-1/4 left-1/3 pointer-events-none opacity-40">
    <svg width="60" height="60" viewBox="0 0 60 60">
      <g style={{ transformOrigin: "30px 30px" }}>
        <polygon
          points="30,10 40,20 40,40 30,50 20,40 20,20"
          fill="none"
          stroke="#24CBFF"
          strokeWidth="2"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;360 30 30"
            dur="6s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1;1.3;1"
            dur="3s"
            repeatCount="indefinite"
            additive="sum"
          />
        </polygon>
        <polygon
          points="30,15 35,20 35,35 30,40 25,35 25,20"
          fill="#FC59FF"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0 30 30;-360 30 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </polygon>
        <circle cx="30" cy="30" r="4" fill="#fff" />
      </g>
    </svg>
  </div>
);

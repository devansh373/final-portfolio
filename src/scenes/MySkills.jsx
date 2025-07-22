import { Typewriter } from "react-simple-typewriter";
import LineGradient from "../components/LineGradient";
import { jsSvg, reactSvg, tailwindSvg } from "../constants/constants";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { htmlSvg } from "../constants/htmlSvg";
import { cssSvg } from "../constants/cssSvg";
import { reduxSvg } from "../constants/reduxSvg";
import { apiSvg } from "../constants/apiSvg";
import { svgLogoSvg } from "../constants/svgLogoSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const svgRefs = useRef([]);
  // const svgCircleRefs = useRef([]);
  // const parallaxFactors = useRef([]);
  // const svgLocations = useRef([]);
  // const svgWrapRef = useRef();
  // const colors2 = ["#2CBCE9", "purple", "cyan", "red", "#FE7743", "#447D9B"];
  const colors = [
    "#44a8b3",
    "#764abc",
    "#ffca28",
    "#e44d26",
    "#1172b8",
    "#44a8b3",
    "#005bff",
    "#ffb13b",
  ];
  const [ccolor, setCcolor] = useState(colors[0]);
  const [hover, setHover] = useState(true);
  const [count, setCount] = useState(0);
  // const canvasRef = useRef();
  const svgs = [
    reactSvg,
    reduxSvg,
    jsSvg,
    htmlSvg,
    cssSvg,
    tailwindSvg,
    apiSvg,
    svgLogoSvg,
  ];

  const skillsRef = useRef(null);
  const setSvgRef = (el, index) => {
    if (el) svgRefs.current[index] = el;
  };
  useEffect(() => {
    if (!isAboveLarge) return;
    if (hover)
      gsap.fromTo(
        ".circle",
        {
          scale: 0,
        },
        {
          scale: 1,
        }
      );
    else {
      gsap.to(".circle", {
        scale: 0,
      });
    }

    // console.log("hover: ",hover)
    // return ()=>console.log("hover: ",hover)
  }, [hover]);
  const rotateRef = useRef(0);

  useEffect(() => {
    if (!isAboveLarge) return;

    console.log(count);
  }, [count]);
  useEffect(() => {
    if (!isAboveLarge) return;

    console.log(rotateRef.current);
    gsap.to(".circle", {
      rotateZ: rotateRef.current + "deg",
    });
    gsap.to(
      ".anti-rotate",
      {
        rotateZ: Math.abs(rotateRef.current) + "deg",
        // duration:0.5
      },
      2
    );
    rotateRef.current -= 45;
  }, [ccolor,isAboveLarge]);
  console.log("hover: ", hover);

  // useLayoutEffect(() => {
  //   if (isAboveLarge) return;
  //   if (!skillsRef.current || svgRefs.current.length === 0) return;

  //   // Set initial position using GSAP
  //   svgRefs.current.forEach((svg) => {
  //     gsap.set(svg, { x: "-100vw" });
  //   });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: skillsRef.current,
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true,
  //       markers: true,
  //     },
  //   });

  //   svgRefs.current.forEach((svg) => {
  //     tl.to(svg, { x: 0 }); // use "<" to animate all at the same time
  //   });
  // }, []);

  useEffect(() => {
    if (isAboveLarge) return;
    if (!skillsRef.current || svgRefs.current.length === 0) return;

    // gsap.set(svgRefs.current, { x: "-100vw" });
    svgRefs.current.forEach((el, i) => {
      gsap.set(el, { x: i % 2 === 0 ? "-100vw" : "100vw" });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 30%",
        end: "bottom 30%",
        scrub: true,
        // markers: true,
      },
    });

    svgRefs.current.forEach((svg) => {
      tl.to(svg, { x: 0, duration: 1 });
    });

    // return () => ScrollTrigger.kill();
  }, []);
  //     useEffect(()=>{

  // if(!svgRefs.current) return;
  // svgRefs.current.forEach(svgref=>svgref.classList.add("moveSvgLeft"))
  //       const t1 = gsap.timeline({scrollTrigger:{
  //         trigger:skillsRef.current,
  //         start:"top 30%",
  //         end:"bottom bottom",
  //         scrub:true,
  //         markers:true,
  //         // pin:true
  //       }})
  //       svgRefs.current.forEach(svg=>{
  //         t1.to(svg,{
  //           x:0,
  //           opacity:1
  //         })
  //       })
  //     },[skillsRef.current])

  // useEffect(()=>{
  //   const t1 = gsap.timeline({
  //     scrollTrigger:{
  //       trigger:"#skills",
  //       start:"top top",
  //       end:"bottom bottom",
  //       markers:true,
  //       pin:true,
  //       scrub:1.5,
  //     }
  //   })

  //   t1.fromTo(".skills-svg",{
  //     strokeDasharray:1000,
  //     strokeDashoffset:1000,
  //   },{
  //     strokeDashoffset:0
  //   })
  // },[])
  return (
    <>
      {isAboveLarge ? (
        <section
          id="skills"
          style={{
            background: `radial-gradient(circle at center 47%, ${ccolor}20 0%,${ccolor}40 10%,${ccolor}50 15%,${ccolor}60 20%,${ccolor}70 25%, transparent 30%)`,
            //  "background-size": "100% 100%",
            //  "backgroundPosition": "50% 60%",
            //  "background-position": "50% 60%",
            // backgroundRepeat: "no-repeat",
          }}
          className="pt-10  relative h-[150vh] "
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
                  "<React",
                  "<Redux",
                  "<Javascript",
                  "<HTML",
                  "<CSS",
                  "<Tailwind",
                  "<Rest API",
                  "<Svg",
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
          {/* HEADER AND IMAGE SECTION */}

          {/* SKILLS */}

          <div className=" relative w-full h-screen flex justify-center items-center ">
            <h1
              className={` text-2xl p-2  ${
                ccolor === "cyan" && "text-black font-medium"
              } rounded-[50%] w-[80px] h-[80px] flex justify-center items-center  cursor-pointer`}
              style={{ backgroundColor: ccolor }}
              // onMouseOver={() => setHover(true)}
              // onMouseOut={() => setHover(false)}
            >
              SKILLS
            </h1>
            {/* <div className="w-[102vw] skills-div  absolute top-0 -left-[14%] -z-1 overflow-hidden">
          <svg width="1700"  viewBox="0 0 2412 475" fill="none" xmlns="http://www.w3.org/2000/svg">
<path className=".skills-svg" d="M5.34167 228.06C3.26218 226.674 1.18268 225.288 1.84434 223.88C8.10641 210.561 33.9505 209.156 60.8475 203.926C74.2189 201.325 97.3017 202.854 130.574 209.093C163.846 215.331 206.822 227.808 238.665 240.474C270.509 253.14 289.918 265.617 309.62 282.789C351.078 318.921 370.808 347.747 375.345 358.554C386.773 385.774 389.734 405.763 383.464 423.008C378.511 436.629 365.998 449.243 345.728 459.084C308.867 476.98 276.475 473.819 255.711 470.332C251.825 469.68 248.37 469.618 245.545 466.499C231.345 450.821 231.566 428.406 230.421 389.61C229.833 369.694 244.778 359.72 249.315 354.479C253.851 349.239 260.868 347.789 273.051 346.749C295.763 344.811 317.539 341.487 376.227 353.964C427.644 364.895 521.561 391.395 577.056 404.25C632.552 417.106 646.415 417.106 660.142 418.492C673.869 419.878 687.039 422.651 728.828 424.079C770.618 425.508 840.627 425.508 891.596 422.735C942.565 419.962 972.371 414.417 1012.33 402.202C1052.3 389.988 1101.51 371.273 1141.42 354.006C1181.33 336.74 1210.44 321.491 1235.49 304.97C1260.54 288.45 1280.64 271.121 1300.7 252.489C1320.76 233.858 1340.17 214.449 1353.98 199.252C1367.79 184.055 1375.42 173.657 1387.66 154.091C1399.91 134.525 1416.54 106.105 1426.5 86.2659C1441.21 56.9443 1442.09 42.5439 1441.05 36.61C1437.96 19.0187 1408.56 15.9095 1379.92 5.44904C1352.41 -4.5981 1328.01 8.15869 1319.62 16.8968C1313.58 23.1808 1311.85 43.048 1317.05 76.2255C1322.63 111.825 1350.29 133.454 1376.05 156.108C1393.81 171.734 1425.37 190.545 1457.37 207.139C1489.37 223.733 1521.95 236.21 1585.17 248.53C1648.4 260.849 1741.28 272.633 1864.69 277.317C1988.09 282.001 2139.2 279.229 2220.51 276.76C2308.75 272.213 2318.67 270.07 2317.32 270.07C2313.21 270.07 2302.12 270.07 2290.69 270.07" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>

          
        </div> */}
            <div className="circle absolute w-[500px] h-[500px] rounded-full scale-100 ">
              <span className="anti-rotate absolute left-[220px] top-0 w-[70px] ">
                {svgs[0]}
              </span>
              <span className="anti-rotate absolute left-[370px] top-[50px] w-[70px] ">
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
              <span className="anti-rotate absolute left-[70px] top-[370px] w-[70px]">
                {svgs[5]}{" "}
              </span>
              <span className="anti-rotate absolute left-[10px] top-[220px] w-[80px]">
                {svgs[6]}
              </span>
              <span className="anti-rotate absolute left-[70px] top-[70px] w-[70px]">
                {svgs[7]}
              </span>
            </div>
            {/* <span className="absolute left-[20%] top-[490px]">js</span> */}
            <div
              className=" absolute highlight-skill w-[120px] h-[110px] rounded-full  top-[80px] left-[45%]"
              style={{ boxShadow: `0px 0px 33px 1px ${ccolor} inset` }}
            ></div>
          </div>
        </section>
      ) : (
        <div ref={skillsRef} className="h-auto flex flex-col items-center overflow-hidden">
          <h1 className="text-center text-3xl underline p-5">Tech stack</h1>
          <div className="relative flex flex-col gap-[12rem] mt-[5rem]">
            {svgs.map((svg, index) => (
              <div
                key={index}
                className="overflow-hidden w-[70px]"
                ref={(el) => setSvgRef(el, index)}
              >
                {svg}
              </div>
            ))}
          </div>
        </div>
        // <div  ref={skillsRef} className=" h-[300vh]">
        //   <h1 className="text-center text-3xl underline p-5">Tech stack</h1>
        //   <div className="relative flex flex-col gap-[12rem] mt-[5rem]">
        //     {svgs.map((svg,index) => (
        //       <div className=" overflow-hidden opacity-0 translate-x-[-100vw] w-[70px]" ref={(el=>svgRefs.current[index]=el)}>{svg}</div>
        //     ))}
        //   </div>
        // </div>
      )}
    </>
  );
};

export default MySkills;

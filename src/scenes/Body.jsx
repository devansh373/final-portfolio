import Navbar from "./Navbar";
import Landing from "./Landing";
import DotGroup from "./DotGroup";
import MySkills from "./MySkills";
import LineGradient from "../components/LineGradient";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import useMediaQuery from "../hooks/useMediaQuery";

import { motion } from "framer-motion";

import {  useRef, useEffect, useState  } from "react";
import CanvasElement from "./CanvasElement";

import ProjectSection from "./ProjectSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ScrollToTop from "../ScrollToTop";
// import ProgressBarSvg from "../components/ProgressBar";




gsap.registerPlugin(ScrollTrigger);






function Body() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  
  const [projectSection, setProjectSection] = useState(false);
  const [setResumeShow, setSetResumeShow] = useState(false);
  const horizontalPinRef = useRef();
  const horizontalPinRef2 = useRef();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.scrollTo(0, 0);
    };
  }, []);

  

  useEffect(() => {
    if(!isDesktop) return;
    if (!horizontalPinRef.current || !horizontalPinRef2.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDiv",
        start: "top top",
        end: "bottom top",
        // end: ()=>"+=3000",
        // end: () => `+=${window.innerWidth}`,
        scrub: 1.5,
        pin: true,
        // markers: true,
      },
    });

   

    tl.to(horizontalPinRef.current, {
      x: "-54vw",
      
    });
    tl.to(
      ".rocket",
      {
        
        x: "100%",
        
      },
      0
    );
    tl.to(
      ".rocket2",
      {
       
        x: "-100vw",
       
      },
      0
    );
    tl.fromTo(
      horizontalPinRef2.current,
      {
        x: "-100vw",
       
      },
      {
        x: "35vw",
      },
      0
    );
    

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".resume",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        // markers:true,
        pin: true,
      },
    });

    t2.to(
      ".boomerang-1",
      
      {
        left: "21%",
        top: "20%",
       
        opacity: 1,
       
      }
    );

    t2.to(
      ".boomerang-2",
      
      {
        left: "75%",
        top: "20%",
        
        opacity: 1,
        
      },
      0
    );
    gsap.to(".boomerang-1", {
      rotateZ: 360,
      duration: 2,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".boomerang-2", {
      rotateZ: 360,
      duration: 2,
      ease: "none",
      repeat: -1,
    });

    
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isDesktop]);
//   useEffect(() => {
//     let t;
//   if (isDesktop) {
//     t = setTimeout(() => {
//       ScrollTrigger.refresh();
//     }, 100); // wait for layout paint
//   }
//   return ()=>clearTimeout(t)
// }, [isDesktop]);


  return (
    <>
      {projectSection ? (
        <>
          <ScrollToTop />
          <div
            id="scroll-section"
            style={{
              height: "1000vh",
              background: "transparent",
              position: "relative",
            }}
          ></div>
          

          <div className="!fixed top-0 left-0 w-screen h-screen one stars-bg">
            <button
              onClick={() => setProjectSection(false)}
              className="absolute text-white text-lg cursor-pointer p-1 m-2 z-10 bg-cyan-600 w-[80px] rounded-lg hover:bg-cyan-700"
            >
              Exit
            </button>
           
            <CanvasElement />

            
          </div>
          
        </>
      ) : (
        <div className="app h-screen text-white px-5">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            setProjectSection={setProjectSection}
          />
          <div className="w-full mx-auto md:h-[100vh] z-5 overflow-hidden">
            {isDesktop && (
              <DotGroup
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            )}
            <motion.div onViewportEnter={() => setSelectedPage("home")}>
              <Landing setSelectedPage={setSelectedPage} />
            </motion.div>
          </div>
          <LineGradient />
          
          
          <div className={` h-[100vh] w-full scrollDiv overflow-hidden relative ${isDesktop ? "block":"hidden"}`}>
            <div
          
              className="w-full h-[75px] bg-white absolute left-0 top-[95px] block z-2 will-change-transform rocket"
            >
              <img
                src="assets/airplane.gif"
                alt=""
                className="w-[100px] h-[100px]  rotate-z-[45deg] z-2 "
              />
            </div>
            <div
              
              className="w-full h-[175px] bg-white absolute left-0 top-[225px] block z-2 will-change-transform rocket2"
            >
              <img
                src="assets/airplane.gif"
                alt=""
                className="w-[100px] h-[100px]  rotate-z-[225deg] z-2 absolute right-0 top-[50px]"
              />
            </div>
            <div
              className=" w-[300vw] bg-white h-[90vh] whitespace-nowrap  "
              
            >
              

              <p
                ref={horizontalPinRef}
                className="text-black pt-[7rem] h-[300px] text-5xl ml-[20%] w-full gradientText"
              >
                Don't forget to Download My Resume
              </p>
              <p
                ref={horizontalPinRef2}
                className="text-black h-[300px] text-5xl translate-x-[100vw] w-full gradientText"
              >
                Let's have a Talk !
              </p>
              
            </div>
          </div>
          
          

          <div className={`resume ${isDesktop?"h-[250vh] gap-[9rem]":"h-screen gap-[4rem]"} flex flex-col justify-center items-center relative`}>
            

            <span className="absolute w-[60px] top-[15%] left-[35%] -z-1 boomerang-1 opacity-0">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="white"
                    stroke="red"
                    d="M215.2 24.13c-.505.02-1.22.143-2.165.378h-.002c-20.152 5-132.385 52.22-134.738 94.728-2.353 42.51 81.636 64.576 125.324 75.315 43.687 10.74 60.602-8.53 49.423-32.36-11.18-23.83-84.137-28.537-94.14-62.958-9.532-32.807 66.59-75.5 56.298-75.1zm87.593 10.12c-5.402.094-10.28 1.096-14.447 3.203v-.002c-38.1 19.27-15.002 102.82-2.352 145.92 12.65 43.1 37.95 47.953 52.953 26.478s-17.8-86.492 7.06-112.38c24.86-25.887 106.792 23.83 92.378 8.827-12.838-13.362-91.602-72.812-135.592-72.045zm143.68 138.74c-35.658.516-83.103 48.973-109.29 76.278-31.04 32.36-22.655 56.044 3.528 58.25 26.184 2.205 66.342-58.103 101.202-49.424 34.86 8.68 32.51 104.143 38.244 84.136 5.736-20.005 20.444-140.91-15.297-164.156-5.586-3.63-11.784-5.18-18.387-5.084zm-415.54 2.336c-.443.013-.92.873-1.472 2.748-5.884 20.004-21.034 140.77 14.71 164.158 35.744 23.39 97.082-38.244 128.266-70.605 31.183-32.36 22.653-56.483-3.53-58.838-26.182-2.356-66.34 58.102-101.2 49.423-31.594-7.865-32.503-87.007-36.774-86.887zm223.71 44.438c-22.517 0-40.77 18.232-40.77 40.722 0 22.49 18.253 40.72 40.77 40.72 22.516 0 40.77-18.23 40.77-40.72s-18.254-40.722-40.77-40.722zm-64.108 78.61c-7.227.118-14.24 4.564-19.865 12.673-15.003 21.623 17.36 86.64-7.65 112.38-25.006 25.742-106.79-24.418-92.375-9.413 14.414 15.005 111.938 88.697 150.037 69.43 38.098-19.27 14.858-103.41 2.353-146.508-7.815-26.938-20.455-38.76-32.5-38.563zm93.24 24.34c-27.113-.31-36.284 16.04-27.2 35.403 11.18 23.83 83.696 28.39 93.552 62.957 9.856 34.567-74.283 80.314-54.13 75.313 20.15-5 132.384-52.66 134.737-95.317 2.353-42.656-81.785-64.574-125.326-75.312-8.164-2.014-15.376-2.974-21.633-3.045z"
                  ></path>
                </g>
              </svg>
            </span>
            <span className="absolute w-[60px] top-[15%] left-[55%] -z-1 boomerang-2 opacity-0">
              <svg
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    fill="#4709d7"
                    d="M215.2 24.13c-.505.02-1.22.143-2.165.378h-.002c-20.152 5-132.385 52.22-134.738 94.728-2.353 42.51 81.636 64.576 125.324 75.315 43.687 10.74 60.602-8.53 49.423-32.36-11.18-23.83-84.137-28.537-94.14-62.958-9.532-32.807 66.59-75.5 56.298-75.1zm87.593 10.12c-5.402.094-10.28 1.096-14.447 3.203v-.002c-38.1 19.27-15.002 102.82-2.352 145.92 12.65 43.1 37.95 47.953 52.953 26.478s-17.8-86.492 7.06-112.38c24.86-25.887 106.792 23.83 92.378 8.827-12.838-13.362-91.602-72.812-135.592-72.045zm143.68 138.74c-35.658.516-83.103 48.973-109.29 76.278-31.04 32.36-22.655 56.044 3.528 58.25 26.184 2.205 66.342-58.103 101.202-49.424 34.86 8.68 32.51 104.143 38.244 84.136 5.736-20.005 20.444-140.91-15.297-164.156-5.586-3.63-11.784-5.18-18.387-5.084zm-415.54 2.336c-.443.013-.92.873-1.472 2.748-5.884 20.004-21.034 140.77 14.71 164.158 35.744 23.39 97.082-38.244 128.266-70.605 31.183-32.36 22.653-56.483-3.53-58.838-26.182-2.356-66.34 58.102-101.2 49.423-31.594-7.865-32.503-87.007-36.774-86.887zm223.71 44.438c-22.517 0-40.77 18.232-40.77 40.722 0 22.49 18.253 40.72 40.77 40.72 22.516 0 40.77-18.23 40.77-40.72s-18.254-40.722-40.77-40.722zm-64.108 78.61c-7.227.118-14.24 4.564-19.865 12.673-15.003 21.623 17.36 86.64-7.65 112.38-25.006 25.742-106.79-24.418-92.375-9.413 14.414 15.005 111.938 88.697 150.037 69.43 38.098-19.27 14.858-103.41 2.353-146.508-7.815-26.938-20.455-38.76-32.5-38.563zm93.24 24.34c-27.113-.31-36.284 16.04-27.2 35.403 11.18 23.83 83.696 28.39 93.552 62.957 9.856 34.567-74.283 80.314-54.13 75.313 20.15-5 132.384-52.66 134.737-95.317 2.353-42.656-81.785-64.574-125.326-75.312-8.164-2.014-15.376-2.974-21.633-3.045z"
                  ></path>
                </g>
              </svg>
            </span>
            <h1
              href=""
              className={`${isDesktop ?"text-8xl":"text-6xl"} text-center block  bg-cyan-900 rounded-lg resumeText backdrop-blur-xl`}
            >
              Resume{" "}
             
            </h1>

            <img
              src="assets/devansh373_page-0001.jpg"
              alt=""
              className={`w-[75vw] max-w-[840px] ${isDesktop?"h-[150vh]":"h-[60vh]"}`}
              onClick={()=>{setResumeShow(true)}}
            />
            <a
              href="https://drive.google.com/file/d/1ySbBX2yYQ_Xfhcv-1x6ukEVy3ZHd9xLS/view?usp=sharing"
              target="_blank"
              className="group flex items-center gap-2 px-5 py-2.5 rounded-xl text-white font-semibold 
             bg-gradient-to-r from-cyan-700 to-blue-800 
             hover:from-blue-800 hover:to-cyan-700 
             hover:shadow-cyan-500/40 shadow-lg transition-all duration-300"
            >
              Link
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 6.75H6.75v10.5h10.5V6.75zM9 15h6V9H9v6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9l3-3m0 0v4m0-4h-4"
                />
              </svg>
            </a>

           
          </div>
          

          <div className="w-full mx-auto xl:h-auto z-5 relative h-auto">
            <motion.div onViewportEnter={() => setSelectedPage("skills")}>
              <MySkills />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-full flex justify-center z-5 relative">
            
            <motion.div>
              {isDesktop ? (
                <ProjectSection setProjectSection={setProjectSection} />
              ) : (
                <Projects />
              )}
            </motion.div>
          </div>
          <LineGradient />

          <LineGradient />
          <div className="w-full mx-auto xl:h-full z-5 relative">
            <motion.div onViewportEnter={() => setSelectedPage("contact")}>
              <Contact />
            </motion.div>
          </div>
          <Footer />
          {/* <ProgressBarSvg /> */}
        </div>
      )}
    </>
  );
}

export default Body;

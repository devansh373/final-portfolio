import Navbar from "./Navbar";
import Landing from "./Landing";
import DotGroup from "./DotGroup";
import MySkills from "./MySkills";
import LineGradient from "../components/LineGradient";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume"; // Import the new Resume component
import useMediaQuery from "../hooks/useMediaQuery";

import { motion } from "framer-motion";

import { useRef, useEffect, useState, Suspense, lazy } from "react";

import ProjectSection from "./ProjectSection";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from "./Experience";

gsap.registerPlugin(ScrollTrigger);

function Body() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");

  const [projectSection, setProjectSection] = useState(false);

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
    if (!isDesktop) return;
    if (!horizontalPinRef.current || !horizontalPinRef2.current) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scrollDiv",
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
        pin: true,
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
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [isDesktop]);

  return (
    <>
      <div className="app h-screen text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.3)_70%,rgba(0,0,0,0.6)_100%)]"></div>
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          setProjectSection={setProjectSection}
        />

        {/* Landing Section */}
        <div className="w-full mx-auto md:h-[100vh] z-5 overflow-hidden px-4 md:px-0">
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

        {/* Horizontal Scroll Section */}
        <div
          className={`h-[100vh] w-full scrollDiv overflow-hidden relative ${
            isDesktop ? "block" : "hidden"
          }`}
        >
          <div className="w-full h-[75px] bg-white absolute left-0 top-[95px] block z-2 will-change-transform rocket">
            <img
              src="assets/airplane.gif"
              alt=""
              className="w-[100px] h-[100px] rotate-z-[45deg] z-2"
            />
          </div>
          <div className="w-full h-[175px] bg-white absolute left-0 top-[225px] block z-2 will-change-transform rocket2">
            <img
              src="assets/airplane.gif"
              alt=""
              className="w-[100px] h-[100px] rotate-z-[225deg] z-2 absolute right-0 top-[50px]"
            />
          </div>
          <div className="w-[300vw] bg-white h-[90vh] whitespace-nowrap">
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

        {/* Experience Section */}
        <div className="w-full mx-auto z-5 relative px-4 md:px-0">
          <motion.div onViewportEnter={() => setSelectedPage("experience")}>
            <Experience />
          </motion.div>
        </div>

        {/* Resume Section - NEW */}
        <LineGradient />
        <div className="w-full mx-auto z-5 relative px-4 md:px-0">
          <motion.div onViewportEnter={() => setSelectedPage("resume")}>
            <Resume />
          </motion.div>
        </div>

        {/* Skills Section */}
        <LineGradient />
        <div className="w-full mx-auto xl:h-auto z-5 relative h-auto px-4 md:px-8">
          <motion.div onViewportEnter={() => setSelectedPage("skills")}>
            <MySkills />
          </motion.div>
        </div>

        {/* Projects Section */}
        <LineGradient />
        <div className="w-full flex justify-center z-5 relative">
          <motion.div onViewportEnter={() => setSelectedPage("projects")}>
            <Projects />
            {isDesktop && (
              <ProjectSection/>
            )}
          </motion.div>
        </div>

        {/* Contact Section */}
        <LineGradient />
        <div className="w-full mx-auto xl:h-full z-5 relative px-4 ">
          <motion.div onViewportEnter={() => setSelectedPage("contact")}>
            <Contact />
          </motion.div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Body;

import Navbar from "./Navbar";
import Landing from "./Landing";
import DotGroup from "./DotGroup";
import MySkills from "./MySkills";
import LineGradient from "../components/LineGradient";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useState } from "react";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";

import ProjectDetails from "./ProjectDetails";

function Body() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
        <div className="app bg-[#010026] text-white ">
          <Navbar
            isTopOfPage={isTopOfPage}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <div className="w-5/6 mx-auto md:h-full">
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
          <div className="w-5/6 mx-auto xl:h-full ">
            <motion.div onViewportEnter={() => setSelectedPage("skills")}>
              <MySkills />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto">
            <motion.div onViewportEnter={() => setSelectedPage("projects")}>
              <Projects />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto xl:h-full">
            <motion.div onViewportEnter={() => setSelectedPage("testimonials")}>
              <Testimonials />
            </motion.div>
          </div>
          <LineGradient />
          <div className="w-5/6 mx-auto xl:h-full">
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

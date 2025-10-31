


import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";

const Footer = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: false, margin: "-300px" });
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");


  return (
    <footer
      ref={ref}
      className={`${isAboveLarge?"h-99":"h-[80vh]"} bg-cyan-950 pt-10 relative overflow-hidden z-5 footer`}
    >
      <div className="w-10/12 mx-auto">
      <SocialMediaIcons/>
        <div className="md:flex justify-center items-start md:justify-between text-center ">
          <p className="font-playfair font-semibold text-3xl text-[#FDCC49]">
            Devansh Raghav
          </p>

          <motion.img
            src="/assets/You_dropped_this.png"
            alt="avatar"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "backOut" }}
            className={`w-[350px] ${isAboveLarge?"mt-[-140px]":"mt-[20px]"} dropShadowClass`}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer
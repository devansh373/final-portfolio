import SocialMediaIcons from "../components/SocialMediaIcons";
import { quadSVG } from "../constants/quadSVG";
import {motion} from 'framer-motion'

const Footer = () => {
  return (
    <footer className="h-64 bg-[#922d61] pt-10 relative overflow-hidden">
      
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-3xl text-[#FDCC49]">
            Devansh Raghav
          </p>
          <p className="font-playfair text-lg text-[#FDCC49]">
            Thanks for visiting my portfolio!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

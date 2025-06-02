import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";


const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href="https://www.linkedin.com/in/devansh-raghav-b14690231/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin/>
        {/* <img alt="linkedin-link" src="../assets/linkedin.png" /> */}
      </a>
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href="https://github.com/devansh373/"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub/>
        {/* <img alt="twitter-link" src="../assets/twitter.png" /> */}
      </a>
      
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href="https://www.frontendmentor.io/profile/devansh373"
        target="_blank"
        rel="noreferrer"
      >
        <SiFrontendmentor/>
        {/* <img alt="instagram-link" src="../assets/instagram.png" /> */}
      </a>
    </div>
  );
};

export default SocialMediaIcons;

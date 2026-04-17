import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiFrontendmentor } from "react-icons/si";


const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href={import.meta.env.VITE_LINKEDIN_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin/>
      </a>
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href={import.meta.env.VITE_GITHUB_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub/>
      </a>
      
      <a
        className="text-white hover:text-amber-600 transition duration-500 text-3xl"
        href={import.meta.env.VITE_FRONTEND_MENTOR_LINK}
        target="_blank"
        rel="noreferrer"
      >
        <SiFrontendmentor/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;

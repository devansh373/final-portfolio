import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
// import { burstSvg } from "../constants/burstSvg";
// import { circleSVG } from "../constants/circleSVG";
import { useGhostThemeContext } from "../context/ghostThemeContext";
import { useNavigate } from "react-router";
// import ProgressBarSvg from "../components/ProgressBar";

// import {burst} from "../assets/bbburst"

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-amber-500" : ""
      } hover:text-amber-500 transition duration-500  ${
        !isDesktop && " backdrop-blur-2xl border border-amber-50 rounded-lg w-full p-2"
      }`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
  setProjectSection,
}) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isHoveredSticker, setIsHoveredSticker] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { ghostTheme, toggleGhostTheme } = useGhostThemeContext();
  const navigate = useNavigate()

  // const navbarBackground = ;

  return (
    <nav
      className={`
       z-40 w-[83vw] fixed top-0 left-[8vw] py-2 bg-gradient-to-b from-black to-black/50 bg-transparent navbar rounded-b-3xl`}
    >
      {/* <ProgressBarSvg /> */}
      <div className=" flex items-center justify-between mx-auto w-5/6">
        {/* <span className="absolute -left-[8%] rounded-full overflow-hidden w-[200px] h-[200px]"> */}
        {/* <img className="w-[200px]" src="../assets/bbburst.svg" alt="" /> */}
        {/* {burstSvg} */}
        {/* </span> */}
        <span className=" relative font-playfair   w-[80px] h-[80px] rounded-full  perspective-avatar">
          <img
            src={"assets/f8ea8427-5542-420f-bfdd-3ba911a6d422.webp"}
            // src={`assets/${
            //   isHoveredSticker
            //     ? "f8ea8427-5542-420f-bfdd-3ba911a6d422.webp"
            //     : "f8ea8427-5542-420f-bfdd-3ba911a6d422_upscayl_2x_realesrgan-x4plus.png"
            // }`}
            alt=""
            // className="w-full h-auto"
            onMouseOver={() => setIsHoveredSticker(true)}
            onMouseOut={() => setIsHoveredSticker(false)}
          />
          <span className="hide-bottom-0f-avatar"></span>
          
        </span>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              setProjectSection={setProjectSection}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* {isDesktop && ( */}
            <button
              // onClick={() => setProjectSection(true)}
              // onClick={() => navigate("/projectsPage")}
              onClick={() => window.open("/projectsPage", "_blank")}
              className=" cursor-pointer hover:text-amber-500 transition duration-500"
            >
              Projects
              {/* {ghostTheme ? "Normal Theme" : "Ghost Theme"} */}
            </button>
            {/* )} */}
          </div>
        ) : (
          <button
            className="rounded-full bg-[#DC4492] p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            <img alt="menu-icon" src="../assets/menu-icon.svg" />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed top-0 right-[-40px] bg-cyan-700 z-30 blurDiv h-[100vh]  w-[70vw]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col items-start gap-10 w-full text-center p-4 text-2xl text-[#010026]">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              {/* <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              /> */}
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

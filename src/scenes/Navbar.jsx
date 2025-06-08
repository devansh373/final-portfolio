import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { burstSvg } from "../constants/burstSvg";
import { circleSVG } from "../constants/circleSVG";
// import {burst} from "../assets/bbburst"

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-amber-500" : ""
      } hover:text-amber-500 transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isHoveredSticker, setIsHoveredSticker] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // const navbarBackground = ;

  return (
    <nav
      className={`${
        isTopOfPage ? "" : "bg-red-500"
      } z-40 w-full fixed top-0 py-2 bg-gradient-to-b from-black to-black/50 bg-transparent`}
    >
      <div className=" flex items-center justify-between mx-auto w-5/6">
        {/* <span className="absolute -left-[8%] rounded-full overflow-hidden w-[200px] h-[200px]"> */}
        {/* <img className="w-[200px]" src="../assets/bbburst.svg" alt="" /> */}
        {/* {burstSvg} */}
        {/* </span> */}
        <span className=" relative font-playfair   w-[80px] h-[80px] rounded-full  perspective-avatar">
          <img
            src={`assets/${
              isHoveredSticker
                ? "f8ea8427-5542-420f-bfdd-3ba911a6d422.webp"
                : "f8ea8427-5542-420f-bfdd-3ba911a6d422_upscayl_2x_realesrgan-x4plus.png"
            }`}
            alt=""
            // className="w-full h-auto"
            onMouseOver={() => setIsHoveredSticker(true)}
            onMouseOut={() => setIsHoveredSticker(false)}
          />
          <span className="hide-bottom-0f-avatar"></span>
          <span className="burst-svg">
            {/* <svg
              width="134"
              height="134"
              viewBox="0 0 134 134"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path className="path-1"
                d="M67.5 7.5C101.201 7.5 128.5 34.1506 128.5 67C128.5 99.8494 101.201 126.5 67.5 126.5C33.7989 126.5 6.5 99.8494 6.5 67C6.5 34.1506 33.7989 7.5 67.5 7.5Z"
                stroke="#7AE7FF"
              />
              <path className="path-2"
                d="M65.5 4.5C100.298 4.5 128.5 32.4859 128.5 67C128.5 101.514 100.298 129.5 65.5 129.5C30.7023 129.5 2.5 101.514 2.5 67C2.5 32.4859 30.7023 4.5 65.5 4.5Z"
                stroke="#766AFB"
              />
              <circle cx="67" cy="67" r="66.5" stroke="#B9EE47" className="path-3"/>
              <path className="path-4"
                d="M67 12.5C99.3379 12.5 125.5 37.1527 125.5 67.5C125.5 97.8473 99.3379 122.5 67 122.5C34.6621 122.5 8.5 97.8473 8.5 67.5C8.5 37.1527 34.6621 12.5 67 12.5Z"
                stroke="#DC5E8F"
              />
            </svg> */}

            {/* {burstSvg} */}
          </span>
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
            <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
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
          <div className="fixed right-0 bottom-0 h-full bg-[#2CBCE9] w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <img alt="close-icon" src="../assets/close-icon.svg" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-[#010026]">
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
              <Link
                page="Testimonials"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
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

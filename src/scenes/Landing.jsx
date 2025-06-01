import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-[#2CBCE9] before:z-[-1]"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { x: -80, y: -80 },
                visible: { x: 0, y: 0 },
              }}
            >
              <img
                alt="profile"
                className=" transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]  rounded-t-full"
                // src="assets/profile-image.png"
                src="assets/IMG-20240227-WA0007-fotor-20250531211634.png"
                // src="assets/fotor-20241111204342.png"
                // src="assets/IMG-20240227-WA0007.jpg"
                // src="./assets/ReadyPlayerMe-Avatar.jpeg"
                // src="./assets/ReadyPlayerMe-Avatar.png"
              />
            </motion.div>
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-full"
            src="assets/IMG-20240227-WA0007-fotor-20250531211634.png"
            // src="assets/profile-image.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start flex flex-wrap gap-3">
            <span className="p-4 sm:py-4">
              Devansh {""}
              </span>
            <span
              className="sm:font-semibold z-20 bg-[url('./assets/brush.png')] bg-no-repeat bg-cover bg-center
                 before:z-[-1]  p-4 sm:py-4"
            >
              <span className="text">

              Raghav
              </span>
            </span>
          </p>

          <p className="mt-10 mb-7 text-lg text-center md:text-start">
            Frontend Developer proficient in React
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900 rounded-sm py-3 px-2 font-medium 
              hover:bg-blue-950 hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          {/* <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-blue-900 hover:text-red-500 transition duration-500 w-full h-full flex items-center justify-center px-3 font-playfair">
              Let's talk.
            </div>
          </AnchorLink> */}
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;

import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-amber-500 before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-amber-500 before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-100">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <AnchorLink
        href="#testimonials"
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")}
      />

      <AnchorLink
        href="#contact"
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-gray-400"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;

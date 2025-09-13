import React, { lazy, Suspense } from "react";
import ScrollToTop from "../ScrollToTop";
import CanvasElement from "./CanvasElement";
import { useNavigate } from "react-router";

const ProjectsPage = () => {
  const navigate = useNavigate();
  const CanvasElementLazy = lazy(() => import("./CanvasElement"));
  return (
    <>
      <ScrollToTop />
      <div
        id="scroll-section"
        style={{
          height: "1000vh",
          background: "transparent",
          position: "relative",
        }}
      ></div>

      <div className="!fixed top-0 left-0 w-screen h-screen one stars-bg">
        {/* <button
              onClick={() => navigate("/")}
              className="absolute text-white text-lg cursor-pointer p-1 m-2 z-10 bg-cyan-600 w-[80px] rounded-lg hover:bg-cyan-700"
            >
              Exit
            </button> */}

        <Suspense fallback={<div className="absolute z-10 w-full h-screen text-white bg-black flex justify-center items-center">
                    Loading 3D...
                  </div>}>
          <CanvasElementLazy />
        </Suspense>
        {/* <CanvasElement /> */}
      </div>
    </>
  );
};

export default ProjectsPage;

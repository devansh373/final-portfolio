// import React from "react";
import Body from "./scenes/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./scenes/ProjectDetails";
import { ThemeProvider } from "./context/ghostThemeContext";
import { lazy, Suspense } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
// import ScrollToTop from "./ScrollToTop";
// import ProjectsPage from "./scenes/ProjectsPage";
// import StarScrollPath from "./components/SVG";
const App = () => {
  const ProjectsPage = lazy(() => import("./scenes/ProjectsPage"));
  const isDesktop = useMediaQuery("(min-width: 1060px)");


  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/projectsPage",
      element: (
        
        <Suspense
          fallback={
            <div className="absolute z-10 w-full h-screen text-xl text-white bg-black flex justify-center items-center">
              Loading Projects Page...
            </div>
          }
        >
          <ProjectsPage />
        </Suspense>
      ),
    },
    {
      path: "/project/:id",
      element: <ProjectDetails />,
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <RouterProvider router={appRouter}>
          {/* <ScrollToTop/> */}

          <Body />

          {/* <StarScrollPath/> */}
        </RouterProvider>
      </ThemeProvider>
    </>
  );
};

export default App;

// import React from "react";
import Body from "./scenes/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./scenes/ProjectDetails";
import { ThemeProvider } from "./context/ghostThemeContext";
import ScrollToTop from "./ScrollToTop";
import ProjectsPage from "./scenes/ProjectsPage";
// import StarScrollPath from "./components/SVG";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
    },
    {
      path: "/projectsPage",
      element: <ProjectsPage />,
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

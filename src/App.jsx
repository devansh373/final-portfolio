import React from "react";
import Body from "./scenes/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectDetails from "./scenes/ProjectDetails";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body/>,
    },
    {
      path: "/project/:id",
      element: <ProjectDetails />,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </>
  );
};

export default App;

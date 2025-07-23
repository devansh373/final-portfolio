import React from 'react'
import ScrollToTop from '../ScrollToTop'
import CanvasElement from './CanvasElement'
import { useNavigate } from 'react-router'

const ProjectsPage = () => {
    const navigate = useNavigate()
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
           
            <CanvasElement />

            
          </div>
          
        </>
  )
}

export default ProjectsPage
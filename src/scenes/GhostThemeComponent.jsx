import React, { useEffect, useRef } from "react";
import { useGhostThemeContext } from "../context/ghostThemeContext";

const GhostThemeComponent = () => {
  const { ghostTheme,toggleGhostTheme } = useGhostThemeContext();
  const svgRef = useRef();
  const circleRef = useRef();
  const cloudsRef = useRef([]);
  const parallaxFactors = useRef([]);

  useEffect(() => {
    if (
      !svgRef.current ||
      !circleRef.current ||
      !cloudsRef.current ||
      !parallaxFactors.current
    )
      return;
    const handleMouseMove = (e) => {
      console.log(parallaxFactors.current);
      const pt = svgRef.current.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgP = pt.matrixTransform(svgRef.current.getScreenCTM().inverse());

      circleRef.current.setAttribute("cx", svgP.x);
      circleRef.current.setAttribute("cy", svgP.y);

      // cloudsRef.current.forEach((cloud, index) => {
      //   const xMove = e.clientX * parallaxFactors?.current[index];
      //   const yMove = e.clientY * parallaxFactors?.current[index];
      //   // console.log(cloud.style.transform)
      //   // cloud.setAttribute("x",xMove)
      //   // cloud.setAttribute("y",yMove)
      //   cloud.style.transform = `translate(-${xMove}%,-${yMove}%)`;
      // });
    };
    svgRef.current?.addEventListener("mousemove", handleMouseMove);
    return () => {
      svgRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ghostTheme]);
  return (
    <div className="pt-2 ghost-theme-bg">
      {/* <div className="fog-wrap">
            {Array(15)
              .fill(0)
              .map((_, index) => (
                <img
                  key={index}
                  src="/assets/Fog-PNG-Background-1.png"
                  alt=""
                />
              ))}
         
          </div> */}
      <svg
        className="flashlight-svg w-screen h-screen"
        ref={svgRef}
        viewBox="0 0 2000 900"
        xmlns="http://www.w3.org/2000/svg"
        // onMouseMove={(e) => {
        //   const pt = svgRef.current.createSVGPoint();
        //   pt.x = e.clientX;
        //   pt.y = e.clientY;
        //   const svgP = pt.matrixTransform(
        //     svgRef.current.getScreenCTM().inverse()
        //   );

        //   circleRef.current.setAttribute("cx", svgP.x);
        //   circleRef.current.setAttribute("cy", svgP.y);

        //   cloudsRef.current.forEach((cloud,index)=>{
        //     const xMove = e.clientX * parallaxFactors?.current[index]
        //     const yMove = e.clientY * parallaxFactors?.current[index]
        //     // console.log(cloud)
        //     // cloud.setAttribute("x",xMove)
        //     // cloud.setAttribute("y",yMove)
        //     cloud.style.transform = `translate(-${xMove}%,-${yMove}%)`
        //   })
        // }}
      >
        <defs>
          <radialGradient id="flashlight-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="30%" stop-color="black" stop-opacity="1" />
            <stop offset="100%" stop-color="white" stop-opacity="1" />
          </radialGradient>
          <mask id="flashlight-mask">
            <rect width={"100%"} height={"900"} fill="white" />
            <circle
              id="spot"
              cx="0"
              cy="0"
              r="200"
              fill="url(#flashlight-gradient)"
              stroke-width="12"
              ref={circleRef}
            />
          </mask>
        </defs>
         <g>
          <image
            
            href="/assets/horror-5233620_1280.jpg"
            x="0"
            y="0%"
            width="100%"
            // height="100%"
          />
        </g>
        

       
        {/* <!-- Group wrapper for image to apply transform --> */}
        {/* <g
          id="image-wrapper"
          mask="url(#flashlight-mask)"
          width={"100%"}
          height={"100%"}
          
        >
          {Array(28)
            .fill(0)
            .map((_, index) => {
              // if (!parallaxFactors.current[index]) {
              //   parallaxFactors.current[index] =
              //     Math.floor((-0.05 - Math.random() * 0.15)*100)/100;
              // }

              return (
                <image
                  key={index}
                  href="/assets/Fog-PNG-Background-1.png"
                  // href="/assets/Fog-PNG-Background-1.png"
                  ref={(el) => (cloudsRef.current[index] = el)}
                  //  x={index %2===0? `-${Math.random() *30}%`:`${Math.random()*80}%`}
                  //  y={index %2===0? `-${Math.random() *40}%`:`${Math.random()*40}%`}
                />
              );
            })}
        </g> */}

        {/* <!-- Masked black rectangle --> */}
        <rect
              width="100%"
              height="100%"
              fill="rgba(0,0,0,0.9)"
              mask="url(#flashlight-mask)"
            />
            <g onClick={() => toggleGhostTheme()}>

        <rect
          x="50%"
          y="20"
          width="160"
          height="60"
          rx="10"
          ry="10"
          fill="#24CBFF"
          stroke="#010026"
          strokeWidth="2"
          
          className="p-2 bg-cyan-600  mx-auto cursor-pointer block"
          />
        <text
          x="54%"
          y="55"
          textAnchor="middle"
          fill="white"
          className="font-bold text-white text-xl cursor-pointer"
          >
          {ghostTheme ? "Normal Theme" : "Ghost Theme"}
        </text>
          </g>
      </svg>
    </div>
  );
};

export default GhostThemeComponent;

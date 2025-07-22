import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const ProgressBarSvg = () => {
  const starRef = useRef(null);
  const pathRef = useRef(null);
  // const pathRef2 = useRef(null);
  // useEffect(() => {
  //   if (!pathRef.current || !starRef.current) return;

  //   const path = pathRef.current;
  //   // const path2 = pathRef2.current;
  //   const star = starRef.current;
  //   const pathLength = path.getTotalLength();
  //   // const pathLength2 = path2.getTotalLength();

  //   // Set initial stroke properties
  //   path.style.strokeDasharray = pathLength.toString();
  //   path.style.strokeDashoffset = pathLength.toString();

  //   // Shared timeline
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       // trigger: ".app",
  //       trigger: document.documentElement,
  //       start: "10% top",
  //       end: `${document.documentElement.scrollHeight-window.innerHeight}px top`,
  //       scrub: true,
  //       // pin: true,
  //       // markers: true,
  //     },
  //   });

  //   // Animate stroke offset + dot together
  //   tl.to(
  //     path,
  //     {
  //       strokeDashoffset: 0,
  //       duration: 2,
  //       // ease: "power4.inOut",
  //     },
  //     0
  //   )
  //     // .to(
  //     //   path2,
  //     //   {
  //     //     strokeDashoffset: 0,
  //     //     duration: 2,
  //     //     // fill:"#fff"
  //     //     // ease: "power4.inOut",
  //     //   },
  //     //   2
  //     // )
  //     .to(
  //       star,
  //       {
  //         motionPath: {
  //           path: path,
  //           align: path,
  //           autoRotate: true,
  //           alignOrigin: [0.5, 0.5],
  //         },
  //         duration: 2,
  //         // ease: "power4.inOut",
  //       },
  //       0 // sync both animations (stroke & motion) from start of timeline
  //     );
  // }, []);
  // console.log("first")
  useEffect(() => {
    if (!pathRef.current || !starRef.current) return;

    const path = pathRef.current;
    const star = starRef.current;
    const pathLength = path.getTotalLength();

    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Create ScrollTrigger after layout settles
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        start: "10% top",
        end: () =>
          `${document.documentElement.scrollHeight - window.innerHeight}px top`,
        scrub: true,
        // pin: true,
        // markers: true,
      },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      // duration: 2,
    }).to(
      star,
      {
        motionPath: {
          path: path,
          align: path,
          autoRotate: true,
          alignOrigin: [0.5, 0.5],
        },
        // duration: 2,
      },
      0
    );

    // Refresh ScrollTrigger after full load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100); // or use requestAnimationFrame

    // Optional: re-apply on resize
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      ScrollTrigger.getAll().forEach((t) => t.kill()); // clean up on unmount
    };
  }, []);

  return (
    <svg
      viewBox="0 0 500 500"
      className="left-[-2.2vw] w-screen  fixed top-[1px]"
    >
      <defs>
        {/* Gradient for the stroke */}
        <linearGradient id="glow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00ffff" />
          <stop offset="50%" stopColor="#ff00ff" />
          <stop offset="100%" stopColor="#00ffff" />
        </linearGradient>

        {/* Blur filter to create glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        className="z-50"
        ref={pathRef}
        d="M10 1 L 50.914 1.1 L 50.914 25 C 50.914 30 55.355 33 78.283 31 L 453 31 C 453 31 465 34 466.5 23 L 466.5 1.1 L 500 1.1"
        fill="none"
        strokeWidth={0.7}
        stroke="url(#glow-gradient)"
        filter="url(#glow)"
      />
      
      {/* <svg viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>*/}
      <g id="SVGRepo_iconCarrier" ref={starRef} className="w-[50px]">
        {" "}
        <title>rocket</title> <desc>Created with Sketch.</desc> <defs> </defs>
        <g
          id="Vivid.JS"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          {" "}
          <g id="Vivid-Icons" transform="translate(-509.000000, -174.000000)">
            {" "}
            <g id="Icons" transform="translate(37.000000, 169.000000)">
              {" "}
              <g id="rocket" transform="scale(0.3) translate(468, 0) rotate(45)" >
                <g transform="translate(4.000000, 4.000000)" id="Shape" >
                  <path
                  
                    d="M25.624,40.785 L21.381,29.472 L29.159,21.694 L31.234,30.429 L25.624,40.785 Z M0.168,15.329 L10.525,9.718 L19.26,11.793 L11.482,19.571 L0.168,15.329 Z M1.624,31.991 C3.544,27.062 6.864,29.717 6.864,29.717 L9.086,31.934 L11.286,34.127 C11.286,34.127 13.913,37.407 8.991,39.34 C7.50044275,39.7420004 5.9491741,39.8694091 4.413,39.716 C3.598,39.64 0.876,41.316 0.066,40.938 C-0.324,40.124 1.354,37.401 1.273,36.583 C1.10874117,35.04374 1.2277026,33.4874126 1.624,31.991 Z"
                    fill="#9f0909"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M6.7,21.537 C25.323,3.122 39.983,0.986 39.983,0.986 C39.983,0.986 37.823,15.484 19.2,33.9 C19.2,33.9 14.359,39.227 7.82,32.76 C4.54564479,29.8996232 4.05549402,24.9880499 6.7,21.537 Z"
                    fill="#2f6d79"
                  >
                    {" "}
                  </path>{" "}
                  <path
                    d="M23.646,17.336 C25.3500493,19.0978885 25.3102607,21.9055182 23.556968,23.6184106 C21.8036754,25.3313029 18.995881,25.3056408 17.274189,23.5609884 C15.552497,21.816336 15.564032,19.0084481 17.3,17.278 C19.0738276,15.55508 21.9039597,15.5809463 23.646,17.336 Z"
                    fill="#9f0909"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>{" "}
        </g>{" "}
      </g>
      {/* </svg> */}
      {/* <circle
        ref={starRef}
        r={6}
        fill="none"
        stroke="url(#glow-gradient)"
        filter="url(#glow)"
      /> */}
    </svg>
  );
};
export default ProgressBarSvg;

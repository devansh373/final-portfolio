// // StarPathMotion.tsx
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";

// export default function StarPathMotion() {
//   const pathRef = useRef(null);
//   const [pathLength, setPathLength] = useState(0);

//   useEffect(() => {
//     if (pathRef.current) {
//       setPathLength(pathRef.current.getTotalLength());
//     }
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-900">
//       <svg viewBox="0 0 500 300" className="w-[500px] h-[300px]">
//         {/* Custom path */}
//         <path
//           ref={pathRef}
//           d="M10,150 Q250,10 490,150 Q250,290 10,150"
//           stroke="white"
//           fill="none"
//           strokeWidth={2}
//         />

//         {/* Star following the path */}
//         {pathLength > 0 && (
//           <motion.circle
//             r="10"
//             fill="yellow"
//             initial={{ pathLength: 0 }}
//             animate={{
//               pathLength: 1,
//               transition: {
//                 duration: 5,
//                 repeat: Infinity,
//                 ease: "linear"
//               }
//             }}
//           >
//             <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
//               <mpath href="#path" />
//             </animateMotion>
//           </motion.circle>
//         )}
//       </svg>
//     </div>
//   );
// }

// StarScrollPath.tsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function StarScrollPath() {
  const starRef = useRef(null);
  const pathRef = useRef(null);
  const pathRef2 = useRef(null);

  // useEffect(() => {
  //   if (!starRef.current || !pathRef.current) return;

  //   const path = pathRef.current;
  // const pathLength = path.getTotalLength();

  // // Set initial stroke properties
  // path.style.strokeDasharray = pathLength.toString();
  // path.style.strokeDashoffset = pathLength.toString();

  // // Animate stroke offset with scroll
  // gsap.to(path, {
  //   strokeDashoffset: 0,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".demo",
  //     start: "top top",
  //     end: "bottom top",
  //     scrub: true,
  //     markers: true,
  //   },
  // });

  //   gsap.to(starRef.current, {
  //     scrollTrigger: {
  //       // trigger: document.body,
  //       trigger: ".demo",
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //       pin:true,
  //       markers:true
  //     },
  //     motionPath: {
  //       path: pathRef.current,
  //       align: pathRef.current,
  //       autoRotate: true,
  //       alignOrigin: [0.5, 0.5],
  //     },
  //   });
  // }, []);

  useEffect(() => {
    if (!pathRef.current || !starRef.current) return;

    const path = pathRef.current;
    const path2 = pathRef2.current;
    const star = starRef.current;
    const pathLength = path.getTotalLength();
    const pathLength2 = path2.getTotalLength();

    // Set initial stroke properties
    path.style.strokeDasharray = pathLength.toString();
    path.style.strokeDashoffset = pathLength.toString();
    path2.style.strokeDasharray = pathLength2.toString();
    path2.style.strokeDashoffset = pathLength2.toString();

    // Shared timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".demo",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    // Animate stroke offset + dot together
    tl.to(
      path,
      {
        strokeDashoffset: 0,
        duration: 2,
        // ease: "power4.inOut",
      },
      0
    )
      .to(
        path2,
        {
          strokeDashoffset: 0,
          duration: 2,
          // fill:"#fff"
          // ease: "power4.inOut",
        },
        2
      )
      .to(
        star,
        {
          motionPath: {
            path: path,
            align: path,
            autoRotate: true,
            alignOrigin: [0.5, 0.5],
          },
          duration: 2,
          // ease: "power4.inOut",
        },
        0 // sync both animations (stroke & motion) from start of timeline
      );
  }, []);
  return (
    <div className="h-[250vh] ">
      <div className=" h-full demo !transform-none">
        <svg viewBox="0 0 500 500" className="  left-0 w-screen z-80 ">
          <defs>
            {/* Gradient for the stroke */}
            <linearGradient
              id="glow-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
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
            ref={pathRef}
            d="M 10 98.67 L 231.914 117.619"
            stroke="url(#glow-gradient)"
            fill="none"
            strokeWidth={0.7}
            filter="url(#glow)"
          />
          <circle
            ref={starRef}
            r={6}
            fill="none"
            stroke="url(#glow-gradient)"
            filter="url(#glow)"
          />
          {/* </svg> */}
          {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="140"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="#42ded5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path
          ref={pathRef2}
            fill="#42ded5"
            fill-opacity="0"
            // stroke-dasharray="20"
            // stroke-dashoffset="20"
            d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
          >
            <animate
              attributeName="d"
              begin="0.5s"
              dur="1.5s"
              repeatCount="indefinite"
              values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"
            />
            
          </path>
          <path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12">
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              begin="0.5s"
              dur="0.2s"
              values="14;0"
            />
          </path>
        </g>
      </svg> */}
          <g
            id="svgGroup"
            stroke-linecap="round"
            fill-rule="evenodd"
            font-size="9pt"
            stroke="#fff"
            stroke-width="0.25mm"
            fill="none"
          >
            <path ref={pathRef2} d="M50,150 C70,80 130,80 150,150 S230,220 250,150 S330,80 350,150 S430,220 450,150"/>
            {/* <path
              ref={pathRef2}
              d="M 16.2 83.1 Q 12.1 83.1 8.4 81.9 Q 4.7 80.7 2.35 78.3 Q 0 75.9 0 72.3 Q 0 68.6 3.25 65.6 Q 6.5 62.6 12.5 62.6 Q 18.8 62.6 24.45 65.45 Q 30.1 68.3 36.4 71.6 Q 41.7 66.5 45.85 59.75 Q 50 53 53.85 45.5 Q 57.7 38 61.8 30.55 Q 65.9 23.1 71 16.7 Q 71.9 15.6 72.8 14.45 Q 73.7 13.3 74.7 12.2 Q 69.3 9 63.1 7.25 Q 56.9 5.5 50.3 5.5 Q 42.1 5.5 35.1 7.6 Q 28.1 9.7 22.95 13.25 Q 17.8 16.8 14.9 21.25 Q 12 25.7 12 30.4 Q 12 34.6 13.75 37.35 Q 15.5 40.1 18.2 41.4 Q 20.9 42.7 23.5 42.7 Q 27 42.7 29.5 41.35 Q 32 40 33.6 38 Q 35.2 36 36 34.1 Q 36.8 32.2 36.9 31 Q 36.9 30.3 37.8 30.3 Q 39.2 30.3 38.9 32 Q 38.4 36 35.9 38.95 Q 33.4 41.9 29.9 43.55 Q 26.4 45.2 22.7 45.2 Q 18.3 45.2 14.7 43.55 Q 11.1 41.9 8.95 38.55 Q 6.8 35.2 6.8 30.3 Q 6.8 23.8 10.3 18.65 Q 13.8 13.5 19.9 9.9 Q 26 6.3 33.9 4.4 Q 41.8 2.5 50.6 2.5 Q 57.4 2.5 64.3 4.15 Q 71.2 5.8 77.4 9.1 Q 80 6.2 82.75 3.95 Q 85.5 1.7 88.4 0.5 Q 89.7 0 90.5 0 Q 91.1 0 91.1 0.3 Q 91.1 0.8 88.8 2.8 Q 87.5 4 85.7 6.45 Q 83.9 8.9 82 11.8 Q 88 15.7 92.65 21.25 Q 97.3 26.8 100 33.85 Q 102.7 40.9 102.7 49.5 Q 102.7 57.9 99.8 64.15 Q 96.9 70.4 91.9 74.5 Q 86.9 78.6 80.4 80.65 Q 73.9 82.7 66.7 82.7 Q 58.2 82.7 50.95 80.4 Q 43.7 78.1 37.5 75.2 Q 32.6 79.1 27.35 81.1 Q 22.1 83.1 16.2 83.1 Z M 251.7 79.6 Q 255.9 71 260.45 61.55 Q 265 52.1 269.8 42.5 Q 274.6 32.9 279.3 24.2 Q 281 21.2 282.45 19.5 Q 283.9 17.8 286.3 17.8 Q 287.2 17.8 288.4 18.1 Q 289.6 18.4 290.7 18.2 Q 289.4 19.6 287.15 23.1 Q 284.9 26.6 282.15 31.5 Q 279.4 36.4 276.35 42.05 Q 273.3 47.7 270.35 53.45 Q 267.4 59.2 264.9 64.2 Q 266.9 61.6 269 59.3 Q 271.1 57 273.1 55.3 Q 275.3 53.3 278.65 51.1 Q 282 48.9 285.35 47.3 Q 288.7 45.7 290.7 45.7 Q 291.4 45.7 291.7 45.8 L 290.6 47.8 Q 289.5 49.8 287.85 52.9 Q 286.2 56 284.45 59.6 Q 282.7 63.2 281.4 66.45 Q 280.1 69.7 279.7 71.8 Q 279.4 73.4 279.4 74.5 Q 279.4 76.1 280 76.65 Q 280.6 77.2 281.3 77.2 Q 283 77.2 284.95 75.45 Q 286.9 73.7 288.8 71 Q 290.7 68.3 292.35 65.25 Q 294 62.2 295 59.5 Q 296.2 59.5 296.2 60.4 Q 295.1 63.1 293.45 66.35 Q 291.8 69.6 289.7 72.5 Q 287.6 75.4 285.1 77.3 Q 282.6 79.2 279.8 79.2 Q 277.8 79.2 275.7 77.8 Q 273.6 76.4 273.6 72.7 Q 273.6 71.6 273.8 70.35 Q 274 69.1 274.5 67.5 Q 275.1 65.5 276.5 63.05 Q 277.9 60.6 280.1 56.9 Q 281.1 55.2 281.1 54.2 Q 281.1 53 279.9 53 Q 278.9 53 277.2 54 Q 275.5 55 272.9 57.5 Q 270.4 59.9 266.7 64.5 Q 263 69.1 258.8 77.4 Q 258.1 78.7 257.25 78.75 Q 256.4 78.8 255 78.9 Q 254.1 79 253.2 79.05 Q 252.3 79.1 251.7 79.6 Z M 186.8 79.1 Q 184.5 79.1 182.75 77.8 Q 181 76.5 181 72.5 Q 181 70.8 181.25 69.3 Q 181.5 67.8 181.9 66.1 Q 181 67.6 179.4 69.8 Q 177.8 72 175.85 74.1 Q 173.9 76.2 171.85 77.6 Q 169.8 79 168 79 Q 165.4 79 163.8 76.65 Q 162.2 74.3 162.2 70.5 Q 162.2 66.4 164.1 61.7 Q 166 57 169.3 52.7 Q 172.6 48.4 176.9 45.7 Q 181.2 43 185.9 43 Q 188.2 43 190.3 43.75 Q 192.4 44.5 194 46.2 Q 194.7 46.9 194.7 47.8 Q 194.7 48.4 194.2 48.8 Q 193.7 49.2 192.9 49 Q 191.8 45.5 188.2 45.5 Q 186.5 45.5 184.3 46.6 Q 181.6 48 178.55 51.05 Q 175.5 54.1 172.85 57.95 Q 170.2 61.8 168.5 65.7 Q 166.8 69.6 166.8 72.8 Q 166.8 76.1 169.3 76.1 Q 171.5 76.1 173.85 74 Q 176.2 71.9 178.35 68.75 Q 180.5 65.6 182.3 62.5 Q 184.1 59.4 185.1 57.5 Q 186.6 54.8 187.9 53 Q 189.2 51.2 191.6 51.2 Q 192.7 51.2 193.8 51.5 Q 194.9 51.8 196.1 51.6 Q 193.1 54.6 190.85 58.7 Q 188.6 62.8 187.4 66.75 Q 186.2 70.7 186.2 73.4 Q 186.2 76.4 188.2 76.4 Q 189.8 76.4 191.65 74.6 Q 193.5 72.8 195.25 70.05 Q 197 67.3 198.5 64.45 Q 200 61.6 200.9 59.5 Q 201.4 59.5 201.75 59.6 Q 202.1 59.7 202.1 60.4 Q 202 60.8 201.75 61.25 Q 201.5 61.7 201 62.8 Q 200.2 64.4 198.8 67.1 Q 197.4 69.8 195.5 72.55 Q 193.6 75.3 191.4 77.2 Q 189.2 79.1 186.8 79.1 Z M 191.3 79.6 Q 194.9 72.3 198.2 65.15 Q 201.5 58 205 51.5 Q 207 47.9 208.4 46.45 Q 209.8 45 212.1 45 Q 212.9 45 213.8 45.25 Q 214.7 45.5 215.6 45.5 Q 216.2 45.5 216.5 45.4 Q 215.1 46.2 212.85 49.35 Q 210.6 52.5 208.3 56.6 Q 206 60.7 204.2 64.3 Q 206.1 62 208.2 59.7 Q 210.3 57.4 212.8 55.3 Q 215.2 53.2 218.55 50.95 Q 221.9 48.7 225.1 47.2 Q 228.3 45.7 230.2 45.7 Q 230.9 45.7 231.2 45.8 L 230.1 47.75 Q 229 49.7 227.35 52.85 Q 225.7 56 224 59.55 Q 222.3 63.1 220.95 66.35 Q 219.6 69.6 219.2 71.8 Q 218.9 73.1 218.9 74.2 Q 218.9 75.8 219.5 76.3 Q 220.1 76.8 220.8 76.8 Q 222.7 76.8 224.7 75.1 Q 226.7 73.4 228.55 70.75 Q 230.4 68.1 232 65.1 Q 233.6 62.1 234.7 59.5 Q 235.9 59.5 235.9 60.4 Q 234.8 63.1 233.15 66.35 Q 231.5 69.6 229.45 72.5 Q 227.4 75.4 224.9 77.3 Q 222.4 79.2 219.5 79.2 Q 217.5 79.2 215.35 77.8 Q 213.2 76.4 213.2 72.6 Q 213.2 71.5 213.4 70.25 Q 213.6 69 214.1 67.5 Q 214.9 65.5 216 63.2 Q 217.1 60.9 219.6 56.9 Q 220.3 55.8 220.45 55.2 Q 220.6 54.6 220.6 54.2 Q 220.6 53 219.5 53 Q 218.6 53 216.85 54 Q 215.1 55 212.5 57.5 Q 210 59.9 206.55 64.3 Q 203.1 68.7 198.6 77.3 Q 197.9 78.6 197.05 78.7 Q 196.2 78.8 194.7 78.9 Q 193.7 79 192.8 79.05 Q 191.9 79.1 191.3 79.6 Z M 134.2 59.5 Q 134.2 60.5 135.3 60.5 Q 133.8 64.6 132.9 67.9 Q 132 71.2 132 73.8 Q 132 76.3 133.2 77.9 Q 134.4 79.5 137.5 79.5 Q 140.7 79.5 143.45 77.5 Q 146.2 75.5 148.5 72.35 Q 150.8 69.2 152.5 65.7 Q 154 69.2 157.4 69.2 Q 160.2 69.2 162.45 66.8 Q 164.7 64.4 166.3 60.4 Q 166.3 59.5 165.1 59.5 Q 163.2 63.9 161.45 65.75 Q 159.7 67.6 157.7 67.6 Q 156.1 67.6 155 66.55 Q 153.9 65.5 153.5 63.8 Q 153.8 63 154.2 62.2 Q 155.9 58.4 157.4 54.3 Q 158.9 50.2 159.85 47.2 Q 160.8 44.2 160.8 43.8 Q 160.8 42.1 158.9 42.1 Q 156.2 42.1 154.5 44.45 Q 152.8 46.8 152 50.3 Q 151.2 53.8 151.2 57.2 Q 151.2 60.4 151.8 62.7 Q 150.5 65.6 148.55 68.75 Q 146.6 71.9 144.4 74.1 Q 142.2 76.3 139.9 76.3 Q 139.3 76.3 138.5 76 Q 137.4 75.4 137.4 73.4 Q 137.4 71.1 138.5 67.6 Q 139.6 64.1 140.9 60.7 Q 141.9 58.1 142.8 54.55 Q 143.7 51 143.8 48.5 Q 143.9 45.8 143.55 45 Q 143.2 44.2 142.2 44.2 Q 141.8 44.2 141.3 44.25 Q 140.8 44.3 140.2 44.4 Q 139.8 44.4 138.6 44.6 Q 137.4 44.8 136.35 45 L 135.3 45.2 Q 136.1 45.4 136.5 46.5 Q 136.9 47.6 136.9 49.2 Q 136.9 52.4 135.95 54.95 Q 135 57.5 134.2 59.5 Z M 75.2 22.5 Q 73.1 25.8 70.1 30.85 Q 67.1 35.9 63.4 41.8 Q 59.7 47.7 55.7 53.6 Q 51.7 59.5 47.65 64.65 Q 43.6 69.8 39.8 73.3 Q 45.1 75.9 51.5 77.8 Q 57.9 79.7 66 79.7 Q 75.2 79.7 82 75.85 Q 88.8 72 92.6 65.35 Q 96.4 58.7 96.4 50.3 Q 96.4 39.4 91.8 30.45 Q 87.2 21.5 79.5 15.5 Q 78.2 17.6 77.1 19.45 Q 76 21.3 75.2 22.5 Z M 231.8 65.1 L 231.9 64.9 Q 234.1 60.9 236.15 56.75 Q 238.2 52.6 240.7 47.9 Q 242.8 44 245.25 41.5 Q 247.7 39 251 39 Q 251.8 39 253.2 39.35 Q 254.6 39.7 254.6 40.8 Q 254.6 41.6 253.7 41.6 Q 253 41.6 252.15 41.2 Q 251.3 40.8 250.8 40.8 Q 248.9 40.8 247.6 43 Q 246.3 45.2 246.3 47.7 Q 246.3 50.4 247.2 52.55 Q 248.1 54.7 249.3 56.7 Q 250.5 58.7 251.4 60.75 Q 252.3 62.8 252.3 65.2 Q 252.3 70 250.45 72.95 Q 248.6 75.9 245.6 77.4 L 245.7 77.4 Q 251 77.4 254.45 72.45 Q 257.9 67.5 261.3 59.5 Q 262.5 59.5 262.5 60.4 Q 260.6 64.9 258.3 69.2 Q 256 73.5 252.9 76.3 Q 249.8 79.1 245.3 79.1 Q 243.4 79.1 241.8 78.7 Q 239.5 79.2 236.8 79.2 Q 232.7 79.2 230.15 76.65 Q 227.6 74.1 227.6 71.3 Q 227.6 69 228.75 67.05 Q 229.9 65.1 231.8 65.1 Z M 115.8 79.2 Q 112.1 79.2 109.15 76.8 Q 106.2 74.4 106.2 69.5 Q 106.2 65.4 108.05 60.8 Q 109.9 56.2 112.95 52.15 Q 116 48.1 119.75 45.55 Q 123.5 43 127.3 43 Q 129.2 43 131 44.1 Q 132.8 45.2 132.8 47.9 Q 132.8 50.4 130.9 53.4 Q 129 56.4 125.5 59 Q 124 60.1 121.7 61.1 Q 119.4 62.1 117.1 62.75 Q 114.8 63.4 113.3 63.4 Q 112.8 64.6 112.35 66.6 Q 111.9 68.6 111.9 70.7 Q 111.9 73.2 112.9 75.2 Q 113.9 77.2 116.6 77.2 Q 119.9 77.2 122.75 75.3 Q 125.6 73.4 127.85 70.5 Q 130.1 67.6 131.7 64.6 Q 133.3 61.6 134.2 59.5 Q 135.4 59.5 135.4 60.4 Q 134.1 63.2 132.45 66.5 Q 130.8 69.8 128.55 72.65 Q 126.3 75.5 123.15 77.35 Q 120 79.2 115.8 79.2 Z M 235.3 68.6 Q 235.3 71 236.4 73.2 Q 237.5 75.4 240.4 76.5 Q 243 75 244.45 71.85 Q 245.9 68.7 245.9 65.3 Q 245.9 62.5 245.3 59.6 Q 244.7 56.7 244.05 53.9 Q 243.4 51.1 243.4 48.9 Q 243.4 48.2 243.45 47.65 Q 243.5 47.1 243.6 46.6 Q 241.8 49.3 239.95 52.9 Q 238.1 56.5 236.4 59.8 Q 234.7 63.1 233.3 65.2 Q 235.3 65.5 235.3 68.6 Z M 16.2 80 Q 21.3 80.3 26.15 78.15 Q 31 76 34.2 73.5 Q 28.2 70.6 23.15 68.2 Q 18.1 65.8 13.8 65.8 Q 10.3 65.8 8.4 67.85 Q 6.5 69.9 6.5 72.4 Q 6.5 75.6 9.05 77.7 Q 11.6 79.8 16.2 80 Z M 114 61.6 Q 115.4 61.6 118.7 60.55 Q 122 59.5 124.7 57.2 Q 127.3 54.9 128.7 52.15 Q 130.1 49.4 130.1 47.5 Q 130.1 45.3 128.5 45.3 Q 127.3 45.3 125.2 46.9 Q 123.1 48.5 120 52.3 Q 118.1 54.7 116.4 57.5 Q 114.7 60.3 114 61.6 Z M 232 73.6 Q 232 75.2 233.1 76.4 Q 234.2 77.6 236.4 77.6 Q 237.4 77.6 238.3 77.4 Q 236.2 76.1 234.95 74.1 Q 233.7 72.1 233.7 69.5 Q 232.8 70.5 232.4 71.55 Q 232 72.6 232 73.6 Z"
              vector-effect="non-scaling-stroke"
            /> */}
          </g>
        </svg>
      </div>
    </div>
  );
}

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";
// import Spaceship from "./Spaceship";
// import { Canvas, useThree } from "@react-three/fiber";

// gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// const Scene = ({ref}) => {
//       const groupRef = useRef();
//   const { camera, scene } = useThree();

//    useEffect(() => {
//     if (groupRef.current) {
//       camera.add(groupRef.current); // Attach to camera
//       scene.add(camera); // Ensure camera is part of scene
//     }
//   }, [camera, scene]);

//   return (

//       <group ref={groupRef}>
//         <Spaceship ref={ref}/>
//       </group>

//   );
// };

// export default function StarScrollPath() {
//   const circleRef = useRef(null);
//   const pathRef = useRef(null);

//   useEffect(() => {
//     if (!circleRef.current || !pathRef.current) return;

//     gsap.to(circleRef.current, {
//       scrollTrigger: {
//         trigger: "#demo",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//         // markers:true
//       },
//       motionPath: {
//         path: pathRef.current,
//         align: pathRef.current,
//         autoRotate: false,
//         alignOrigin: [0.5, 0.5],
//       },
//     });
//   }, []);

//   return (
//     <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//         <ambientLight />
//       <Scene ref={circleRef}/>
//       </Canvas>
//   );
// }

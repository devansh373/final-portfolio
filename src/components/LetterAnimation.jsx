// import { useEffect, useRef } from "react";
// import gsap from "gsap";

// const AnimatedLetters = ({ text }) => {
//   const lettersRef = useRef([]);

//   useEffect(() => {
//     gsap.fromTo(lettersRef.current, {
//       y: 0,
//       opacity: 0,
//     //   stagger: 0.05,
//     //   ease: "back.out(1.7)",
//     //   duration: 0.6,
//     },{
//         y: 100,
//       opacity: 1,
//        duration: 0.6,
//         ease: "back.out(1.7)",
//         stagger: { each: 0.05, from: "random" },
//     });
//   }, []);

//   return (
//     <h1 className="text-5xl font-bold text-white opacity-100">
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           ref={(el) => (lettersRef.current[i] = el)}
//           className="inline-block"
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default AnimatedLetters;
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// // Register plugin
// gsap.registerPlugin(ScrollTrigger);

// const AnimatedLetters = ({ text }) => {
//   const lettersRef = useRef([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       lettersRef.current,
//       {
//         y: 100,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.6,
//         ease: "back.out(1.7)",
//         stagger: { each: 0.05, from: "random" },
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%", // when top of element hits 80% of viewport
//           toggleActions: "play none none none",
//         },
//       }
//     );
//   }, []);

//   return (
//     <h1
//       ref={containerRef}
//       className="text-5xl font-bold text-white opacity-100"
//     >
//       {text.split("").map((char, i) => (
//         <span
//           key={i}
//           ref={(el) => (lettersRef.current[i] = el)}
//           className="inline-block"
//         >
//           {char === " " ? "\u00A0" : char}
//         </span>
//       ))}
//     </h1>
//   );
// };

// export default AnimatedLetters;

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedLetters = ({ text, classParam,isDevansh=false }) => {
  const lettersRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const animateIn = () => {
      gsap.fromTo(
        lettersRef.current,
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.inOut",
          stagger: { each: 0.05, from: "random" },
        }
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: animateIn,
      onEnterBack: animateIn,
    });
    
lettersRef.current.forEach((el) => {
  const floatY = Math.random() * 20 - 3;
  const floatR = Math.random() * 8 - 1;

  gsap.fromTo(
    el,
    {
      y: 0,
      rotateZ: 0,
    },
    {
      y: floatY,
      rotateZ: floatR,
      duration: Math.random() * 2 + 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    }
  );
});



    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <h1
      ref={containerRef}
      className={` text-white w-full opacity-100`}


    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          ref={(el) => (lettersRef.current[i] = el)}
          className={"inline-block relative group ml-4 " + classParam}
        >
          {char === " " ? "\u00A0" : char}
          {isDevansh &&<div
              className="absolute w-17 h-17 bg-red-400 rounded-full -z-1 top-3 left-3 transition duration-100 ease-in scale-0 group-hover:scale-100"
              
            ></div>}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedLetters;

// import {  Image, Text } from "@react-three/drei";

// import { useEffect, useRef, useState } from "react";

// export default function Project({}) {
  
//   const textRef = useRef();

 
//   const projects = [
//     {
//       name:"Youtube Dev",
//       position: [1, -0.7, -80],
//       imgPosition:[1, 2.2, -80],
//       url: "youtubeDev",
//       imgUrl:"youtube-dev.webp"
//     },
//     {
//       name:"Netflix Ai",
//       position: [-3, 0.7, -120],
//       imgPosition: [-3.2, 3.6, -120],
//       url: "netflixAi",
//       imgUrl:"NetflixAi_Ai_Authentication_firebase.jpg"
//     },
//     {
//       name:"Auto Certificate Delivery Workshop",
//       position: [20, 0.7, -160],
//       imgPosition: [20, 3.8, -160],
//       url: "autoCertificateDelivery",
//       imgUrl:"dev-WC-homepage.jpg"
//     },
//   ];
  
//   const [hovered,setHovered] = useState(false)

  

//   return (
//     <>
//       {projects.map((project) => (
//   //      
      
//   <group key={project.name}>
//   {/* Clickable Text */}
//   <Text
//     ref={textRef}
//     position={project.position}
//     fontSize={1}
//     color={hovered ? "#1E90FF" : "white"} // blue on hover
//     anchorX="center"
//     anchorY="middle"
//     onClick={() => {
//       window.location = `/project/${project.url}`;
//       // window.location.href =window.location.href+ `/project/${project.url}`;
//     }}
//     onPointerOver={() => {
//       setHovered(true);
//       document.body.style.cursor = "pointer";
//     }}
//     onPointerOut={() => {
//       setHovered(false);
//       document.body.style.cursor = "default";
//     }}
//   >
//     <meshStandardMaterial
//       color={hovered ? "#1E90FF" : "white"}
//       emissive={hovered ? "#1E90FF" : "green"}
//       emissiveIntensity={2}
//     />
//     {project.name}
//   </Text>

//   {/* Underline */}
//   <mesh
//     position={[
//       project.position[0],
//       project.position[1] - 0.6, // Slightly below the text
//       project.position[2],
//     ]}
//   >
//     <planeGeometry args={[project.name.length * 0.45, 0.05]} />
//     <meshStandardMaterial
//       color={hovered ? "#1E90FF" : "green"}
//       emissive={hovered ? "#1E90FF" : "green"}
//       emissiveIntensity={2}
//     />
//   </mesh>

//   {/* Project Image */}
//   <Image
//     url={`/assets/${project.imgUrl}`}
//     scale={[7, 4.5, 1]}
//     position={project.imgPosition}
//     onClick={() => (window.location.href = "/project/"+project.url)}
//     onPointerOver={() => (document.body.style.cursor = "pointer")}
//     onPointerOut={() => (document.body.style.cursor = "default")}
//     toneMapped={false}
//   />
// </group>
// ))}
      
//     </>
//   );
// }


import { Image, Text } from "@react-three/drei";
import { useEffect, useRef, useState, useMemo } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Project({camera}) {
  // const { camera } = useThree();
  const groupRefs = useRef([]);
  
  const projects = useMemo(
    () => [
      {
        name: "Youtube Dev",
        position: [1, -0.7, -80],
        imgPosition: [1, 2.2, -80],
        url: "youtubeDev",
        imgUrl: "youtube-dev.webp",
      },
      {
        name: "Netflix Ai",
        position: [-3, 0.7, -120],
        imgPosition: [-3.2, 3.6, -120],
        url: "netflixAi",
        imgUrl: "NetflixAi_Ai_Authentication_firebase.jpg",
      },
      {
        name: "Auto Certificate Delivery Workshop",
        position: [20, 0.7, -160],
        imgPosition: [20, 3.8, -160],
        url: "autoCertificateDelivery",
        imgUrl: "dev-WC-homepage.jpg",
      },
    ],
    []
  );

  // Animate opacity based on distance
  useFrame(() => {
    groupRefs.current.forEach((group) => {
      if (!group) return;
      const dist = camera.position.distanceTo(group.position);

      // Fade in when within 15 units
      // const opacity = THREE.MathUtils.clamp(1 - dist / 35, 0, 1);
      const fadeStart = 30;  // start fading in at 30 units away
const fadeEnd = 10;    // fully visible by 10 units
const opacity = THREE.MathUtils.clamp(
  1 - (dist - fadeEnd) / (fadeStart - fadeEnd),
  0,
  1
);


      group.traverse((child) => {
        if (child.material) {
          child.material.transparent = true;
          child.material.opacity = opacity;
        }
      });
    });
  });

  return (
    <>
      {projects.map((project, index) => (
        <group
          key={project.name}
          position={project.position}
          ref={(el) => (groupRefs.current[index] = el)}
        >
          {/* Clickable Text */}
          <Text
            fontSize={1}
            color={"white"}
            anchorX="center"
            anchorY="middle"
            onClick={() => (window.location = `/project/${project.url}`)}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
          >
            {project.name}
          </Text>

          {/* Underline */}
          <mesh position={[0, -0.6, 0]}>
            <planeGeometry args={[project.name.length * 0.45, 0.05]} />
            <meshStandardMaterial color="green" emissive="green" emissiveIntensity={2} />
          </mesh>

          {/* Project Image */}
          <Image
            url={`/assets/${project.imgUrl}`}
            scale={[7, 4.5, 1]}
            position={[
              project.imgPosition[0] - project.position[0],
              project.imgPosition[1] - project.position[1],
              project.imgPosition[2] - project.position[2],
            ]} // relative to group
            onClick={() => (window.location.href = "/project/" + project.url)}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "default")}
            toneMapped={false}
          />
        </group>
      ))}
    </>
  );
}

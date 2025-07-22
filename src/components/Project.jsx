import {  Image, Text } from "@react-three/drei";

import { useEffect, useRef, useState } from "react";

export default function Project({}) {
  
  const textRef = useRef();

 
  const projects = [
    {
      name:"Youtube Dev",
      position: [1, -0.7, -80],
      imgPosition:[1, 2.2, -80],
      url: "youtubeDev",
      imgUrl:"youtube-dev.webp"
    },
    {
      name:"Netflix Ai",
      position: [-3, 0.7, -120],
      imgPosition: [-3.2, 3.6, -120],
      url: "netflixAi",
      imgUrl:"NetflixAi_Ai_Authentication_firebase.jpg"
    },
    {
      name:"Auto Certificate Delivery Workshop",
      position: [20, 0.7, -160],
      imgPosition: [20, 3.8, -160],
      url: "autoCertificateDelivery",
      imgUrl:"dev-WC-homepage.jpg"
    },
  ];
  
  const [hovered,setHovered] = useState(false)

  

  return (
    <>
      {projects.map((project) => (
  //      
      
  <group key={project.name}>
  {/* Clickable Text */}
  <Text
    ref={textRef}
    position={project.position}
    fontSize={1}
    color={hovered ? "#1E90FF" : "white"} // blue on hover
    anchorX="center"
    anchorY="middle"
    onClick={() => {
      window.location = `/project/${project.url}`;
      // window.location.href =window.location.href+ `/project/${project.url}`;
    }}
    onPointerOver={() => {
      setHovered(true);
      document.body.style.cursor = "pointer";
    }}
    onPointerOut={() => {
      setHovered(false);
      document.body.style.cursor = "default";
    }}
  >
    <meshStandardMaterial
      color={hovered ? "#1E90FF" : "white"}
      emissive={hovered ? "#1E90FF" : "green"}
      emissiveIntensity={2}
    />
    {project.name}
  </Text>

  {/* Underline */}
  <mesh
    position={[
      project.position[0],
      project.position[1] - 0.6, // Slightly below the text
      project.position[2],
    ]}
  >
    <planeGeometry args={[project.name.length * 0.45, 0.05]} />
    <meshStandardMaterial
      color={hovered ? "#1E90FF" : "green"}
      emissive={hovered ? "#1E90FF" : "green"}
      emissiveIntensity={2}
    />
  </mesh>

  {/* Project Image */}
  <Image
    url={`/assets/${project.imgUrl}`}
    scale={[7, 4.5, 1]}
    position={project.imgPosition}
    onClick={() => (window.location.href = "/project/"+project.url)}
    onPointerOver={() => (document.body.style.cursor = "pointer")}
    onPointerOut={() => (document.body.style.cursor = "default")}
    toneMapped={false}
  />
</group>
))}
      
    </>
  );
}

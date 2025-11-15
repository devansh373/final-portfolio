import { Canvas } from "@react-three/fiber";
// import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Stars from "../components/Stars";
import SpaceshipScene from "../components/Spaceship";
// import { Image, OrbitControls } from '@react-three/drei';
import TransparentImagePlane from "./TransparentBgImage";
import { Suspense, useState } from "react";
import SplashScreen from "./SplashScreen";
import { Environment, OrbitControls } from "@react-three/drei";
import UFOModel from "../components/UFOModel";
import { useGhostThemeContext } from "../context/ghostThemeContext";

const CanvasElement = () => {
  // console.log("canvas")
  const [isLoaded, setIsLoaded] = useState(false);
  const [is360, setIs360] = useState(false);
  const {ghostTheme,toggleGhostTheme} = useGhostThemeContext()

  return (
    <>
      {!isLoaded && <SplashScreen />}
      <button
  className="fixed top-5 left-5 bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-400/60 text-cyan-400 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 text-lg rounded-xl px-6 py-3 z-10 cursor-pointer transition-all duration-300"
  onClick={() => toggleGhostTheme()}
>
  {ghostTheme ? "Looked around!" : "Look around"}
</button>
      <Canvas
        // camera={{ position: [0, 0, 3], fov: 70, rotation: [0, 360, 0] }}
        camera={{ position: [0, 3, 3], fov: 80 }}
      >
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* <EffectComposer>
                <Bloom
                  intensity={0.2}
                  luminanceThreshold={0}
                  luminanceSmoothing={0.1}
                />
              </EffectComposer> */}
        <Stars />
        <Suspense
          fallback={
            // Optional: early Canvas fallback
            null
          }
        >
          <SpaceshipScene onLoaded={() => setIsLoaded(true)} />
        </Suspense>
        {/* <> */}
        {/* {ghostTheme && <OrbitControls enableZoom={false}/>} */}
        {ghostTheme && <MouseLookCamera/>}
        {/* <TransparentImagePlane/> */}
        {/* </> */}
        {/* <PlanetScene/> */}
        {/* <Image url="assets/colorful-planet-png-images-free-1QAjqO.png"
               scale={[4, 2.5, 1]} // width, height
            position={[-10,0,-50]}
            toneMapped={false}
            texture={"transparent"}
            /> */}
        {/* <BloomLayerOnly/> */}
        {/* <UFOModel camera={camera}/> */}
        {/* <Environment files={"/assets/image_processing20250429-2-2yup8h.jpg"} background/> */}
        <Environment
          // files={"/assets/colorful-rainbow-appearing-sky-nature-landscape.jpg"}
          files={"https://res.cloudinary.com/dev-tech/image/upload/v1763219016/colorful-rainbow-appearing-sky-nature-landscape_11zon_id8yw1.jpg"}
          // files={"/assets/the_sky_is_on_fire_4k.hdr"}
          background
        />
      </Canvas>
    </>
  );
};

export default CanvasElement;


// import { OrbitControls } from '@react-three/drei';

// function PlanetScene({ enableControls = true }) {
//   return (
//     <>
//       <TransparentImagePlane />
//       {enableControls && <OrbitControls enableZoom={true} />}
//     </>
//   );
// }

import { useThree, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

function MouseLookCamera() {
  const { camera } = useThree();
  const targetRotation = useRef({ x: 0, y: 0 });
  const currentRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // normalize mouse [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      targetRotation.current.x = -(y); // tilt up/down
      targetRotation.current.y = -(x); // turn left/right
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    // smooth lerp between current and target rotation
    currentRotation.current.x +=
      (targetRotation.current.x - currentRotation.current.x) * 0.05;
    currentRotation.current.y +=
      (targetRotation.current.y - currentRotation.current.y) * 0.05;

    camera.rotation.x = currentRotation.current.x;
    camera.rotation.y = currentRotation.current.y;
  });

  return null;
}

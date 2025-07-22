import { Canvas } from '@react-three/fiber'
// import { Bloom, EffectComposer } from '@react-three/postprocessing'
import Stars from '../components/Stars';
import SpaceshipScene from '../components/Spaceship';
// import { Image, OrbitControls } from '@react-three/drei';
import TransparentImagePlane from './TransparentBgImage';

const CanvasElement = () => {
    // console.log("canvas")
  return (
    <Canvas
              // camera={{ position: [0, 0, 3], fov: 70, rotation: [0, 360, 0] }}
              camera={{ position: [0, 0, 3], fov: 70 }}
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
              <SpaceshipScene />
              {/* <> */}
              {/* <OrbitControls enableZoom={false}/> */}
              <TransparentImagePlane/>
              {/* </> */}
              {/* <PlanetScene/> */}
              {/* <Image url="assets/colorful-planet-png-images-free-1QAjqO.png"
               scale={[4, 2.5, 1]} // width, height
            position={[-10,0,-50]}
            toneMapped={false}
            texture={"transparent"}
            /> */}
              {/* <BloomLayerOnly/> */}
            </Canvas>
  )
}

export default CanvasElement
// import { OrbitControls } from '@react-three/drei';

// function PlanetScene({ enableControls = true }) {
//   return (
//     <>
//       <TransparentImagePlane />
//       {enableControls && <OrbitControls enableZoom={true} />}
//     </>
//   );
// }

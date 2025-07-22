// import { useLoader } from '@react-three/fiber';
// import * as THREE from 'three';

// export default function TransparentImagePlane() {
//   const texture = useLoader(THREE.TextureLoader, 'assets/colorful-planet-png-images-free-1QAjqO.png');
//   texture.encoding = THREE.sRGBEncoding;

//   return (
//     <mesh position={[-60, -14, -350]} scale={[145.5, 145.5, 11]}>
//       <planeGeometry args={[1, 1]} />
//       <meshBasicMaterial 
//         map={texture} 
//         transparent={true} 
//         alphaTest={0.01} // ensures background is cut out
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }

import { useFrame, useLoader } from '@react-three/fiber';

import { useRef } from 'react';
import * as THREE from 'three';

export default function Planet() {
    const ref=useRef()
  // const texture = useLoader(THREE.TextureLoader, '/assets/colorful-planet-png-images-free-1QAjqO.png');
  // const texture = useLoader(THREE.TextureLoader, '/assets/pngtree-a-planet-in-space-photo-png-image_11490676.png');
  // const texture = useLoader(THREE.TextureLoader, '/assets/2k_mars.jpg');
  // const texture = useLoader(THREE.TextureLoader, '/assets/world.topo.bathy.200407.3x5400x2700.jpg');
  // const texture = useLoader(THREE.TextureLoader, '/assets/neptunemap.jpg');
  // const texture = useLoader(THREE.TextureLoader, '/assets/2k_mercury.jpg');
  const texture = useLoader(THREE.TextureLoader, '/assets/2k_jupiter.jpg');
  // const texture = useLoader(THREE.TextureLoader, '/assets/2k_moon.jpg');
  // const texture = useLoader(THREE.TextureLoader, '/assets/2k_earth_daymap.jpg');
  texture.encoding = THREE.sRGBEncoding;

  useFrame(()=>{
if(!ref.current) return;
ref.current.rotation.y+=0.0005;
  })

  return (
    <>
    
      {/* <directionalLight position={[10, 20, 15]} intensity={1.2} castShadow /> */}
      
      
      <ambientLight intensity={0.2} />

      
     <mesh position={[-570, -664, -450]} scale={[725.5, 725.5, 725.5]} ref={ref}>
      <sphereGeometry args={[1, 64, 64]}  />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        alphaTest={0.01}
        />
    </mesh>
        </>
  );
}

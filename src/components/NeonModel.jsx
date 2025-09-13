import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";

export default function NeonRings({ onLoaded }) {
  const gltf = useGLTF("/assets/neonringani.glb");
  const { camera } = useThree();

  const ringRefs = useRef([]);

  const positions = useMemo(
    () => [
      [-1, 0, -10],
      [0, 0, -130],
      [-3, 0, -230],
      [6,  0, -330],
      [8,  0, -450],
      [3, 0, -530],
    ],
    []
  );

  // 🧠 Create cloned models with cloned materials
  const ringClones = useMemo(() => {
    return positions.map((pos, i) => {
      const clone = gltf.scene.clone(true);
      clone.traverse((child) => {
        if (child.isMesh && child.material) {
          // ✅ Clone the material per mesh
          child.material = child.material.clone();
          child.material.emissive = new THREE.Color("cyan");
          // child.material.emissiveIntensity = 2;
          child.material.needsUpdate = true;
        }
      });
      return { clone, pos };
    });
  }, [gltf.scene, positions]);

  // 🚀 Animate emissive color based on camera distance
  useFrame(() => {
    let closestIndex = -1;
    let closestDistance = 40;

    ringRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const dist = camera.position.distanceTo(ref.position);
      // console.log(dist)
      if (dist < closestDistance) {
        closestDistance = dist;
        closestIndex = index;
      }
    });

    ringRefs.current.forEach((ref, index) => {
      if (!ref) return;
      ref.traverse((child) => {
        if (child.isMesh && child.material?.emissive) {
          child.material?.emissive?.set(
            // index === closestIndex ? "cyan" : "white"
            index === closestIndex ? "white" : "#00AAFF"
          );
        }
      });
    });
  });

  useEffect(() => {
    if (onLoaded) onLoaded(); // ✅ Notify parent that loading is complete
  }, [gltf.scene, onLoaded]);

  return (
    <>
      {ringClones.map(({ clone, pos }, index) => (
        <primitive
          key={index}
          object={clone}
          scale={16}
          position={pos}
          rotation={[3, Math.PI / 2, 0]}
          ref={(el) => (ringRefs.current[index] = el)}
        />
      ))}
    </>
  );
}

// import { useGLTF, Instances, Instance } from "@react-three/drei";
// import { useEffect, useState } from "react";

// export default function NeonRings({ onLoaded=true }) {
//   const gltf = useGLTF("/assets/neonringani.glb");
//   // console.log()
//   console.log(gltf)

//   const positions = [
//     [-1, 1, -10],
//     [-7, 1, -40],
//     [-5, 1, -90],
//     [6, 1, -130],
//     [8, 1, -170],
//     [3, 0, -200],
//   ];
// const [mesh,setMesh] = useState();
//   // const mesh = Object.values(gltf.nodes).find((n) => n.isMesh);
//   useEffect(()=>{
//      setMesh(Object.values(gltf.nodes).find((n) => n.isMesh));

//   },[])
//   return (
//     <Instances
//       geometry={mesh?.geometry}
//       material={mesh?.material}
//       // geometry={gltf.nodes.Object_6.geometry}
//       // material={gltf.nodes.Object_6.material}
//     >
//       {positions.map((pos, i) => (
//         <Instance
//           key={i}
//           position={pos}
//           scale={3}
//           rotation={[0, Math.PI / 2, 0]}
//         />
//       ))}
//     </Instances>
//   );
// }

import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect, useMemo } from "react";

export default function NeonRings({onLoaded}) {
  const gltf = useGLTF("/assets/neonringani.glb");
  const { camera } = useThree();

  const ringRefs = useRef([]);

  const positions = useMemo(
    () => [
      [-1, 1, -10],
      [-7, 1, -40],
      [-5, 1, -90],
      [6, 1, -130],
      [8, 1, -170],
      [3, 0, -200],
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
    let closestDistance = 10;

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
          scale={3}
          position={pos}
          rotation={[0, Math.PI / 2, 0]}
          ref={(el) => (ringRefs.current[index] = el)}
        />
      ))}
    </>
  );
}
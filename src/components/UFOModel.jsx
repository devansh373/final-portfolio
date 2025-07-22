import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
import gsap from "gsap";

// useGLTF.preload("/assets/vampire_glow_bat.glb");

export default function UFOModel({ camera,loadModel=true }) {
  
  const { scene, animations } = useGLTF("/assets/vampire_glow_bat.glb");
  // const {scene} = useGLTF("/assets/neonringani.glb");

  const ref = useRef();
  const mixer = useRef();

  const { actions } = useAnimations(animations, ref);

  // useEffect(() => {
  //   console.log(scene);
  //   console.log(useGLTF("/assets/vampire_glow_bat.glb"));
  //   ref.current.layers.set(1);
  // }, [scene]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().play();
    }
  }, [actions, animations]);
  useEffect(() => {
    // const tl = gsap.timeline({ ease: "power2.inOut" });
    const tl = gsap.timeline();

    // Step 1: Move closer on Z-axis
    tl.to(ref.current.position, {
      z: 0, // adjust how close you want it
      duration: 2,
    });

    // Step 2: Then move right on X-axis
    tl.to(ref.current.position, {
      x: 5,
      duration: 2,
    });
  }, []);
  useFrame(() => {
    if(!camera) return;
    if (ref.current) {
      ref.current.lookAt(camera.position.clone());
      // ref.current.position.z = (camera.position.z-7)
      // ref.current.position.x = (camera.position.x+4)
      // if(camera.position.z<-50){
        // ref.current.position.x = (camera.position.x-4)
        // if(!(ref.current.position.x <=(camera.position.x-4)))
        // ref.current.position.x-=0.1
      // }

    }
  });

  return (
    <>
      <primitive
        ref={ref}
        object={scene}
        scale={0.1}
        position={[-10, 0, -30]}
      />
      ;
    </>
  );
}



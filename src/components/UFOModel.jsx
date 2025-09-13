// import React, { useEffect, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import { useAnimations, useGLTF } from "@react-three/drei";
// // import * as THREE from "three";
// import gsap from "gsap";

// // useGLTF.preload("/assets/vampire_glow_bat.glb");

// export default function UFOModel({ camera,loadModel=true,onLoaded }) {
  
//   const { scene, animations } = useGLTF("/assets/vampire_glow_bat.glb");
//   // const {scene} = useGLTF("/assets/neonringani.glb");

//   const ref = useRef();
//   const mixer = useRef();

//   const { actions } = useAnimations(animations, ref);

//   //  useEffect(() => {
//   //   if (onLoaded) onLoaded(); // ✅ Notify parent that loading is complete
//   // }, [scene, onLoaded]);
//   // useEffect(() => {
//   //   console.log(scene);
//   //   console.log(useGLTF("/assets/vampire_glow_bat.glb"));
//   //   ref.current.layers.set(1);
//   // }, [scene]);

//   useEffect(() => {
//     if (actions && animations.length > 0) {
//       actions[animations[0].name]?.reset().play();
//     }
//   }, [actions, animations]);
//   // useEffect(() => {
//   //   // const tl = gsap.timeline({ ease: "power2.inOut" });
//   //   const tl = gsap.timeline();

//   //   // Step 1: Move closer on Z-axis
//   //   tl.to(ref.current.position, {
//   //     z: 0, // adjust how close you want it
//   //     duration: 2,
//   //   });

//   //   // Step 2: Then move right on X-axis
//   //   tl.to(ref.current.position, {
//   //     x: 5,
//   //     duration: 2,
//   //   });
//   // }, []);
//   useFrame(() => {
//     if(!camera) return;
//     if (ref.current) {
//       // ref.current.lookAt(camera.position.clone());
//       ref.current.rotation.copy(camera.rotation);
//       ref.current.rotation.y = camera.rotation.y+3.1;
//       ref.current.position.z = (camera.position.z-7)
//       ref.current.position.x = (camera.position.x)
//       // if(camera.position.z<-50){
//         // ref.current.position.x = (camera.position.x-4)
//         // if(!(ref.current.position.x <=(camera.position.x-4)))
//         // ref.current.position.x-=0.1
//       // }

//     }
//   });

//   return (
//     <>
//       <primitive
//         ref={ref}
//         object={scene}
//         scale={0.1}
//         position={[-10, 0, -30]}
//         rotation={[0,-3.1,0]}
//       />
//       ;
//     </>
//   );
// }



import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

export default function UFOModel({ camera }) {
  // const { scene, animations } = useGLTF("/assets/phoenix_bird.glb");
  // const { scene, animations } = useGLTF("/assets/bird_flying_animation.glb");
  // const { scene, animations } = useGLTF("/assets/real-time_bones_demo_phoenix_bird.glb");
  const { scene, animations } = useGLTF("/assets/vampire_glow_bat.glb");
  const ref = useRef();
  const prevZ = useRef(camera ? camera.position.z : 0); // track previous z

  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log(animations,actions,scene)
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.reset().play();
    }
    
  }, [actions, animations]);
  useEffect(()=>{
      if(ref.current )
  ref.current.rotation.x = ref.current.rotation.x-(0); // face forward
//  ref.current .rotation.y = camera.rotation.y+3.1;
},[])
  useFrame(() => {
    if (!camera || !ref.current) return;
// ref.current .rotation.y = camera.rotation.y+3.1;
    // --- Follow camera position
    ref.current.position.z = camera.position.z -7;
    ref.current.position.x = camera.position.x;

    // --- Determine if moving forward or backward
    const deltaZ = camera.position.z - prevZ.current;

    if (deltaZ < -0.01) {
      // Camera moving forward (into scene, more negative z)
      ref.current.rotation.y = camera.rotation.y+3.2; // face forward
    } else if (deltaZ > 0.01) {
      // Camera moving backward (towards user, more positive z)
      ref.current.rotation.y = 0; // face backward
    }

    // update prev position
    prevZ.current = camera.position.z;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.08}
      position={[-10, 0, 0]}
    />
  );
}

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef, useEffect, useState, lazy } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import NeonModel from "./NeonModel";

import Project from "./Project";
import UFOModel from "./UFOModel";
import { useGLTF } from "@react-three/drei";

gsap.registerPlugin(ScrollTrigger);

function SpaceshipScene({onLoaded}) {
  const shipRef = useRef();
  
  // const {scene} = useGLTF("/assets/futuristic_spaceship.glb")
// const scene2 = useGLTF("/assets/spaceship.glb")
  const rawScroll = useRef(0); // 🟡 Raw GSAP scroll value
  const smoothedScroll = useRef(0); // 🟢 Smoothed scroll (inertia value)


  // useEffect(()=>{
  //   // console.log(scene)
  //   console.log(useGLTF("/assets/futuristic_spaceship.glb"));
  //   console.log(scene2);
  // },[])
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(-9, 0, -70),
      new THREE.Vector3(9, 0, -150),
      new THREE.Vector3(0, -2, -220),
      new THREE.Vector3(5, 0, -290),
      new THREE.Vector3(0, 0, -360),
    ]);
  }, []);

  // ScrollTrigger only updates rawScroll (not directly affecting animation)
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#scroll-section",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      onUpdate: (self) => {
        rawScroll.current = self.progress; // 0 to 1
      },
    });
    // console.log(model)
  }, []);
  
  const { camera, size } = useThree();

  const currentPos = useRef(new THREE.Vector3());
  const currentQuat = useRef(new THREE.Quaternion());
  const currentCamPos = useRef(new THREE.Vector3());
  const htmlRef = useRef();
  const targetQuat = useRef(new THREE.Quaternion());
  const currentQuat2 = useRef(new THREE.Quaternion());

  useFrame(() => {
    

    if (htmlRef.current?.group) {
      const group = htmlRef.current.group;

      // Step 1: Compute lookAt direction (horizontal only if desired)
      const target = camera.position.clone();
      target.y = group.position.y; // Lock Y to prevent flipping
      group.lookAt(target);

      // Step 2: Save that orientation in a quaternion
      targetQuat.current.copy(group.quaternion);

      // Step 3: Smooth slerp from current to target
      currentQuat2.current.slerp(targetQuat.current, 0.1);

      // Step 4: Apply to group
      group.quaternion.copy(currentQuat2.current);
    }

    // 🌀 Smooth scroll inertia
    smoothedScroll.current +=
      (rawScroll.current - smoothedScroll.current) * 0.03;
    // smoothedScroll.current += (rawScroll.current  * 0.05);

    const t = THREE.MathUtils.clamp(smoothedScroll.current, 0, 1);
    const point = curve.getPointAt(t);
    const tangent = curve.getTangentAt(t);

    if (!point || !tangent || !shipRef.current) return;

    // 🚀 Interpolate spaceship position
    currentPos.current.lerp(point, 0.1);
    shipRef.current.position.copy(currentPos.current);

    // 🎯 Interpolate spaceship rotation
    const axis = new THREE.Vector3();
    const up = new THREE.Vector3(0, 1, 0);
    axis.crossVectors(up, tangent).normalize();
    const radians = Math.acos(up.dot(tangent));
    const targetQuat = new THREE.Quaternion().setFromAxisAngle(axis, radians);
    currentQuat.current.slerp(targetQuat, 0.1);
    shipRef.current.quaternion.copy(currentQuat.current);

    // 🎥 Smooth camera follow
    const cameraOffset = tangent
      .clone()
      .multiplyScalar(-5)
      .add(new THREE.Vector3(0, 2, 0));
    const desiredCamPos = point.clone().add(cameraOffset);
    currentCamPos.current.lerp(desiredCamPos, 0.1);
    camera.position.copy(currentCamPos.current);
    camera.lookAt(currentPos.current);
  });
  // const UFOLazy = lazy(()=>import("./UFOModel"))

  return (
    <>
      {/* Path Tube */}
      {/* <mesh > */}
      <mesh visible={false}>
        <tubeGeometry args={[curve, 200, 0.05, 8, false]} />
        {/* <meshBasicMaterial color="blue" /> */}
        <meshLambertMaterial color="white" />
      </mesh>

      {/* Spaceship */}
       <group ref={shipRef}>
        {/* <primitive object={scene} scale={0.1} rotation={[Math.PI/9, 0, 0]} position={[0, -10, -30]}/>  */}
        
        
      </group>

      <Project />
      
      {/* <UFOModel camera={camera} onLoaded={onLoaded}/> */}
      
      <NeonModel camera={camera}/>
      
    </>
  );
}
export default SpaceshipScene
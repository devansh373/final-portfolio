import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Typing3d = () => {
  const ref = useRef();
  const ref2 = useRef();
  const groupRef = useRef();
  const { scene } = useGLTF("/assets/gaming_desktop_pc.glb");
  const { animations } = useFBX("assets/Typing.fbx");
  const  scene2 = useFBX("assets/character.fbx");
  console.log(animations)
  animations[0].name = "Typing";

  const { actions } = useAnimations(animations, ref);
  

  useEffect(() => {
    console.log(actions)
    
    // animations[0].reset().setLoop(THREE.LoopOnce, 1).play();
    if(actions["Typing"])
    actions["Typing"].reset().setLoop(THREE.LoopRepeat, Infinity).play();
  }, [actions]);
  useFrame(()=>{
if(!ref.current || !ref2.current)
    return
// ref.current.rotation.y+=0.001
// ref2.current.rotation.y+=0.001
groupRef.current.rotation.y+=0.001
  })
  return <group ref={groupRef}>
  <primitive object={scene} ref={ref2}/>
  <primitive object={scene2} ref={ref} scale={0.08} rotation={[0,-Math.PI/2,0]} position={[6.3,-5,2.2]}/>
  </group>;
};

export default Typing3d;

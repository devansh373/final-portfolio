import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
// import UFOModel from "./try";

export default function Stars2({ count = 900 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);
const {camera} = useThree()
  const positions = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: -Math.random() * 10,
      })),
    [count]
  );

  const colors = useMemo(() => {
    const c = [];
    for (let i = 0; i < count; i++) {
      const color = new THREE.Color();
      color.setHSL(Math.random(), 0.9, 0.4); // 🌈 random hue, vibrant
      c.push(color.r, color.g, color.b);
    }
    return new Float32Array(c);
  }, [count]);

  useEffect(() => {
    if (!mesh.current) return;
//  mesh.current.layers.set(1);
    // positions[positions.length - 1].z = -200;
    mesh.current.frustumCulled = false;

    for (let i = 0; i < count; i++) {
      const { x, y, z } = positions[i];
      dummy.position.set(x, y, z);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }

    mesh.current.instanceMatrix.needsUpdate = true;
    mesh.current.geometry.setAttribute(
      "color",
      new THREE.InstancedBufferAttribute(colors, 3)
    );
  }, [positions, count, dummy, colors]);

  useFrame(({ clock }) => {

//   const t = clock.getElapsedTime(); // time in seconds
//   const amplitude = 5; // max offset
//   const center = 5; // center point
// //   const z = center + amplitude * Math.sin(t); // oscillates between 0 and 100
//   const z = center+amplitude * Math.sin(t*0.02); // oscillates between 0 and 100

//   camera.position.z = z;
//   camera.position.z-=0.001;
});
useFrame(() => {
  if (!mesh.current) return;

  for (let i = 0; i < count; i++) {
    // Get star's current matrix
    mesh.current.getMatrixAt(i, dummy.matrix);
    dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);

    // Move star forward (toward the camera)
    dummy.position.z += 0.001; // 🌌 Speed of inward motion

    // If star has passed the camera, loop it back to farthest Z
    if (dummy.position.z > 0) {
      dummy.position.z = -10;
    }

    // Re-apply the updated transform
    dummy.updateMatrix();
    mesh.current.setMatrixAt(i, dummy.matrix);
  }

  mesh.current.instanceMatrix.needsUpdate = true;
});



  return (
    <>
    
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.01, 16, 16]} />
      <meshBasicMaterial
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
    {/* <UFOModel/> */}
</>
  );
}

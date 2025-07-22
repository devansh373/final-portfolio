import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";


export default function Stars({ count = 1500 }) {
  const mesh = useRef();
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const positions = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 150,
        y: (Math.random() - 0.5) * 150,
        z: -Math.random() * 400,
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
    positions[positions.length - 1].z = -200;
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

  return (
    <>
    
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <sphereGeometry args={[0.1, 16, 16]} />
      <meshBasicMaterial
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </instancedMesh>
    
</>
  );
}

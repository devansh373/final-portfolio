import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { useRef } from 'react'

function MouseControlledCamera() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position (-1 to 1)
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1

      // Apply simple camera rotation
      camera.position.x = Math.sin(mouse.current.x * Math.PI) * 10
      camera.position.z = Math.cos(mouse.current.x * Math.PI) * 10
      camera.position.y = mouse.current.y * 5

      camera.lookAt(0, 0, 0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [camera])

  return null
}
export default MouseControlledCamera;
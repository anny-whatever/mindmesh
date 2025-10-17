import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion'
import React from 'react'

export default function AnimatedBackground() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 400, damping: 60 })
  const springY = useSpring(mouseY, { stiffness: 400, damping: 60 })
  const radial = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(124,58,237,0.25), rgba(2,6,23,0.0))`

  function onMove(e: React.MouseEvent) {
    const { left, top } = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    mouseX.set(e.clientX - left)
    mouseY.set(e.clientY - top)
  }

  return (
    <motion.div
      onMouseMove={onMove}
      style={{ backgroundImage: radial }}
      className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
    />
  )
}

'use client'
import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

interface Props extends MotionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

const dirs = {
  up:    { y: 36, x: 0 },
  down:  { y: -36, x: 0 },
  left:  { y: 0, x: 36 },
  right: { y: 0, x: -36 },
  none:  { y: 0, x: 0 },
}

export default function AnimatedSection({
  children, className = '', delay = 0, direction = 'up', ...rest
}: Props) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...dirs[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

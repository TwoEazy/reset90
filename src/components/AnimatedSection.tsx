"use client";

import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

type AnimationDirection = "up" | "down" | "left" | "right" | "fade" | "scale";

interface AnimatedSectionProps {
  children: ReactNode;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const getVariants = (
  direction: AnimationDirection
): { hidden: Variant; visible: Variant } => {
  const base = { opacity: 0 };
  const offsets: Record<AnimationDirection, Partial<Variant>> = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
    fade: {},
    scale: { scale: 0.9 },
  };
  return {
    hidden: { ...base, ...offsets[direction] },
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  };
};

export default function AnimatedSection({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: AnimatedSectionProps) {
  const variants = getVariants(direction);
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

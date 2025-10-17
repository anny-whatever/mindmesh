"use client";

import { useEffect, useState } from "react";
import { motion, MotionProps, useScroll, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>;
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();

  // Add smooth spring animation to match Lenis
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500",
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
}

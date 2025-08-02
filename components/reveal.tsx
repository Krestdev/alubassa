"use client";
import { motion } from "framer-motion";
import { revealVariants } from "@/lib/animations";
import React from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
  id?: string;
  y?: number;
  x?: number;
  scale?: number;
  opacity?: number;
  tag?: "div" | "section";
  rotate?: number;
  blur?: number;
  skewX?: number;
  skewY?: number;
  revealType?: "default" | "clip"
}

function Reveal({
  children,
  delay = 0.25,
  className = "",
  opacity = 0,
  duration = 1,
  y = 75,
  x = 0,
  scale = 1,
  tag = "div",
  id,
  rotate = 0,
  blur = 0,
  skewX = 0,
  skewY = 0,
  revealType="default",
}: RevealProps) {
  const scrollRef = React.useRef(null);

  const MotionTag = tag === "section" ? motion.section : motion.div;

  if (revealType === "clip") {
    return (
      <div className={className} style={{ overflow: "hidden" }}>
        <motion.div
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          transition={{ duration, delay, ease: "easeInOut" }}
          viewport={{ root: scrollRef, once: true }}
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <MotionTag
      id={id}
      initial={{
        opacity,
        y,
        x,
        scale,
        rotate,
        filter: blur ? `blur(${blur}px)` : undefined,
        skewX,
        skewY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        skewX: 0,
        skewY: 0,
      }}
      transition={{ duration, delay, ease: "easeInOut" }}
      viewport={{ root: scrollRef, once: true }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;

interface RevealGroupProps extends RevealProps {
  delayGap?: number;
}

export const RevealGroup = ({
  children,
  opacity = 0,
  delay = 0.25,
  delayGap = 0.25,
  className = "",
  duration = 1,
  y = 0,
  x = 0,
  scale = 1,
  tag = "div",
  id,
  rotate = 0,
  blur = 0,
  skewX = 0,
  skewY = 0,
}: RevealGroupProps) => {
  const scrollRef = React.useRef(null);

  const MotionTag = tag === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      id={id}
      initial={{ opacity, y, x, scale, rotate, filter: blur ? `blur(${blur}px)` : undefined, skewX, skewY }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, filter: "blur(0px)", skewX: 0, skewY: 0 }}
      transition={{ duration, delay, staggerChildren: delayGap, when: "beforeChildren" }}
      viewport={{ root: scrollRef, once: true }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity, y, x, scale, rotate, filter: blur ? `blur(${blur}px)` : undefined, skewX, skewY }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotate: 0, filter: "blur(0px)", skewX: 0, skewY: 0 }}
          transition={{ duration, delay: delay + delayGap * index }}
          viewport={{ root: scrollRef, once: true }}
        >
          {child}
        </motion.div>
      ))}
    </MotionTag>
  );
};


type RevealEffectProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  effect?: keyof typeof revealVariants
  tag?: "div" | "section"
  once?: boolean
}

export function RevealEffect({
  children,
  className = "",
  delay = 0.2,
  duration = 0.8,
  effect = "fadeInUp",
  tag = "div",
  once = true,
}: RevealEffectProps) {
  const MotionTag = tag === "section" ? motion.section : motion.div

  const { initial, animate } = revealVariants[effect]

  return (
    <MotionTag
      initial={initial}
      whileInView={animate}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      viewport={{ once }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
"use client";
import { motion } from "framer-motion";
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
}: RevealProps) {
  const scrollRef = React.useRef(null);

  const MotionTag = tag === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      initial={{ opacity: opacity, y: y, x: x, scale: scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{ duration: duration, delay: delay, ease: "easeInOut" }}
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
}: RevealGroupProps) => {
  const scrollRef = React.useRef(null);

  const MotionTag = tag === "section" ? motion.section : motion.div;

  return (
    <MotionTag
      id={id}
      initial={{ opacity: opacity, y: y, x: x, scale: scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      transition={{
        duration: duration,
        delay: delay,
        staggerChildren: delayGap,
        when: "beforeChildren",
      }}
      viewport={{ root: scrollRef, once: true }}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: opacity, y: y, x: x, scale: scale }}
          whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: duration, delay: delay + delayGap*index }}
          viewport={{ root: scrollRef, once: true }}
        >
          {child}
        </motion.div>
      ))}
    </MotionTag>
  );
};
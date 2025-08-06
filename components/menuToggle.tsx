// components/MenuToggle.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";

type Props = {
  isOpen: boolean;
  toggle: () => void;
  color?: string;
};

export default function MenuToggle({ isOpen, toggle, color="#1D4ED8" }: Props) {
  const lineProps = {
    stroke: color, // text-blue-600
    strokeWidth: 2,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: isOpen ? "open" : "closed",
  };

  const variant = {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 6 },
    },
    center: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -6 },
    },
  };

  return (
    <Button
      onClick={toggle}
      variant={"ghost"}
      aria-label="Toggle menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.line
          x1="3"
          y1="6"
          x2="21"
          y2="6"
          variants={variant.top}
          {...lineProps}
        />
        <motion.line
          x1="3"
          y1="12"
          x2="21"
          y2="12"
          variants={variant.center}
          {...lineProps}
        />
        <motion.line
          x1="3"
          y1="18"
          x2="21"
          y2="18"
          variants={variant.bottom}
          {...lineProps}
        />
      </svg>
    </Button>
  );
}

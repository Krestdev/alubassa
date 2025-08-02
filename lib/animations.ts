export const revealVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
  },
  slideLeft: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
  },
  slideRight: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
  },
  flip: {
    initial: { opacity: 0, rotateY: 90 },
    animate: { opacity: 1, rotateY: 0 },
  },
}

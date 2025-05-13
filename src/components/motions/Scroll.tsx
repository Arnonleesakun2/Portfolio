"use client"
import { useScroll } from "motion/react";
import * as motion from "motion/react-client";

const Scroll = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      id="scroll-indicator"
      style={{
        scaleY: scrollYProgress,
        position: "fixed",
        top: 0,
        right: 0,
        width: 10,
        height: "100vh",
        originY: 0,
        backgroundColor: "#FFB900",
        zIndex: 100,
      }}
    />
  );
};
export default Scroll;

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText({ children }) {
  const ref = useRef(null);

  // Track when the element is in view (50% visible)
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }        // ENTER animation
          : { opacity: 0, y: -40 }      // EXIT animation
      }
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

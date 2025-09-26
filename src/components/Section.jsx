import { motion, useAnimation, useInView, useReducedMotion } from "framer-motion";
import clsx from "clsx";
import { useEffect, useRef } from "react";

export default function Section({
  id,
  className = "",
  children,
  amount = 0.3, 
  delay = 0,
}) {
  const prefersReduced = useReducedMotion();
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 24 },
    visible: {
      opacity: 1, y: 0,
      transition: {
        duration: prefersReduced ? 0 : 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      },
    },
  };

  return (
    <motion.section
      id={id}
      ref={ref}
      className={clsx("scroll-mt-24 w-full", className)}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
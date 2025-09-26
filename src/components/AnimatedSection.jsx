import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedSection({ children }) {
  const r = useReducedMotion();
  
  return (
    <motion.div
      initial={r ? false : { opacity: 0, y: 24, scale: 0.98 }}
      whileInView={r ? {} : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
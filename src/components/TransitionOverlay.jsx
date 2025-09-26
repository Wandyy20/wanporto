import { motion } from "framer-motion";

export default function TransitionOverlay() {
  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-[60] bg-slate-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22,1,0.36,1] }}
    />
  );
}
'use client';

import { motion } from 'framer-motion';

export default function Loader({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <video 
        autoPlay 
        muted 
        playsInline 
        onEnded={onComplete}
        className="w-full h-full object-cover"
      >
        <source src="/images/loading.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}

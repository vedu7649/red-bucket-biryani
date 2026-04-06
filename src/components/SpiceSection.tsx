

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function SpiceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-end justify-center max-w-7xl mx-auto px-12 md:px-24"
    >
      <div className="relative w-full max-w-2xl text-right">
        {/* Floating Decoration */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 right-full mr-20 text-yellow-500/10 blur-sm pointer-events-none"
        >
          <Leaf size={240} strokeWidth={0.2} />
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          The Soul of <span className="text-yellow-600">Saffron</span>
        </h2>
        <p className="text-white/60 text-lg md:text-2xl mt-10 font-light leading-relaxed">
          The world&apos;s most precious spice, steeped for 12 hours to release the golden essence that defines every grain.
        </p>
        
        <div className="flex gap-16 mt-20 justify-end">
           <div className="flex flex-col items-end">
              <span className="text-yellow-500 text-4xl md:text-5xl font-black">12h</span>
              <span className="text-white/30 text-xs uppercase tracking-[0.3em] mt-3 font-bold">Steeping</span>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-yellow-500 text-4xl md:text-5xl font-black">21</span>
              <span className="text-white/30 text-xs uppercase tracking-[0.3em] mt-3 font-bold">Spices</span>
           </div>
           <div className="flex flex-col items-end">
              <span className="text-yellow-500 text-4xl md:text-5xl font-black">100%</span>
              <span className="text-white/30 text-xs uppercase tracking-[0.3em] mt-3 font-bold">Natural</span>
           </div>
        </div>
      </div>
    </motion.section>
  );
}

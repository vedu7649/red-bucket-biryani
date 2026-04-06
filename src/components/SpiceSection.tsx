import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

export default function SpiceSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center md:items-end justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-24"
    >
      <div className="relative w-full max-w-2xl text-center md:text-right">
        {/* Floating Decoration */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-10 md:-top-20 md:right-full mr-0 md:mr-20 text-yellow-500/10 blur-sm pointer-events-none"
        >
          <Leaf size={150} className="md:w-[240px] md:h-[240px]" strokeWidth={0.2} />
        </motion.div>

        <h2 className="text-4xl md:text-6xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-none">
          The Soul of <span className="text-yellow-600">Saffron</span>
        </h2>
        <p className="text-white/60 text-base md:text-xl lg:text-2xl mt-6 md:mt-10 font-light leading-relaxed">
          The world&apos;s most precious spice, steeped for 12 hours to release the golden essence that defines every grain.
        </p>
        
        <div className="flex gap-8 md:gap-16 mt-12 md:mt-20 justify-center md:justify-end">
           <div className="flex flex-col items-center md:items-end">
              <span className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-black">12h</span>
              <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3 font-bold">Steeping</span>
           </div>
           <div className="flex flex-col items-center md:items-end">
              <span className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-black">21</span>
              <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3 font-bold">Spices</span>
           </div>
           <div className="flex flex-col items-center md:items-end">
              <span className="text-yellow-500 text-3xl sm:text-4xl md:text-5xl font-black">100%</span>
              <span className="text-white/30 text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] mt-2 md:mt-3 font-bold">Natural</span>
           </div>
        </div>
      </div>
    </motion.section>
  );
}

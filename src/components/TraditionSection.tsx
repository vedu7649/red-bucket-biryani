

import { motion } from "framer-motion";

export default function TraditionSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-start justify-center max-w-7xl mx-auto px-12 md:px-24"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col text-left space-y-10">
           <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
             The Ancient <span className="text-red-500">Dum</span> Heritage
           </h2>
           <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed max-w-xl">
             Sealed with dough. Smothered in embers. The &quot;Dum&quot; process locks every molecule of aroma within the bucket.
           </p>
           
           <div className="flex gap-8">
              <div className="bg-white/5 backdrop-blur-3xl p-6 rounded-2xl border border-white/10">
                 <h3 className="text-white/40 font-bold tracking-[0.2em] text-[10px] uppercase">Slow Cooked</h3>
                 <p className="text-red-600 text-3xl font-black mt-2">6 Hours</p>
              </div>
              <div className="bg-white/5 backdrop-blur-3xl p-6 rounded-2xl border border-white/10">
                 <h3 className="text-white/40 font-bold tracking-[0.2em] text-[10px] uppercase">Temperature</h3>
                 <p className="text-red-600 text-3xl font-black mt-2">Constant</p>
              </div>
           </div>
        </div>
        
        <div className="relative group w-full">
           <div className="absolute -inset-4 blur-3xl bg-red-600/5 transition group-hover:bg-red-600/10" />
           <div className="relative border border-white/10 bg-black/40 backdrop-blur-3xl p-10 md:p-14 rounded-3xl overflow-hidden">
              <p className="text-white/80 text-xl md:text-2xl font-light italic leading-relaxed">
                &quot;Not just a meal, but a legacy preserved in time. Every bucket tells the story of thousand-year-old techniques.&quot;
              </p>
              <div className="mt-12 flex items-center space-x-6">
                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-white/20" />
                 <div>
                    <p className="text-white text-xs font-black uppercase tracking-tighter">Master Chef</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">Nizam&apos;s Secret Heritage</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </motion.section>
  );
}

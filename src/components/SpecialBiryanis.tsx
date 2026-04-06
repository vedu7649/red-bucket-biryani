

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const biryanis = [
  {
    name: "Chicken Biryani",
    description: "Juicy, spice-marinated chicken layered with saffron-infused basmati rice, slow-cooked for deep aroma and rich flavor.",
    image: "/chicken_bucket_biryani_premium.png",
    badge: "Bestseller",
    spiceLevel: "Medium"
  },
  {
    name: "Fish Biryani",
    description: "Golden-fried fish fillets delicately layered with fragrant rice, infused with coastal spices and fresh herbs.",
    image: "/fish_bucket_biryani_premium.png",
    badge: "Chef’s Special",
    spiceLevel: "Medium"
  },
  {
    name: "Mutton Biryani",
    description: "Tender, slow-cooked bone-in mutton infused with bold spices, delivering a deep, smoky richness in every bite.",
    image: "/mutton_bucket_biryani_premium.png",
    badge: "Premium",
    spiceLevel: "High"
  },
  {
    name: "Egg Biryani",
    description: "Perfectly boiled eggs nestled in aromatic basmati rice, enriched with caramelized onions and subtle spice layers.",
    image: "/egg_bucket_biryani_premium.png",
    badge: "Classic",
    spiceLevel: "Low"
  },
  {
    name: "Prawn Biryani",
    description: "Succulent prawns cooked in a rich masala base, layered with fragrant rice for a bold and coastal flavor profile.",
    image: "/prawn_bucket_biryani_premium.png",
    badge: "Premium",
    spiceLevel: "Medium"
  },
  {
    name: "Veg Biryani",
    description: "A vibrant medley of fresh vegetables and aromatic spices, slow-cooked with basmati rice for a wholesome experience.",
    image: "/veg_bucket_biryani_premium.png",
    badge: "Healthy",
    spiceLevel: "Low"
  }
];

function BiryaniCardContent({ item, isMobile = false }: { item: any; isMobile?: boolean }) {
  return (
    <>
      {/* IMAGE */}
      <div className="relative h-full w-full">
        <img
          src={item.image}
          alt={item.name}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${!isMobile ? 'group-hover:scale-110 group-hover:brightness-110' : ''}`}
        />

        {/* DARK GRADIENT */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 ${!isMobile ? 'group-hover:opacity-70' : ''} transition duration-500`} />

        {/* TOP GLOW */}
        <div className={`absolute inset-0 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition duration-700 bg-[radial-gradient(circle_at_50%_20%,rgba(255,120,0,0.15),transparent_60%)]`} />
      </div>

      {/* BADGE + SPICE LEVEL */}
      <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-20 pr-4">
        {item.badge && (
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20">
            {item.badge}
          </span>
        )}
        {item.spiceLevel && (
          <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-red-500/10 text-red-400 border border-red-500/20 backdrop-blur-md">
            🌶 {item.spiceLevel}
          </span>
        )}
      </div>

      {/* CONTENT */}
      <div className={`absolute bottom-0 left-0 w-full z-10 ${isMobile ? 'p-6' : 'p-10'}`}>
        {/* TITLE */}
        <h3 className={`font-black text-white uppercase tracking-tight mb-3 ${isMobile ? "text-2xl" : "text-3xl transition-transform duration-500 group-hover:-translate-y-2"}`}>
          {item.name}
        </h3>

        {/* DESCRIPTION */}
        <p className={`text-white/60 text-sm font-light leading-relaxed mb-6 transition-all duration-500 ${isMobile ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}`}>
          {item.description}
        </p>

        {/* LINE */}
        <div className={`w-12 h-[2px] bg-gradient-to-r from-red-600 to-orange-400 rounded-full origin-left transition-transform duration-500 ${isMobile ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      </div>

      {/* BORDER */}
      <div className={`pointer-events-none absolute inset-0 border transition duration-500 ${isMobile ? 'rounded-2xl border-white/10' : 'rounded-2xl border-white/5 group-hover:border-white/10'}`} />
    </>
  );
}

export default function SpecialBiryanis() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [desktopIndex, setDesktopIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % biryanis.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + biryanis.length) % biryanis.length);

  const maxDesktopIndex = Math.max(0, biryanis.length - 3);
  const nextDesktop = () => setDesktopIndex((prev) => Math.min(prev + 1, maxDesktopIndex));
  const prevDesktop = () => setDesktopIndex((prev) => Math.max(prev - 1, 0));

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-24">
      <div className="flex flex-col space-y-12 md:space-y-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
              Our Special <span className="text-red-600">Biryanis</span>
            </h2>
            <p className="text-white/40 text-lg md:text-2xl mt-10 font-light leading-relaxed">
              Carefully curated varieties that have defined our legacy for over three decades.
            </p>
          </div>
          
          {/* Controls - Desktop */}
          <div className="hidden md:flex gap-4 mb-6">
            <button 
              onClick={prevDesktop} 
              disabled={desktopIndex === 0}
              className={`p-4 rounded-full border transition-all ${desktopIndex === 0 ? 'border-white/5 opacity-30 cursor-not-allowed text-white/50' : 'border-white/10 hover:bg-white/10 text-white backdrop-blur-md shadow-lg'}`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextDesktop} 
              disabled={desktopIndex === maxDesktopIndex}
              className={`p-4 rounded-full border transition-all ${desktopIndex === maxDesktopIndex ? 'border-white/5 opacity-30 cursor-not-allowed text-white/50' : 'border-white/10 hover:bg-white/10 text-white backdrop-blur-md shadow-lg'}`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* DESKTOP CAROUSEL */}
        <div className="hidden md:block relative w-full pt-4">
          <div className="relative w-full overflow-hidden">
            <motion.div 
               className="flex -mx-6"
               animate={{ x: `-${desktopIndex * (100 / 3)}%` }} 
               transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
               {biryanis.map((item, idx) => (
                  <div key={item.name} className="min-w-[33.333333%] px-6">
                     <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10"
                      >
                         <div className="group relative h-[500px] w-full overflow-hidden rounded-2xl bg-[#050505]">
                           <BiryaniCardContent item={item} />
                         </div>
                     </motion.div>
                  </div>
               ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE CAROUSEL */}
        <div className="flex md:hidden flex-col items-center relative w-full pt-4">
          {/* Use negative margin to stretch the carousel horizontally past the container padding */}
          <div className="relative w-[calc(100vw-1rem)] h-[450px] flex items-center justify-center overflow-hidden">
            <AnimatePresence initial={false}>
              {biryanis.map((item, idx) => {
                let offset = idx - currentIndex;
                const total = biryanis.length;
                // Keep offset in bounds -3..+2 depending on total
                if (offset < -Math.floor(total / 2)) offset += total;
                if (offset > Math.floor(total / 2)) offset -= total;
                
                // Only render near items to save DOM nodes and clean overlapping
                if (Math.abs(offset) > 2) return null;

                const isActive = offset === 0;

                return (
                  <motion.div
                    key={item.name}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.85,
                      x: `${offset * 85}%`,
                      opacity: Math.abs(offset) <= 1 ? (isActive ? 1 : 0.4) : 0,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                    }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute w-[80%] max-w-sm"
                    style={{
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div className={`relative h-[420px] w-full overflow-hidden rounded-2xl bg-[#050505] border border-white/10 ${!isActive ? 'shadow-[0_0_30px_rgba(0,0,0,0.8)]' : 'shadow-none'}`}>
                      <BiryaniCardContent item={item} isMobile />
                      
                      {/* Shadow Overlay for non-active cards */}
                      {!isActive && (
                         <div className="absolute inset-0 bg-black/40 z-30 pointer-events-none rounded-2xl transition-opacity duration-500" />
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8 z-20">
            <button 
              onClick={prevSlide} 
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all active:scale-95 backdrop-blur-md shadow-lg"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextSlide} 
              className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/20 transition-all active:scale-95 backdrop-blur-md shadow-lg"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


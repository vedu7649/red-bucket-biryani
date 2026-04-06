

import { useEffect, useState } from "react";

import { preloadImages } from "@/lib/preloadImages";
import CanvasSequence from "./CanvasSequence";
import SpiceSection from "./SpiceSection";
import TraditionSection from "./TraditionSection";
import BrandAbout from "./BrandAbout";
import SpecialBiryanis from "./SpecialBiryanis";
import Testimonials from "./Testimonials";
import SiteFooter from "./SiteFooter";
import { useMotionValueEvent, motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FRAME_COUNT = 240;

export default function ScrollScene() {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Separate scroll tracking for the cinematic section
  const cinematicRef = useRef(null);
  const { scrollYProgress: cinematicProgress } = useScroll({
    target: cinematicRef,
    offset: ["start start", "end end"]
  });

  // Frames play through the entire duration of the cinematic section (600vh)
  const frame = useTransform(cinematicProgress, [0, 1], [0, FRAME_COUNT - 1]);

  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Pass callback to unlock UI after INITIAL_FRAMES are loaded
    const onInitialLoad = () => setIsLoaded(true);
    const imgs = preloadImages(FRAME_COUNT, onInitialLoad);
    
    setImages(imgs);
    
    // Safety fallback if network is stuck
    const timer = setTimeout(() => setIsLoaded(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  useMotionValueEvent(frame, "change", (latest) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    
    rafId.current = requestAnimationFrame(() => {
      setFrameIndex(Math.min(Math.floor(latest), FRAME_COUNT - 1));
    });
  });

  // Cinematic Visual Effects (Zoom/Dim)
  const canvasScale = useTransform(cinematicProgress, [0.8, 1], [1, 1.1]);
  const canvasOpacity = useTransform(cinematicProgress, [0.9, 1], [1, 0.4]);

  // Cinematic Overlays
  const heroOpacity = useTransform(cinematicProgress, [0, 0.05], [1, 0]);
  const explosionTextOpacity = useTransform(cinematicProgress, [0.08, 0.15, 0.35, 0.42], [0, 1, 1, 0]);
  const reassembleTextOpacity = useTransform(cinematicProgress, [0.45, 0.55, 0.85, 0.95], [0, 1, 1, 0]);

  return (
    <div className="relative bg-[#050505]">
      {/* PHASE 1: THE ASSEMBLY (Cinematic Sequence) */}
      <div id="home" ref={cinematicRef} className="h-[600vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* Background Canvas */}
          <motion.div 
            style={{ scale: canvasScale, opacity: canvasOpacity }}
            className="absolute inset-0 w-full h-full"
          >
            <CanvasSequence images={images} frameIndex={frameIndex} />
          </motion.div>
          
          {/* Loading Overlay */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
              <div className="text-white text-xl font-light tracking-widest animate-pulse">
                PREPARING THE FEAST...
              </div>
            </div>
          )}

          {/* Hero Section */}
          <motion.div
            style={{ opacity: heroOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12"
          >
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter mix-blend-difference">
              Red Bucket <span className="text-red-600">Biryani</span>
            </h1>
            <p className="text-white/60 text-base md:text-xl lg:text-2xl mt-4 md:mt-6 max-w-2xl font-light tracking-wide leading-relaxed">
              The art of slow-cooked perfection, deconstructed for the senses.
            </p>
          </motion.div>

          {/* Intro Overlay - Exploded Ingredients */}
           {/* <motion.div
            style={{ opacity: explosionTextOpacity }}
            className="absolute inset-0 flex flex-col items-start justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pointer-events-none"
          >
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight mix-blend-difference">
                Exploded <span className="text-yellow-500">Ingredients</span>
              </h2>
              <p className="text-white/70 text-base md:text-xl lg:text-2xl mt-4 md:mt-6 font-light leading-relaxed mix-blend-difference">
                Every spice, grain, and tender piece is selected with obsession.
              </p>
            </div>
          </motion.div> */}

          {/* Reassembly Phase */}
          {/* <motion.div
            style={{ opacity: reassembleTextOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 pointer-events-none"
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase tracking-tight mix-blend-difference">
              Masterful <span className="text-red-500">Alchemy</span>
            </h2>
            <p className="text-white/70 text-base md:text-xl lg:text-2xl mt-6 md:mt-8 max-w-xl font-light mix-blend-difference">
              Watch the elements unite within our signature red bucket.
            </p>
          </motion.div> */} 
        </div>
      </div>

      {/* PHASE 2: THE SECRETS (Detailed Information Sections) */}
      <div className="relative z-10 w-full overflow-hidden bg-gradient-to-b from-transparent to-black">
        <div className="py-40 space-y-[40vh] pb-60 flex flex-col">

          <div id="about"><BrandAbout /></div>
          <div id="ingredients"><SpiceSection /></div>
          <div id="menu"><SpecialBiryanis /></div>
          <div id="process"><TraditionSection /></div>
          <div id="testimonials"><Testimonials /></div>
        </div>
        
        {/* Full Footer Integration */}
        <div id="contact"><SiteFooter /></div>
      </div>
    </div>
  );
}

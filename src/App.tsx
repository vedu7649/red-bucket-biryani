import { useRef } from "react";
import Navbar from "@/components/Navbar";
import ScrollScene from "@/components/ScrollScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const containerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(buttonsRef.current?.children || [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=0.6")
    .from(footerRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4");
  }, { scope: containerRef });

  return (
    <main className="relative bg-[#050505]">
      <Navbar />
      <ScrollScene />
      
      {/* Footer / CTA Section */}
      <section ref={containerRef} className="h-screen flex flex-col items-center justify-center bg-black px-6 text-center overflow-hidden">
        <h2 ref={titleRef} className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 bg-clip-text">
          Ready for the <span className="text-red-500">Real Deal?</span>
        </h2>
        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-6">
          <button className="px-12 py-4 rounded-full bg-red-600 hover:bg-red-700 text-white font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(220,38,38,0.4)]">
            Order for Home
          </button>
          <button className="px-12 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
            Find Locations
          </button>
        </div>
        <div ref={footerRef} className="mt-20 text-white/30 text-xs font-bold uppercase tracking-[0.4em]">
          © 2026 RED BUCKET BIRYANI | MASTERED OVER EMBERS
        </div>
      </section>
    </main>
  );
}

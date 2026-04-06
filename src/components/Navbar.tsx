

import { motion, useScroll, useTransform } from "framer-motion";

export default function Navbar() {
  const { scrollY } = useScroll();

  // Dynamics for full-width sticky navbar
  // Starts more transparent, becomes dense on scroll
  const navbarOpacity = useTransform(scrollY, [0, 100], [0.3, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 20]);
  const navbarBorderColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(" ", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navLinks: Record<string, string> = {
    "Home": "home",
    "About Us": "about",
    "Our Menu": "menu",
    "Contact Us": "contact"
  };

  return (
    <motion.nav
      style={{ 
        opacity: navbarOpacity,
        backdropFilter: `blur(${backdropBlur}px)`,
        borderColor: navbarBorderColor
      }}
      className="sticky top-0 w-full z-[100] px-8 md:px-16 py-4 flex justify-between items-center bg-black/20 border-b transition-[backdrop-filter,background] duration-500"
    >
      {/* Brand - Left */}
      <div 
        onClick={() => scrollToSection("home")}
        className="cursor-pointer text-white font-black uppercase tracking-tighter text-xl md:text-2xl group flex items-center space-x-2"
      >
        <span className="text-red-600 group-hover:text-red-400 transition-colors">Red</span>
        <span>Bucket</span>
      </div>

      {/* Links - Center (hidden on mobile) */}
      <div className="hidden xl:flex gap-8 text-white/40 text-[9px] font-bold uppercase tracking-[0.3em] items-center">
        {Object.keys(navLinks).map((link) => (
          <button 
            key={link}
            onClick={() => scrollToSection(navLinks[link])} 
            className="hover:text-white transition-all hover:tracking-[0.5em] duration-300"
          >
            {link}
          </button>
        ))}
      </div>

      {/* Action - Right */}
      <button 
        onClick={() => scrollToSection("menu")}
        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 active:scale-95 transition-all shadow-xl shadow-red-900/10"
      >
        Order Experience
      </button>
    </motion.nav>
  );
}

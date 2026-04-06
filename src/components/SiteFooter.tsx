

import { Phone, Mail, Globe, Share2, ShieldCheck } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="w-full bg-[#050505] pt-40 pb-20 px-12 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <h4 className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
              Red <span className="text-red-600">Bucket</span> Biryani
            </h4>
            <p className="text-white/40 text-sm font-light leading-relaxed">
              Serving the authentic Hyderabadi flavor with over 30 years of dedicated culinary expertise.
            </p>
            <div className="flex space-x-6">
              {[Globe, Share2].map((Icon, idx) => (
                <div key={idx} className="p-2 border border-white/10 rounded-full text-white/40 hover:text-red-500 hover:border-red-500 transition-all cursor-pointer">
                  <Icon size={18} strokeWidth={1.5} />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Contact Us</h5>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Phone size={14} className="text-red-600" />
                <span className="text-white/40 text-sm font-light">+91 9063 494006</span>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <Mail size={14} className="text-red-600" />
                  <span className="text-white/40 text-sm font-light">support@redbucketbiryani.com</span>
                </div>
                <div className="flex items-center space-x-4 ml-8">
                  <span className="text-white/20 text-sm font-light italic">redbucketbiryani@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Quick Links</h5>
            <div className="grid grid-cols-1 gap-4">
              {["About Us", "Locations", "Gallery", "Franchise", "Contact Us"].map((link) => (
                <a key={link} href="#" className="text-white/40 text-sm font-light hover:text-white transition-colors capitalize">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h5 className="text-white font-bold uppercase tracking-[0.2em] text-[10px]">Policy</h5>
            <div className="grid grid-cols-1 gap-4">
              {["Sitemap", "Privacy Policy", "Terms of Service"].map((link) => (
                <div key={link} className="flex items-center space-x-4 group cursor-pointer">
                  <ShieldCheck size={12} className="text-white/10 group-hover:text-red-600 transition-colors" />
                  <span className="text-white/40 text-sm font-light group-hover:text-white transition-colors">{link}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col space-y-1 items-center md:items-start">
            <p className="text-white/20 text-[10px] font-bold uppercase tracking-widest">
              © 2022-2026 RED BUCKET BIRYANI ™. ALL RIGHTS RESERVED.
            </p>
            <p className="text-white/10 text-[9px] uppercase tracking-widest">
              DESIGNED & DEVELOPED BY GAMENEXA STUDIOS PVT LTD.
            </p>
          </div>
          <div className="bg-red-600/5 border border-red-600/20 px-6 py-2 rounded-full">
            <span className="text-red-600/80 text-[10px] font-black uppercase tracking-[0.3em]">The Hub of Best Hyderabadi</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

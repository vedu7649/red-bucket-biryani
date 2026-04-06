

import { History, Award, CheckCircle } from "lucide-react";

export default function BrandAbout() {
  return (
    <section className="max-w-7xl mx-auto px-12 md:px-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="space-y-12 flex-1 w-full">
          <div className="flex flex-col space-y-6">
            <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">
              A Legacy of <span className="text-red-700">Hub Excellence</span>
            </h2>
            <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed">
              We are the hub of the best Hyderabadi biryani. Coming to you with more than three decades of experience, Red Bucket Biryani is a well-known name.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 w-full">
            <div className="flex-1 flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10 min-w-0">
              <div className="bg-red-600/10 p-3 rounded-xl border border-red-600/20 shrink-0">
                <History className="text-red-600" size={24} />
              </div>
              <div className="space-y-2 min-w-0">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] truncate">30+ Years</h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">Three decades of culinary mastery.</p>
              </div>
            </div>
            <div className="flex-1 flex items-start space-x-6 p-6 rounded-3xl bg-white/5 border border-white/10 min-w-0">
              <div className="bg-red-600/10 p-3 rounded-xl border border-red-600/20 shrink-0">
                <Award className="text-red-600" size={24} />
              </div>
              <div className="space-y-2 min-w-0">
                <h4 className="text-white font-bold uppercase tracking-widest text-[10px] truncate">Expertise</h4>
                <p className="text-white/40 text-xs font-light leading-relaxed">Known as an amazing center of delicious biryani.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative group w-full flex-1 mt-8 lg:mt-0">
          <div className="absolute -inset-10 blur-3xl bg-red-600/5 transition group-hover:bg-red-600/10 pointer-events-none" />
          <div className="relative bg-white/5 border border-white/10 p-12 md:p-16 rounded-[48px] backdrop-blur-3xl space-y-10 w-full">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-red-600 shrink-0" />
              <span className="text-red-600 font-black uppercase text-[10px] tracking-[0.4em]">Our Mission</span>
            </div>
            <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed">
              &quot;We aim to prepare lip-smacking dishes using natural ingredients and unique culinary techniques. We ensure that our delicacies will not only pamper your taste palette but also steal your heart.&quot;
            </p>
            <div className="flex flex-col space-y-4">
              {["100% Natural Ingredients", "Unique Culinary Techniques", "Wholesome Experience", "Unparalleled Dum Taste"].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <CheckCircle size={14} className="text-red-600 shrink-0" />
                  <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

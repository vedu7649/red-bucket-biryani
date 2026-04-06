import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Saragandla Santhu",
    stars: 5,
    text: "I had never tasted prawns biryani before coming here. The Hyderabadi biryani and the chicken dum biryani are the best dishes here in my opinion. Apart from the amazing food, this family restaurant also has the perfect homely atmosphere.",
  },
  {
    name: "Spoorthi S",
    stars: 5,
    text: "I simply love the mutton bucket biryani available here! It’s so yummy! The in-house recipes of this restaurant are truly a value for money. After I tasted the chicken 65 biryani here, I have never been to any other place.",
  },
  {
    name: "Vinutha H",
    stars: 5,
    text: "I am a great biryani lover. I have tasted biryani from almost all the stores in the town. But the taste of the dum biryani here is unparalleled. This is the best!",
  },
  {
    name: "Suman K.",
    stars: 5,
    text: "Red bucket is better than any other shops in Suryapet. Once, I searched for the best bucket biryani near me and I was recommended this place. Since then, I have been a fan of their food. The most convenient part is that you can directly place your order from Swiggy.",
  },
  {
    name: "Prashanth D.",
    stars: 5,
    text: "Out of all the items on the menu, I love bucket chicken biryani. It tastes delicious and has a nice fragrance. The chicken biryani is also very yummy. This is undoubtedly the tastiest biryani I have ever had!",
  }
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col space-y-12 md:space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Praise From Our <span className="text-red-600">Patrons</span>
          </h2>
          <p className="text-white/40 text-base md:text-xl mt-6 md:mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            We aim to prepare lip-smacking dishes using natural ingredients and unique culinary techniques.
          </p>
        </div>

        <div className="relative w-[100vw] left-1/2 -ml-[50vw] overflow-hidden py-4 px-6 md:px-0">
          <motion.div
            className="flex gap-6 md:gap-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.name}-${idx}`}
                className="w-[85vw] sm:w-[400px] md:w-[450px] shrink-0 bg-white/5 border border-white/10 p-8 sm:p-10 rounded-3xl md:rounded-[40px] relative overflow-hidden group hover:bg-white/10 transition-colors"
              >
                <Quote className="absolute top-6 sm:top-8 right-6 sm:right-8 text-white/5 transition-transform group-hover:scale-125" size={60} />
                <div className="relative">
                  <div className="flex gap-1 mb-6">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={14} className="fill-red-600 text-red-600" />
                    ))}
                  </div>
                  <p className="text-white/80 text-base md:text-lg font-light leading-relaxed mb-8 md:mb-10 italic">
                    &quot;{review.text}&quot;
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-white/10 flex items-center justify-center text-white font-black text-xs shrink-0">
                      {review.name[0]}
                    </div>
                    <div>
                      <h4 className="text-white font-black uppercase text-xs tracking-widest">{review.name}</h4>
                      <p className="text-white/20 text-[10px] uppercase font-bold tracking-tighter">Verified Patron</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

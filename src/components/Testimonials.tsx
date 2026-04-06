

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
    <section className="max-w-7xl mx-auto px-12 md:px-24">
      <div className="flex flex-col space-y-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
            Praise From Our <span className="text-red-600">Patrons</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            We aim to prepare lip-smacking dishes using natural ingredients and unique culinary techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white/5 border border-white/10 p-10 rounded-[40px] relative overflow-hidden group hover:bg-white/10 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-white/5 transition-transform group-hover:scale-125" size={80} />
              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-red-600 text-red-600" />
                  ))}
                </div>
                <p className="text-white/80 text-lg font-light leading-relaxed mb-10 italic">
                  &quot;{review.text}&quot;
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-900 border border-white/10 flex items-center justify-center text-white font-black text-xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-black uppercase text-xs tracking-widest">{review.name}</h4>
                    <p className="text-white/20 text-[10px] uppercase font-bold tracking-tighter">Verified Patron</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { signatureDishes } from "../data/content";


export default function Signature() {
  return (
    <section id="signature" className="py-24 sm:py-32 bg-olive-deep text-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-[640px] mb-14">
          <div className="font-display italic text-sage text-sm mb-3">Signature dishes</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight">
            Four plates the regulars order without looking at the menu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brass/20 border border-brass/20">
          {signatureDishes.map((dish, i) => (
            <motion.article
              key={dish.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-olive-deep group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={dish.img}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-[11px] uppercase tracking-wider text-brass-light/80 mb-2">
                  {dish.tag}
                </div>
                <h3 className="font-display text-xl mb-2">{dish.name}</h3>
                <p className="text-sm text-ivory/60 mb-5 min-h-[42px]">{dish.desc}</p>
                <div className="font-display italic text-brass-light text-lg">{dish.price}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import React from "react";
import { images, chef } from "../data/content";

export default function Chef() {
  return (
    <section id="chef" className="py-24 sm:py-32 bg-parchment">
      <div className="max-w-content mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[3/4] border border-brass/30 overflow-hidden"
        >
          <img
            src={images.platingHands}
            alt="Chef Armaan Kapoor plating a dish at the pass"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-3.5 border border-brass-light/40 pointer-events-none" />
        </motion.div>

        <div>
          <div className="font-display italic text-wine text-sm mb-3">Head chef</div>
          <h2 className="font-display text-[30px] mb-1">{chef.name}</h2>
          <div className="font-display italic text-wine text-sm mb-7">{chef.role}</div>
          {chef.bio.map((p, i) => (
            <p key={i} className="text-[#3a3a30] max-w-[60ch] mb-4 leading-relaxed">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-8 mt-9">
            {chef.timeline.map((t) => (
              <div key={t.year} className="border-t border-brass pt-2.5 min-w-[130px]">
                <div className="font-display text-wine text-[15px]">{t.year}</div>
                <div className="text-[12.5px] text-[#6b6552] mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

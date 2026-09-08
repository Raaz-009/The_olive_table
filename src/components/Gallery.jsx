import { motion } from "framer-motion";
import { images } from "../data/content";

const items = [
  { img: images.platingHands, tag: "The pass, service hour", span: "sm:col-span-2 sm:row-span-2" },
  { img: images.winePour, tag: "Wine, poured", span: "" },
  { img: images.heroInterior, tag: "Table setting", span: "" },
  { img: images.fishPlate, tag: "From the kitchen", span: "" },
  { img: images.grilledMeat, tag: "Live fire", span: "sm:col-span-2 sm:row-span-2" },
  { img: images.chocolateDessert, tag: "To finish", span: "" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-olive-deep text-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-[640px] mb-14">
          <div className="font-display italic text-sage text-sm mb-3">Gallery</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight">
            Notes from the dining room and the pass
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[140px] sm:auto-rows-[130px] gap-2.5">
          {items.map((it, i) => (
            <motion.div
              key={it.tag}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden border border-brass/15 group ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.tag}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-3 font-display italic text-[11.5px] text-ivory/85">
                {it.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

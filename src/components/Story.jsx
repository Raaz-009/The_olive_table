import { motion } from "framer-motion";
import { images } from "../data/content";

export default function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="border border-brass/25 p-3 bg-gradient-to-br from-white to-parchment"
        >
          <img
            src={images.platingHands}
            alt="A plate being finished in the kitchen at The Olive Table"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="mt-4 font-display italic text-sm text-[#6b6552]">
            The pass, twenty minutes before doors open.
          </div>
        </motion.div>

        <div>
          <div className="font-display italic text-wine text-sm mb-3">Our story</div>
          <h2 className="font-display text-[32px] sm:text-[38px] leading-tight mb-6">
            Built on one long table, and a stubborn idea about olive oil
          </h2>
          <p className="text-[#3a3a30] max-w-[56ch] mb-5 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:leading-[0.7] first-letter:float-left first-letter:pr-2.5 first-letter:pt-1.5 first-letter:text-wine first-letter:font-medium">
            The Olive Table began as a single reclaimed teak table set up in a
            Bandra courtyard, where founders Meher and Rohan Shroff served a
            five-course dinner to twelve strangers once a week. The idea was
            simple: cook the way their grandmothers cooked on the Konkan
            coast, but let the ingredient do the talking — starting with the
            oil.
          </p>
          <p className="text-[#3a3a30] max-w-[56ch] mb-8 leading-relaxed">
            Eleven years on, the courtyard has grown into two dining rooms and
            a private cellar, but the table never changed its manners.
            Everything is still cooked over live fire, dressed at the last
            second, and brought out by the people who made it.
          </p>
          <blockquote className="border-l-2 border-brass pl-6 font-display italic text-xl text-olive-deep">
            "We never wanted a menu that impressed. We wanted one that made
            you stay for a second glass of wine."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

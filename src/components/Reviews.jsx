import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "../data/content";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-[640px] mb-14">
          <div className="font-display italic text-wine text-sm mb-3">In their words</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight">
            What the regulars say after the second glass
          </h2>
        </div>
      </div>

      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brass/20 border border-brass/20">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-ivory p-8"
            >
              <div className="flex gap-1 mb-4 text-brass">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    strokeWidth={0}
                    opacity={idx < r.stars ? 1 : 0.3}
                  />
                ))}
              </div>
              <p className="font-display italic text-[17px] leading-relaxed text-ink mb-6">
                "{r.quote}"
              </p>
              <div className="text-[13.5px]">
                <div className="font-medium text-ink">{r.name}</div>
                <div className="text-[#8a8371] mt-0.5">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

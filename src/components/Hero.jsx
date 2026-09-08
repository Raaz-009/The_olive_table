import { motion } from "framer-motion";
import { images } from "../data/content";

const BranchSVG = ({ className }) => (
  <svg className={className} viewBox="0 0 200 400" fill="none">
    <path d="M100 10c-40 60-40 120 0 180s40 120 0 180" stroke="#d6b876" strokeWidth="1" />
    <path
      d="M100 60c20-10 40-8 55 10M100 100c-25-8-45-2-58 18M100 150c22-10 44-6 58 12M100 200c-24-6-46 2-58 20M100 250c20-8 42-4 55 14M100 300c-22-8-44 0-56 18"
      stroke="#d6b876"
      strokeWidth="0.8"
    />
  </svg>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={images.heroInterior}
          alt="The dining room at The Olive Table, set for evening service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-olive-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />
      </div>

      <BranchSVG className="absolute top-[6%] right-[-4%] w-[420px] opacity-40 rotate-12 pointer-events-none hidden md:block" />

      <div className="relative z-10 max-w-content mx-auto w-full px-6 sm:px-8 pt-36 pb-24 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-end">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="font-display italic text-sage text-sm sm:text-base mb-5">
            Bandra West, Mumbai — est. 2014
          </div>
          <h1 className="font-display font-normal text-ivory text-[42px] sm:text-6xl lg:text-[74px] leading-[1.05]">
            An unhurried table,
            <br />
            dressed in <em className="italic text-brass-light">olive</em> and gold.
          </h1>
          <p className="mt-6 max-w-[480px] text-ivory/80 text-base sm:text-lg leading-relaxed">
            Mediterranean cooking built around live-fire, cold-pressed oil and
            produce from small growers — served in a dining room designed for
            slow evenings.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#reserve"
              className="bg-brass hover:bg-brass-light text-ink text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              Reserve a table
            </a>
            <a
              href="#menu"
              className="border border-ivory/40 hover:border-brass-light hover:text-brass-light text-ivory text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              View the menu
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="flex flex-row lg:flex-col gap-8 lg:gap-6 border-t lg:border-t-0 lg:border-l border-brass/35 pt-6 lg:pt-0 lg:pl-8"
        >
          <div>
            <div className="font-display text-3xl text-brass-light">₹₹₹</div>
            <div className="text-xs text-ivory/65 mt-1">Tasting-led, à la carte available</div>
          </div>
          <div>
            <div className="font-display text-3xl text-brass-light">42</div>
            <div className="text-xs text-ivory/65 mt-1">Covers across two rooms</div>
          </div>
          <div>
            <div className="font-display text-3xl text-brass-light">11</div>
            <div className="text-xs text-ivory/65 mt-1">Years under Chef Armaan Kapoor</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-7 left-6 sm:left-8 z-10 flex items-center gap-2.5 text-ivory/55 text-xs">
        <span className="w-8 h-px bg-ivory/40" /> Scroll
      </div>
    </section>
  );
}

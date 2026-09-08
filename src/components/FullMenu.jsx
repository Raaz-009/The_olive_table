import { useState } from "react";
import { menu } from "../data/content";

const tabs = [
  { key: "starters", label: "Starters" },
  { key: "mains", label: "Mains" },
  { key: "grill", label: "From the grill" },
  { key: "desserts", label: "Desserts" },
  { key: "wine", label: "Wine & spirits" },
];

function MenuItem({ item }) {
  return (
    <div className="flex items-baseline gap-2.5 py-4 border-b border-black/[0.08]">
      <div className="flex-1">
        <div className="font-display text-[17px] text-ink">{item.name}</div>
        <div className="text-[13px] text-[#7a7460] mt-1">{item.desc}</div>
      </div>
      <div className="leader" />
      <div className="font-display italic text-wine text-[15px] whitespace-nowrap">
        {item.price}
      </div>
    </div>
  );
}

export default function FullMenu() {
  const [active, setActive] = useState("starters");
  const items = menu[active];
  const mid = Math.ceil(items.length / 2);
  const colA = items.slice(0, mid);
  const colB = items.slice(mid);

  return (
    <section id="menu" className="py-24 sm:py-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-[640px] mb-12">
          <div className="font-display italic text-wine text-sm mb-3">The full menu</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight">
            Everything on the table, priced by the plate
          </h2>
        </div>

        <div className="flex gap-1 flex-wrap border-b border-brass/25 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`font-display px-5 py-3 text-sm -mb-px border-b-2 transition-colors ${
                active === t.key
                  ? "text-wine border-wine"
                  : "text-[#6b6552] border-transparent hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div key={active} className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 animate-[fadeIn_0.5s_ease]">
          <div>
            {colA.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
          <div>
            {colB.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

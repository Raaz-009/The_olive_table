import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contact } from "../data/content";

const times = [
  "12:30 PM", "1:00 PM", "1:30 PM",
  "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM",
];

const inputClass =
  "w-full bg-ivory/5 border border-ivory/20 text-ivory placeholder:text-ivory/35 px-3.5 py-3 text-[14.5px] rounded-sm focus:outline-none focus:border-brass-light focus:bg-ivory/[0.08] transition-colors";

export default function Reserve() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    email: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.date || !form.time || !form.guests) return;
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="py-24 sm:py-32 bg-olive-deep text-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-20">
        <div>
          <div className="font-display italic text-sage text-sm mb-3">Reservations</div>
          <h2 className="font-display text-[32px] mb-5">Hold a table</h2>
          <p className="text-ivory/70 max-w-[40ch] leading-relaxed">
            We recommend booking at least a week ahead for weekends and any
            party over six. Smart casual, please — we don't enforce a dress
            code beyond that.
          </p>
          <div className="mt-9 p-5 border border-brass/25 text-[13.5px] text-ivory/65 leading-relaxed">
            For same-day requests or parties above ten, call us directly at{" "}
            <strong className="text-ivory">{contact.phone}</strong> and we'll
            do our best to fit you in.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Full name</label>
            <input className={inputClass} type="text" placeholder="Your name" value={form.name} onChange={update("name")} required />
          </div>
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Phone</label>
            <input className={inputClass} type="tel" placeholder="+91 " value={form.phone} onChange={update("phone")} required />
          </div>
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Date</label>
            <input className={inputClass} type="date" min={today} value={form.date} onChange={update("date")} required />
          </div>
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Time</label>
            <select className={inputClass} value={form.time} onChange={update("time")} required>
              <option value="" className="text-ink">Select a time</option>
              {times.map((t) => (
                <option key={t} value={t} className="text-ink">{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Guests</label>
            <select className={inputClass} value={form.guests} onChange={update("guests")} required>
              <option value="" className="text-ink">Party size</option>
              {["1", "2", "3", "4", "5", "6", "7+"].map((g) => (
                <option key={g} value={g} className="text-ink">{g}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">Email</label>
            <input className={inputClass} type="email" placeholder="you@email.com" value={form.email} onChange={update("email")} required />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs text-ivory/60 mb-2 tracking-wide">
              Notes (allergies, occasion, seating)
            </label>
            <textarea className={`${inputClass} min-h-[84px] resize-y`} placeholder="Optional" value={form.notes} onChange={update("notes")} />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="bg-brass hover:bg-brass-light text-ink text-sm font-medium px-6 py-3.5 rounded-sm transition-colors"
            >
              Confirm reservation
            </button>
          </div>

          {submitted && (
            <div className="sm:col-span-2 border border-brass-light/60 bg-brass-light/10 p-6 flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-brass-light shrink-0 mt-0.5" />
              <div>
                <h4 className="text-brass-light font-display text-lg mb-1.5">Table requested</h4>
                <p className="text-ivory/75 text-sm">
                  Thank you, {form.name}. We've pencilled in a table for{" "}
                  {form.guests} on {form.date} at {form.time}, and will
                  confirm by email.
                </p>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

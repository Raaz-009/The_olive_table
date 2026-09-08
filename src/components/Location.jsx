import { MapPin, Phone, Mail } from "lucide-react";
import { hours, contact } from "../data/content";

export default function Location() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-ivory">
      <div className="max-w-content mx-auto px-6 sm:px-8">
        <div className="max-w-[640px] mb-14">
          <div className="font-display italic text-wine text-sm mb-3">Visit us</div>
          <h2 className="font-display text-[30px] sm:text-[42px] leading-tight">Find the table</h2>
        </div>
      </div>

      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-brass/20 border border-brass/20">
          <div className="bg-ivory p-8 sm:p-12">
            <div className="flex gap-4 mb-6">
              <MapPin className="w-5 h-5 text-wine shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <div className="text-xs text-[#8a8371] mb-1 tracking-wide">Address</div>
                <div className="text-[15px] text-ink">{contact.address}</div>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <Phone className="w-5 h-5 text-wine shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <div className="text-xs text-[#8a8371] mb-1 tracking-wide">Phone</div>
                <div className="text-[15px] text-ink">{contact.phone}</div>
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <Mail className="w-5 h-5 text-wine shrink-0 mt-0.5" strokeWidth={1.4} />
              <div>
                <div className="text-xs text-[#8a8371] mb-1 tracking-wide">Email</div>
                <div className="text-[15px] text-ink">{contact.email}</div>
              </div>
            </div>

            <table className="w-full mt-3 border-collapse">
              <tbody>
                {hours.map((h) => (
                  <tr key={h.days}>
                    <td className="py-2.5 text-[14.5px] border-b border-black/[0.06]">{h.days}</td>
                    <td className="py-2.5 text-[14.5px] border-b border-black/[0.06] text-right font-display italic text-wine">
                      {h.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-parchment relative flex items-center justify-center min-h-[340px]">
            <div className="absolute inset-5 border border-dashed border-wine/30" />
            <MapPin className="w-16 h-16 text-wine" strokeWidth={1} />
          </div>
        </div>
      </div>
    </section>
  );
}

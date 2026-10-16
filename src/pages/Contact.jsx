import { useState } from "react";
import { openWhatsApp } from "../utils/whatsapp";

export default function Contact() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hi Fachi Fabric Ventures,\n\nMy name is ${form.name}.\n\n${form.message}`;
    openWhatsApp(msg);
  };

  return (
    <div className="bg-[#faf7f2]">
      <section className="bg-[#062045] text-[#f5f1ea] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#c9a227] tracking-[0.4em] text-xs uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl">Contact Us</h1>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-serif text-2xl mb-6 text-[#1a1a1a]">Reach us directly</h2>

            <div className="space-y-6">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#c9a227] mb-1">
                  WhatsApp
                </p>
                <button
                  onClick={() => openWhatsApp()}
                  className="text-lg text-[#1a1a1a] hover:text-[#c9a227] transition"
                >
                  0913 206 6508
                </button>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-[#c9a227] mb-1">
                  Hours
                </p>
                <p className="text-[#1a1a1a]">Mon – Sat, 9am – 7pm</p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-[#c9a227] mb-1">
                  Location
                </p>
                <p className="text-[#1a1a1a]">
                  No 12 St. John Street,<br />
                  Taiwo off Tinubu Square,<br />
                  CMS, Lagos Island
                </p>
              </div>
            </div>

            <button
              onClick={() => openWhatsApp()}
              className="mt-8 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-medium px-6 py-3 rounded-full transition"
            >
              Chat on WhatsApp
            </button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="font-serif text-2xl mb-6 text-[#1a1a1a]">Send a message</h2>

            <label className="block mb-4">
              <span className="text-sm text-[#1a1a1a]/70 mb-1 block">Your name</span>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-[#1a1a1a]/20 rounded px-3 py-2 focus:outline-none focus:border-[#c9a227] text-[#1a1a1a]"
              />
            </label>

            <label className="block mb-6">
              <span className="text-sm text-[#1a1a1a]/70 mb-1 block">Your message</span>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full border border-[#1a1a1a]/20 rounded px-3 py-2 focus:outline-none focus:border-[#c9a227] text-[#1a1a1a]"
              />
            </label>

            <button
              type="submit"
              className="w-full bg-[#062045] text-[#c9a227] font-medium py-3 rounded-full hover:bg-[#c9a227] hover:text-[#062045] transition"
            >
              Send on WhatsApp
            </button>

            <p className="text-xs text-[#1a1a1a]/50 mt-3 text-center">
              This opens WhatsApp with your message ready to send.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}

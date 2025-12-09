"use client";

import { useRef, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Footer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        toast.success("You're now subscribed!");
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <footer className="bg-[#122741] text-[var(--color-white)] px-6 sm:px-10 lg:px-[140px] py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: Newsletter */}
        <div>
          <h4
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Domani Transport
          </h4>
          <p
            className="mb-6 max-w-sm"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get all the latest blog or service updates directly in your mailbox.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            {/* Must match your template variable name */}
            <input
              name="from_email"
              type="email"
              placeholder="example@gmail.com"
              required
              className="bg-transparent border border-[var(--color-accent)] text-white px-4 py-2 rounded-full w-full sm:w-auto focus:outline-none"
            />

            {/* Optional hidden fields (to distinguish source) */}
            <input type="hidden" name="from_name" value="Footer Subscription" />
            <input
              type="hidden"
              name="message"
              value="New subscriber joined the newsletter."
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--color-accent)] text-[var(--color-white)] px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition cursor-pointer"
            >
              {loading ? "Joining..." : "Join"}
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div>
          <h4
            className="text-lg font-semibold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Contact us
          </h4>
          <div className="flex items-start gap-3 mb-2">
            <Phone size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>+234 8081905844</p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <Mail size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>
              Domanitransportnig@gmail.com
            </p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>
              No.18 Fatima House, Kwari Market Fagge LGA,<br/> Kano State Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 mt-12 pt-6 flex flex-col sm:flex-row justify-between text-sm">
        <p className="text-white/80">&copy; 2025 All rights reserved</p>
        <p className="text-white/80 hover:text-white transition">RC 1393128</p>
      </div>
    </footer>
  );
};

export default Footer;

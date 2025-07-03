"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react"; // 👈 Import icons

const Footer = () => {
  return (
    <footer className="bg-[#122741] text-[var(--color-white)] px-6 sm:px-10 lg:px-[140px] py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left */}
        <div>
          <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Domani Transport
          </h4>
          <p className="mb-6 max-w-sm" style={{ fontFamily: "var(--font-body)" }}>
            Get all the latest blog or service update directly in your mail box
          </p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="bg-transparent border border-[var(--color-accent)] text-white px-4 py-2 rounded-full w-full sm:w-auto focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-[var(--color-accent)] text-[var(--color-white)] px-6 py-2 rounded-full font-medium"
            >
              Join
            </button>
          </form>
        </div>

        {/* Right */}
        <div>
          <h4 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Contact us
          </h4>
          <div className="flex items-start gap-3 mb-2">
            <Phone size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>+234 8081905844</p>
          </div>
          <div className="flex items-start gap-3 mb-2">
            <Mail size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>Domanitransportnig@gmail.com</p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={18} className="mt-1" />
            <p style={{ fontFamily: "var(--font-body)" }}>
              No.18 Fatima house, Kwari market Fagge LGA, Kano state Nigeria.
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

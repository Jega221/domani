// File: components/WhatsAppButton.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after page mounts
  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Link
      href="https://wa.me/234098586790" // ← your WhatsApp number here
      target="_blank"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 bottom-6 right-6 tra nsition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="bg-[var(--color-accent)] hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
        <FaWhatsapp size={28} />
      </div>
    </Link>
  );
};

export default WhatsAppButton;

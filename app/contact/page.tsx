"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SEOHead from "@/Components/SEOHead";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
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
        toast.success("Thanks! Your message has been sent.");
        formRef.current?.reset();
      })
      .catch(() => {
        toast.error("Sorry! We didn't receive your message. Try again.");
      })
      .finally(() => setLoading(false));

  };

  return (
     <>
          <SEOHead
            title="Domani Transport | Customs & Logistics in Nigeria"
            description="Hassle-free customs clearance, freight, and logistics services across Nigeria. Fast, reliable and efficient."
            keywords="customs clearance Nigeria, import Nigeria, logistics Nigeria, Domani Transport"
            url="https://domanitransport.com"
            image="/opengraph-image.png"
          />
   
    <section className="min-h-screen px-6 sm:px-10 lg:px-[140px] py-28 bg-[var(--color-white)] text-[var(--color-primary)]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Get in Touch
          </h2>
          <p className="text-base mb-10 text-[var(--color-gray)]" style={{ fontFamily: "var(--font-body)" }}>
            Send us a message and our team will get back to you within 24 hours.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm mb-1 font-medium">Full Name</label>
              <input name="from_name" required className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">Email</label>
              <input name="from_email" type="email" required className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <div>
              <label className="block text-sm mb-1 font-medium">Message</label>
              <textarea name="message" rows={5} required className="w-full border border-gray-300 px-4 py-3 rounded-md resize-none focus:ring-2 focus:ring-[var(--color-accent)]" />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-[var(--color-accent)] text-white px-6 py-3 rounded-md text-sm hover:bg-opacity-90 transition"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <Image src="/assets/contact-img.png" alt="Contact Illustration" width={600} height={600} className="w-full rounded-lg h-auto object-contain" />
        </div>
      </div>
    </section>
     </>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/how-we-work", label: "How we work" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[var(--color-dark-blue)] text-white fixed top-0 left-0 w-full z-50 px-6 sm:px-10 lg:px-[140px] py-6 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center"> 
    <Image
      src="/assets/logo.svg"
      alt="Domani Logo"
      width={30}  
      height={30}
    />
    <span className="ml-2 text-lg font-lora"> 
      Domani Transport
    </span>
  </Link>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-8 text-sm font-medium" style={{ fontFamily: "var(--font-body)" }}>
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-[var(--color-accent)] transition">
            {label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden focus:outline-none" aria-label="Toggle menu">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-[var(--color-primary)] shadow-md px-6 py-6 flex flex-col gap-4 lg:hidden">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-[var(--color-accent)] transition"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}

        </div>
      )}
    </header>
  );
};

export default Navbar;

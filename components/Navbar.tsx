'use client';

import Link from 'next/link';
import GoogleTranslate from './GoogleTranslate';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex flex-col justify-center gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logistack logo" className="h-12 w-12 object-contain" />
          <span className="font-bold text-2xl text-logistack-blue">LOGISTACK LTD</span>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 text-gray-600 font-medium">
          <div className="hidden md:flex gap-8">
            <Link href="/" className="hover:text-logistack-blue transition">Home</Link>
            <Link href="/services" className="hover:text-logistack-blue transition">Services</Link>
            <Link href="/about" className="hover:text-logistack-blue transition">About</Link>
          </div>
          <GoogleTranslate />
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-logistack-blue px-6 py-2 text-white hover:bg-logistack-dark transition">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
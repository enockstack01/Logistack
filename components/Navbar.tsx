'use client';

import { useState } from 'react';
import Link from 'next/link';
import GoogleTranslate from './GoogleTranslate';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logistack logo" className="h-10 w-10 object-contain" />
          <span className="font-bold text-xl text-logistack-blue md:text-2xl">LOGISTACK LTD</span>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-logistack-blue"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div className={`flex-1 md:flex md:items-center md:justify-end ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/80 md:bg-transparent md:p-0 md:shadow-none md:flex-row md:items-center md:gap-8 md:w-auto">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 text-gray-600 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-logistack-blue transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
              <GoogleTranslate />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-logistack-blue px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-logistack-dark"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
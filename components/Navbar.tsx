'use client';

import { useState } from 'react';
import Link from 'next/link';
import GoogleTranslate from './GoogleTranslate';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full z-50 bg-white border-b border-logistack-lavender">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link href="/" aria-label="Logistack Ltd home" onClick={() => setIsOpen(false)}>
          <img src="/logistack-logo-navy.png" alt="Logistack Ltd" className="h-9 w-auto md:h-10" />
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-logistack-lavender bg-white text-logistack-navy hover:bg-logistack-mist"
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

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } absolute left-0 right-0 top-full border-b border-logistack-lavender bg-white p-4 md:static md:flex md:border-0 md:p-0 md:items-center`}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 font-bold text-logistack-navy">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-1 hover:underline underline-offset-8 decoration-logistack-amber decoration-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <GoogleTranslate />
          </div>
        </div>
      </div>
    </nav>
  );
}

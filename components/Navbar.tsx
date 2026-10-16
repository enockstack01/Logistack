'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import GoogleTranslate from './GoogleTranslate';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8 font-bold text-logistack-navy">
      {navItems.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            onClick={() => setIsOpen(false)}
            className="group relative py-1"
          >
            {item.label}
            <span
              className={`absolute -bottom-0.5 left-0 h-0.5 bg-logistack-amber transition-all duration-300 ${
                active ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b border-logistack-lavender bg-white transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        }`}
      >
        <Link href="/" aria-label="Logistack Ltd home" onClick={() => setIsOpen(false)}>
          <img
            src="/logistack-logo-navy.png"
            alt="Logistack Ltd"
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links}
          <GoogleTranslate />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-logistack-lavender bg-white text-logistack-navy hover:bg-logistack-mist md:hidden"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-logistack-lavender bg-white md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              {links}
              <GoogleTranslate />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

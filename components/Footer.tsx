'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-logistack-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src="/logistack-logo-white.png" alt="Logistack Ltd" className="h-9 w-auto mb-4" />
              <p className="text-logistack-periwinkle">
                Logistack turns data, maps and software into decisions that work on the ground, for farmers,
                institutions and businesses in Rwanda and across Africa.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-logistack-amber text-xs uppercase tracking-widest">Quick links</h4>
              <div className="space-y-2">
                <Link href="/" className="block hover:underline">Home</Link>
                <Link href="/services" className="block hover:underline">Services</Link>
                <Link href="/about" className="block hover:underline">About</Link>
                <Link href="/contact" className="block hover:underline">Contact</Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-logistack-amber text-xs uppercase tracking-widest">Contact</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-logistack-periwinkle" />
                  <span>Deco Center, Nyarutarama, Kigali, Rwanda</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-logistack-periwinkle" />
                  <span>+250 796 847 804</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-logistack-periwinkle" />
                  <span>logistackltd@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-logistack-periwinkle/40 mt-10 pt-6 text-center text-sm text-logistack-periwinkle">
            <p>
              &copy; 2026 Logistack Ltd. All rights reserved.{' '}
              <a href="https://logistack.space" className="text-white hover:underline">
                logistack.space
              </a>
            </p>
          </div>
        </div>
      </footer>

      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-logistack-navy text-white p-3 rounded-full hover:bg-logistack-amber hover:text-logistack-navy transition-colors z-50"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

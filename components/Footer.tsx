'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import GoogleTranslate from './GoogleTranslate';

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
      <footer className="bg-logistack-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-6 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">LOGISTACK LTD</h3>
              <p className="text-blue-100 mb-4">
                Transforming data into impact by helping businesses make smarter decisions
                with cutting-edge technology solutions.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Deco Center - NYARUTARAMA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">logistackltd@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+250 796 847 804 / +250 783 826 653</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <a
                    href="https://wa.me/250796847804"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-white transition font-medium"
                  >
                    WhatsApp: +250 796 847 804
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link href="/" className="block text-blue-100 hover:text-white transition hover:translate-x-1 transform duration-200">Home</Link>
                <Link href="/services" className="block text-blue-100 hover:text-white transition hover:translate-x-1 transform duration-200">Services</Link>
                <Link href="/about" className="block text-blue-100 hover:text-white transition hover:translate-x-1 transform duration-200">About</Link>
                <Link href="/contact" className="block text-blue-100 hover:text-white transition hover:translate-x-1 transform duration-200">Contact</Link>
                <a href="https://www.agricoders.com/apps" target="_blank" rel="noopener noreferrer" className="block text-blue-100 hover:text-white transition hover:translate-x-1 transform duration-200">Our Apps</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm text-blue-100">
                <p className="hover:text-white transition cursor-pointer">Data Analysis & GIS</p>
                <p className="hover:text-white transition cursor-pointer">Software Development</p>
                <p className="hover:text-white transition cursor-pointer">IT Support</p>
                <p className="hover:text-white transition cursor-pointer">Tech Training</p>
                <p className="hover:text-white transition cursor-pointer">Business Planning</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Programs &amp; Apps</h4>
              <div className="space-y-3 text-sm">
                <a
                  href="https://www.agricoders.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 group"
                >
                  <span className="text-emerald-400 font-semibold group-hover:text-emerald-300 transition">Agricoders</span>
                  <span className="text-blue-100 text-xs">Agriculture &amp; Code Program</span>
                </a>
                <a
                  href="https://www.agricoders.com/apps"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-0.5 group"
                >
                  <span className="text-violet-400 font-semibold group-hover:text-violet-300 transition">Logistack Plan</span>
                  <span className="text-blue-100 text-xs">AI Business Planning App</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Translate</h4>
              <div className="rounded-2xl border border-blue-800 bg-white/5 p-4">
                <GoogleTranslate />
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-100">
            <p>&copy; 2026 Logistack Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-logistack-blue text-white p-3 rounded-full shadow-lg hover:bg-logistack-dark transition-all duration-300 hover:scale-110 z-50 animate-bounce"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}
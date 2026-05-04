'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

let widgetLoaded = false;

const languages = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'French' },
  { code: 'es', label: 'Spanish' },
  { code: 'de', label: 'German' },
  { code: 'pt', label: 'Portuguese' },
  { code: 'zh-CN', label: 'Chinese' },
  { code: 'ar', label: 'Arabic' },
  { code: 'ru', label: 'Russian' },
];

export default function GoogleTranslate() {
  const [language, setLanguage] = useState('en');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (widgetLoaded && window.google?.translate?.TranslateElement) {
      setLoaded(true);
      return;
    }

    const containerId = 'google_translate_element';
    let hiddenContainer = document.getElementById(containerId);
    if (!hiddenContainer) {
      hiddenContainer = document.createElement('div');
      hiddenContainer.id = containerId;
      hiddenContainer.style.display = 'none';
      document.body.appendChild(hiddenContainer);
    }

    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false,
        },
        containerId
      );
      widgetLoaded = true;
      setLoaded(true);
    };

    if (!document.querySelector(`script[src*="translate_a/element.js"]`)) {
      const script = document.createElement('script');
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }

    return undefined;
  }, []);

  const changeLanguage = (value: string) => {
    setLanguage(value);

    if (typeof window === 'undefined') return;
    const translateSelect = document.querySelector('#google_translate_element select') as HTMLSelectElement | null;
    if (translateSelect) {
      translateSelect.value = value;
      translateSelect.dispatchEvent(new Event('change'));
      return;
    }

    document.cookie = `googtrans=/en/${value};path=/`; // fallback
    window.location.reload();
  };

  return (
    <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
      <label htmlFor="language-selector" className="sr-only">
        Translate site
      </label>
      <select
        id="language-selector"
        value={language}
        onChange={(event) => changeLanguage(event.target.value)}
        className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm outline-none transition focus:border-logistack-blue focus:ring-2 focus:ring-logistack-blue/20"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
      <span className="text-xs text-slate-400">Translate</span>
    </div>
  );
}

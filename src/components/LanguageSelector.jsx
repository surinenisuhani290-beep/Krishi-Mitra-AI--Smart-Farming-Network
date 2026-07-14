import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { languages } from '../lib/translations';

export default function LanguageSelector({ compact = false }) {
  const { lang, setLang } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-krishi-green hover:bg-green-50 transition-colors ${
          compact ? 'p-2' : ''
        }`}
      >
        <Globe className="w-5 h-5 text-krishi-green" />
        <span className={`font-medium text-gray-700 ${compact ? 'hidden sm:inline' : ''}`}>
          {lang.toUpperCase()}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-50 min-w-[150px] animate-fadeInDown">
          {languages.map((lng) => (
            <button
              key={lng.code}
              onClick={() => {
                setLang(lng.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                lang === lng.code
                  ? 'bg-green-100 text-krishi-green'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {lng.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

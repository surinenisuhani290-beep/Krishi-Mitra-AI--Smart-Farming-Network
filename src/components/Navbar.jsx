import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const { lang, darkMode, setDarkMode } = useApp();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: t(lang, 'home') },
    { path: '/chat', label: t(lang, 'chatbot') },
    { path: '/voice', label: t(lang, 'voiceAssistant') },
    { path: '/detect', label: t(lang, 'diseaseDetection') },
    { path: '/market', label: t(lang, 'marketPrices') },
    { path: '/schemes', label: t(lang, 'govSchemes') },
    { path: '/alerts', label: t(lang, 'villageAlerts') },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg krishi-gradient flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-krishi-green hidden sm:inline">
              {t(lang, 'appName')}
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-krishi-green transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              title="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <LanguageSelector />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-fadeInDown">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-krishi-green transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

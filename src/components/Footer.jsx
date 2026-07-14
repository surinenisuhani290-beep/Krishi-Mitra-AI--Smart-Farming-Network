import React from 'react';
import { Leaf, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

export default function Footer() {
  const { lang } = useApp();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg krishi-gradient flex items-center justify-center">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{t(lang, 'appName')}</h3>
                <p className="text-xs text-gray-400">{t(lang, 'tagline')}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering farmers with AI-driven insights and smart agricultural solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/chat" className="hover:text-white transition-colors">{t(lang, 'chatbot')}</a></li>
              <li><a href="/market" className="hover:text-white transition-colors">{t(lang, 'marketPrices')}</a></li>
              <li><a href="/schemes" className="hover:text-white transition-colors">{t(lang, 'govSchemes')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">{t(lang, 'contact')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                contact@krishimitraai.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 1800-KRISHI-1
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                India
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-white mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} {t(lang, 'appName')}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

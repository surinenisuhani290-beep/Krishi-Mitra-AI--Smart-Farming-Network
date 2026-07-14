import React from 'react';
import { Leaf, MapPin, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';
import LanguageSelector from '../components/LanguageSelector';
import AIAssistant from '../components/AIAssistant';

const HomePage = () => {
  const { lang, location } = useApp();

  const features = [
    { path: '/detect', icon: '🔍', labelKey: 'diseaseDetection', color: 'text-krishi-green' },
    { path: '/voice', icon: '🎤', labelKey: 'voiceAssistant', color: 'text-krishi-sky' },
    { path: '/chat', icon: '💬', labelKey: 'chatbot', color: 'text-krishi-orange' },
    { path: '/sms', icon: '📱', labelKey: 'smsMode', color: 'text-krishi-green-light' },
    { path: '/ivr', icon: '☎️', labelKey: 'ivrSystem', color: 'text-krishi-earth' },
    { path: '/market', icon: '📈', labelKey: 'marketPrices', color: 'text-krishi-orange' },
    { path: '/schemes', icon: '🏛️', labelKey: 'govSchemes', color: 'text-krishi-sky' },
    { path: '/alerts', icon: '🔔', labelKey: 'villageAlerts', color: 'text-krishi-danger' },
    { path: '/stores', icon: '📍', labelKey: 'nearbyStores', color: 'text-krishi-green' },
    { path: '/tip', icon: '💡', labelKey: 'tipOfDay', color: 'text-krishi-warning' },
    { path: '/history', icon: '📜', labelKey: 'cropHistory', color: 'text-krishi-earth' },
    { path: '/health', icon: '❤️', labelKey: 'cropHealth', color: 'text-krishi-danger' },
    { path: '/predictive', icon: '⚠️', labelKey: 'predictiveAlert', color: 'text-krishi-orange' },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Header */}
      <div className="krishi-gradient px-4 pt-8 pb-12 rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center shadow-lg">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white">{t(lang, 'appName')}</h1>
                <p className="text-white/80 text-sm md:text-base">{t(lang, 'tagline')}</p>
              </div>
            </div>
            <LanguageSelector compact />
          </div>

          <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 pt-6">
        {/* AI Assistant Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Smartphone className="w-6 h-6 text-krishi-green" />
            {t(lang, 'chatbot')}
          </h2>
          <AIAssistant />
        </div>

        {/* Features Grid */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-6">{t(lang, 'more')}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="krishi-card !p-3 flex flex-col items-center gap-2 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="text-3xl">{feature.icon}</span>
                <span className="text-[11px] font-semibold text-foreground leading-tight">
                  {t(lang, feature.labelKey)}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

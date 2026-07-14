import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const IvrPage = () => {
  const { lang } = useApp();
  const [calling, setCalling] = useState(false);

  const handleCall = () => {
    setCalling(true);
    setTimeout(() => setCalling(false), 3000);
  };

  return (
    <FeaturePageLayout title={t(lang, 'ivrSystem')} icon={Phone}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-4">☎️ {t(lang, 'ivrSystem')}</h2>
          <p className="text-gray-600 mb-6">
            Call our IVR system to get farming advice through interactive voice menus. Available 24/7 in your language.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-krishi-sky mb-2">1800-KRISHI-1</p>
              <p className="text-gray-600 mb-6">Toll-free agricultural support hotline</p>
              <button
                onClick={handleCall}
                disabled={calling}
                className="krishi-button-primary justify-center py-3 text-lg disabled:opacity-50"
              >
                <Phone className="w-5 h-5" />
                {calling ? 'Connecting...' : t(lang, 'callSupport')}
              </button>
            </div>

            {calling && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-center">
                <div className="animate-pulse">
                  <p className="text-green-700 font-semibold">Simulating IVR call...</p>
                </div>
              </div>
            )}

            <div className="space-y-3">
              <h3 className="font-bold text-foreground">📋 Available Options:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>✓ Press 1: Crop Disease Help</li>
                <li>✓ Press 2: Weather Information</li>
                <li>✓ Press 3: Government Schemes</li>
                <li>✓ Press 4: Market Prices</li>
                <li>✓ Press 5: Speak to Agent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default IvrPage;

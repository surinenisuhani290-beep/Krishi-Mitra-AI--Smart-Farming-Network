import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const HealthPage = () => {
  const { lang, weather, alerts } = useApp();
  const [healthScore, setHealthScore] = useState(75);

  useEffect(() => {
    let score = 100;
    if (alerts.length > 0) score -= alerts.length * 15;
    if (weather?.temp > 38) score -= 10;
    if (weather?.humidity > 80) score -= 5;
    setHealthScore(Math.max(0, score));
  }, [weather, alerts]);

  const getHealthStatus = () => {
    if (healthScore >= 80) return { label: 'Good', color: 'text-green-600', bg: 'bg-green-50' };
    if (healthScore >= 50) return { label: 'Moderate', color: 'text-yellow-600', bg: 'bg-yellow-50' };
    return { label: 'Needs Attention', color: 'text-red-600', bg: 'bg-red-50' };
  };

  const status = getHealthStatus();

  return (
    <FeaturePageLayout title={t(lang, 'cropHealth')} icon={Heart}>
      <div className="space-y-6">
        <div className={`krishi-card ${status.bg} border-l-4 ${status.color}`}>
          <div className="text-center mb-6">
            <Heart className={`w-16 h-16 mx-auto mb-3 ${status.color}`} />
            <h2 className="text-3xl font-bold text-foreground">{healthScore}%</h2>
            <p className={`text-lg font-semibold ${status.color}`}>{status.label}</p>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-4 mb-4 overflow-hidden">
            <div
              className={`h-full ${
                healthScore >= 80
                  ? 'bg-green-500'
                  : healthScore >= 50
                  ? 'bg-yellow-500'
                  : 'bg-red-500'
              }`}
              style={{ width: `${healthScore}%` }}
            />
          </div>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default HealthPage;

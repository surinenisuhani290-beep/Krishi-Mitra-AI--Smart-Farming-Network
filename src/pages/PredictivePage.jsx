import React, { useMemo } from 'react';
import { AlertTriangle } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import WeatherCard from '../components/WeatherCard';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const PredictivePage = () => {
  const { lang, weather } = useApp();

  const risks = useMemo(() => {
    const predictedRisks = [];

    if (weather) {
      if (weather.condition?.includes('Rain')) {
        predictedRisks.push({
          id: 1,
          type: 'Fungal Disease Risk',
          severity: 'high',
          description: 'Heavy rainfall creates humid conditions',
          action: 'Increase fungicide application frequency',
        });
      }

      if (weather.temp > 38) {
        predictedRisks.push({
          id: 2,
          type: 'Heat Stress',
          severity: 'high',
          description: 'High temperature can cause crop wilting',
          action: 'Increase irrigation frequency',
        });
      }

      if (weather.windSpeed > 12) {
        predictedRisks.push({
          id: 3,
          type: 'Physical Damage Risk',
          severity: 'medium',
          description: 'Strong winds can cause lodging',
          action: 'Check crop stands and stake plants',
        });
      }

      if (weather.humidity > 80) {
        predictedRisks.push({
          id: 4,
          type: 'Disease Proliferation',
          severity: 'high',
          description: 'High humidity promotes pest spread',
          action: 'Monitor closely and apply preventive sprays',
        });
      }
    }

    if (predictedRisks.length === 0) {
      predictedRisks.push({
        id: 0,
        type: 'Favorable Conditions',
        severity: 'low',
        description: 'Current weather is favorable for crop growth',
        action: 'Continue routine maintenance',
      });
    }

    return predictedRisks;
  }, [weather]);

  return (
    <FeaturePageLayout title={t(lang, 'predictiveAlert')} icon={AlertTriangle}>
      <div className="space-y-6">
        <WeatherCard />

        <div className="space-y-3">
          {risks.map((risk) => {
            const severityStyles = {
              high: 'bg-red-50 border-l-krishi-danger',
              medium: 'bg-yellow-50 border-l-krishi-warning',
              low: 'bg-green-50 border-l-krishi-green',
            };

            return (
              <div key={risk.id} className={`krishi-card !border-l-4 ${severityStyles[risk.severity]}`}>
                <h3 className="font-bold text-foreground text-lg">{risk.type}</h3>
                <p className="text-gray-700 text-sm mt-2">{risk.description}</p>
                <p className="text-sm font-semibold text-blue-900 mt-2">Action: {risk.action}</p>
              </div>
            );
          })}
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default PredictivePage;

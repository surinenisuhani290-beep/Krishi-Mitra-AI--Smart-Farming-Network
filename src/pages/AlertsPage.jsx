import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import WeatherCard from '../components/WeatherCard';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const AlertsPage = () => {
  const { lang, weather, alerts } = useApp();

  const generalAlerts = [
    { id: 1, type: 'Pest Warning', message: 'Army worm infestation reported in neighboring districts', severity: 'high' },
    { id: 2, type: 'Weather', message: 'Heavy rainfall expected next week - irrigation advisory issued', severity: 'medium' },
    { id: 3, type: 'Disease', message: 'Leaf blight detected - recommended fungicide applications', severity: 'high' },
    { id: 4, type: 'Market', message: 'Rice prices up 2% - good time to harvest', severity: 'low' },
    { id: 5, type: 'Scheme', message: 'New subsidy window open for fertilizers - apply by end of month', severity: 'low' },
  ];

  return (
    <FeaturePageLayout title={t(lang, 'villageAlerts')} icon={Bell}>
      <div className="space-y-6">
        <WeatherCard />

        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-4">🚨 {t(lang, 'villageAlerts')}</h2>
          <p className="text-gray-600 mb-6">
            Stay updated with real-time alerts for your village and farming region.
          </p>
        </div>

        <div className="space-y-3">
          {generalAlerts.map((alert) => {
            const severityColor =
              alert.severity === 'high'
                ? 'border-l-krishi-danger bg-red-50'
                : alert.severity === 'medium'
                ? 'border-l-krishi-orange bg-yellow-50'
                : 'border-l-krishi-green bg-green-50';

            return (
              <div
                key={alert.id}
                className={`krishi-card !border-l-4 ${severityColor} cursor-pointer hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-5 h-5 flex-shrink-0 mt-1 ${
                    alert.severity === 'high'
                      ? 'text-krishi-danger'
                      : alert.severity === 'medium'
                      ? 'text-krishi-orange'
                      : 'text-krishi-green'
                  }`} />
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground">{alert.type}</h3>
                    <p className="text-gray-700 mt-1">{alert.message}</p>
                    <p className="text-xs text-gray-500 mt-2">Today at {new Date().toLocaleTimeString()}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default AlertsPage;

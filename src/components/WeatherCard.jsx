import React from 'react';
import { Cloud, Droplets, Wind, AlertCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const WeatherCard = () => {
  const { weather, alerts, location } = useApp();

  if (!weather) {
    return (
      <div className="krishi-card text-center py-8">
        <div className="spinner mx-auto"></div>
        <p className="text-gray-600 mt-4">{t('en', 'loading')}</p>
      </div>
    );
  }

  return (
    <div className="krishi-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Cloud className="w-6 h-6 text-krishi-sky" />
          <h3 className="text-lg font-bold text-foreground">{t('en', 'weather')}</h3>
        </div>
        <span className="text-sm text-gray-500">{location}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-krishi-orange">{Math.round(weather.temp)}°C</p>
          <p className="text-xs text-gray-600">{t('en', 'temperature')}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-krishi-sky">{weather.humidity}%</p>
          <p className="text-xs text-gray-600">{t('en', 'humidity')}</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-gray-700">{weather.condition}</p>
          <p className="text-xs text-gray-600">{t('en', 'condition')}</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-krishi-danger">{weather.windSpeed?.toFixed(1) || 0} m/s</p>
          <p className="text-xs text-gray-600">Wind Speed</p>
        </div>
      </div>

      {alerts.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-4">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-5 h-5 text-krishi-danger flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-krishi-danger mb-1">⚠️ {t('en', 'weatherAlert')}</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                {alerts.map((alert, i) => (
                  <li key={i}>• {alert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;

import React, { useState } from 'react';
import { Lightbulb } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const TipPage = () => {
  const { lang } = useApp();
  const [currentTip, setCurrentTip] = useState(0);

  const tips = [
    {
      id: 1,
      title: 'Early Morning Pest Check',
      description: 'Check your crop leaves early in the morning when pests are least active.',
      category: 'Pest Management',
    },
    {
      id: 2,
      title: 'Avoid Over-Irrigation',
      description: 'Water in early morning or late evening to reduce evaporation.',
      category: 'Irrigation',
    },
    {
      id: 3,
      title: 'Use Organic Manure',
      description: 'Improves soil structure and provides essential nutrients naturally.',
      category: 'Soil Health',
    },
    {
      id: 4,
      title: 'Monitor Weather Alerts',
      description: 'Check forecasts before applying pesticides or farm work.',
      category: 'Weather',
    },
    {
      id: 5,
      title: 'Crop Rotation Benefits',
      description: 'Rotate crops every season to prevent soil depletion.',
      category: 'Crop Management',
    },
    {
      id: 6,
      title: 'Proper Plant Spacing',
      description: 'Maintain spacing for better air circulation and reduced disease spread.',
      category: 'Planting',
    },
  ];

  const tip = tips[currentTip];

  return (
    <FeaturePageLayout title={t(lang, 'tipOfDay')} icon={Lightbulb}>
      <div className="space-y-6">
        <div className="krishi-card border-l-4 border-krishi-warning">
          <div className="flex items-start gap-4">
            <Lightbulb className="w-12 h-12 text-krishi-warning flex-shrink-0" />
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold mb-2">
                {tip.category}
              </span>
              <h2 className="text-2xl font-bold text-foreground mb-2">{tip.title}</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{tip.description}</p>
            </div>
          </div>

          <button
            onClick={() => setCurrentTip((prev) => (prev + 1) % tips.length)}
            className="krishi-button-primary w-full mt-6 justify-center"
          >
            Next Tip
          </button>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default TipPage;

import React, { useState } from 'react';
import { TrendingUp, Search } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const MarketPage = () => {
  const { lang } = useApp();
  const [selectedCrop, setSelectedCrop] = useState('rice');

  const crops = [
    { name: 'Rice', code: 'rice', price: '₹2,400', trend: '+2.5%', yesterday: '₹2,340' },
    { name: 'Wheat', code: 'wheat', price: '₹2,100', trend: '-1.2%', yesterday: '₹2,125' },
    { name: 'Cotton', code: 'cotton', price: '₹5,800', trend: '+3.1%', yesterday: '₹5,620' },
    { name: 'Tomato', code: 'tomato', price: '₹40', trend: '+5.2%', yesterday: '₹38' },
    { name: 'Maize', code: 'maize', price: '₹1,950', trend: '+0.8%', yesterday: '₹1,934' },
    { name: 'Onion', code: 'onion', price: '₹28', trend: '-2.1%', yesterday: '₹28.60' },
  ];

  const selected = crops.find(c => c.code === selectedCrop);

  return (
    <FeaturePageLayout title={t(lang, 'marketPrices')} icon={TrendingUp}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-4">💵 {t(lang, 'marketPrices')}</h2>
          <p className="text-gray-600 mb-6">
            Real-time market prices for agricultural commodities. Updated daily from major markets.
          </p>

          {/* Crop Selection */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 mb-6">
            {crops.map((crop) => (
              <button
                key={crop.code}
                onClick={() => setSelectedCrop(crop.code)}
                className={`p-3 rounded-lg font-semibold transition-all ${
                  selectedCrop === crop.code
                    ? 'krishi-gradient text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {crop.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Crop Details */}
        {selected && (
          <div className="krishi-card border-l-4 border-krishi-orange">
            <h3 className="text-2xl font-bold text-foreground mb-4">{selected.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600 mb-1">{t(lang, 'price')}</p>
                <p className="text-3xl font-bold text-krishi-orange">{selected.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Yesterday's Price</p>
                <p className="text-2xl font-semibold text-gray-700">{selected.yesterday}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">{t(lang, 'trend')}</p>
                <p className={`text-2xl font-bold ${
                  selected.trend.includes('+') ? 'text-green-600' : 'text-red-600'
                }`}>
                  {selected.trend}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* All Prices Table */}
        <div className="krishi-card overflow-x-auto">
          <h3 className="font-bold text-foreground mb-4">All Commodities</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 px-2">Crop</th>
                <th className="text-right py-2 px-2">Current Price</th>
                <th className="text-right py-2 px-2">Yesterday</th>
                <th className="text-right py-2 px-2">Change</th>
              </tr>
            </thead>
            <tbody>
              {crops.map((crop) => (
                <tr key={crop.code} className="border-b border-gray-100 hover:bg-green-50">
                  <td className="py-3 px-2 font-semibold text-foreground">{crop.name}</td>
                  <td className="py-3 px-2 text-right font-bold text-krishi-green">{crop.price}</td>
                  <td className="py-3 px-2 text-right text-gray-600">{crop.yesterday}</td>
                  <td className={`py-3 px-2 text-right font-semibold ${
                    crop.trend.includes('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {crop.trend}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default MarketPage;

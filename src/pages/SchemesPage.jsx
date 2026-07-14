import React, { useState } from 'react';
import { Landmark } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const SchemesPage = () => {
  const { lang } = useApp();
  const [expandedId, setExpandedId] = useState(null);

  const schemes = [
    {
      id: 1,
      name: 'PM-KISAN',
      subtitle: 'Pradhan Mantri Kisan Samman Nidhi',
      description: 'Direct income support scheme for farmers',
      benefit: '₹6,000 per year (₹2,000 per 4 months)',
      eligibility: 'All farmers with land holdings',
      apply: 'Online at pm-kisan.gov.in',
    },
    {
      id: 2,
      name: 'Crop Insurance',
      subtitle: 'Pradhan Mantri Fasal Bima Yojana',
      description: 'Insurance coverage for crop failures',
      benefit: 'Full crop value compensation',
      eligibility: 'All farmers growing notified crops',
      apply: 'Contact local insurance agent',
    },
    {
      id: 3,
      name: 'Soil Health Card',
      subtitle: 'Free soil testing and recommendations',
      description: 'Improve soil quality and productivity',
      benefit: 'Free soil analysis and nutrient recommendations',
      eligibility: 'All farmers',
      apply: 'Visit district agriculture office',
    },
    {
      id: 4,
      name: 'Kisan Credit Card',
      subtitle: 'Affordable credit for farming',
      description: 'Easy credit access for agricultural needs',
      benefit: 'Up to ₹3 lakhs at affordable rates',
      eligibility: 'Farmers with 0.5+ acre land',
      apply: 'Apply at nearest bank',
    },
    {
      id: 5,
      name: 'Subsidy on Fertilizers',
      subtitle: 'Reduced fertilizer costs',
      description: 'Government subsidy on essential fertilizers',
      benefit: '30-50% subsidy on fertilizers',
      eligibility: 'All farmers',
      apply: 'Contact agriculture department',
    },
    {
      id: 6,
      name: 'Farm Mechanization',
      subtitle: 'Subsidy on farm equipment',
      description: 'Support for modern farming equipment',
      benefit: '40-50% subsidy on machinery',
      eligibility: 'Small and marginal farmers',
      apply: 'Apply through district office',
    },
  ];

  return (
    <FeaturePageLayout title={t(lang, 'govSchemes')} icon={Landmark}>
      <div className="space-y-4">
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="krishi-card cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setExpandedId(expandedId === scheme.id ? null : scheme.id)}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-krishi-green">{scheme.name}</h3>
                <p className="text-sm text-gray-600">{scheme.subtitle}</p>
              </div>
              <div className="text-2xl">{expandedId === scheme.id ? '−' : '+'}</div>
            </div>

            {expandedId === scheme.id && (
              <div className="mt-4 pt-4 border-t border-gray-200 space-y-3 animate-fadeInDown">
                <p className="text-gray-700">{scheme.description}</p>
                <div>
                  <p className="font-semibold text-foreground text-sm">Benefit:</p>
                  <p className="text-gray-700">{scheme.benefit}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Eligibility:</p>
                  <p className="text-gray-700">{scheme.eligibility}</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">How to Apply:</p>
                  <p className="text-gray-700">{scheme.apply}</p>
                </div>
                <button className="krishi-button-primary w-full justify-center mt-4">
                  {t(lang, 'applyNow')}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </FeaturePageLayout>
  );
};

export default SchemesPage;

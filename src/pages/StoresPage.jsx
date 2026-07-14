import React from 'react';
import { MapPin } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const StoresPage = () => {
  const { lang, location } = useApp();

  const stores = [
    { id: 1, name: 'Greenfield Seeds Shop', type: 'Seeds', distance: '2.3 km', phone: '9876543210' },
    { id: 2, name: 'Organic Fertilizer Hub', type: 'Fertilizers', distance: '1.8 km', phone: '9876543211' },
    { id: 3, name: 'Pesticide Care Center', type: 'Pesticides', distance: '3.1 km', phone: '9876543212' },
    { id: 4, name: 'Farm Equipment Rental', type: 'Equipment', distance: '4.5 km', phone: '9876543213' },
    { id: 5, name: 'AgriTech Tools Store', type: 'Tools', distance: '2.8 km', phone: '9876543214' },
    { id: 6, name: 'Seed Certification Center', type: 'Seeds', distance: '5.2 km', phone: '9876543215' },
  ];

  const storeTypes = [
    { label: 'All', value: 'all' },
    { label: 'Seeds', value: 'Seeds' },
    { label: 'Fertilizers', value: 'Fertilizers' },
    { label: 'Pesticides', value: 'Pesticides' },
    { label: 'Equipment', value: 'Equipment' },
  ];

  return (
    <FeaturePageLayout title={t(lang, 'nearbyStores')} icon={MapPin}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-2">📍 {t(lang, 'nearbyStores')}</h2>
          <p className="text-gray-600 mb-4">Your location: {location}</p>
          <p className="text-gray-600">
            Find nearby agricultural stores for seeds, fertilizers, pesticides, and equipment.
          </p>
        </div>

        {/* Store Listings */}
        <div className="space-y-3">
          {stores.map((store) => (
            <div key={store.id} className="krishi-card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-bold text-foreground text-lg">{store.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-semibold mr-2">
                      {store.type}
                    </span>
                    <span className="text-krishi-green font-semibold">{store.distance}</span>
                  </p>
                </div>
                <button className="krishi-button-primary text-sm">
                  📞 {store.phone}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default StoresPage;

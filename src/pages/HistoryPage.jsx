import React, { useState, useEffect } from 'react';
import { History } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const HistoryPage = () => {
  const { lang } = useApp();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('cropHistory');
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const deleteRecord = (index) => {
    const updated = history.filter((_, i) => i !== index);
    setHistory(updated);
    localStorage.setItem('cropHistory', JSON.stringify(updated));
  };

  return (
    <FeaturePageLayout title={t(lang, 'cropHistory')} icon={History}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-2">Crop History</h2>
          <p className="text-gray-600">
            Track your previous crop issues and solutions.
          </p>
        </div>

        {history.length === 0 ? (
          <div className="krishi-card text-center py-12">
            <History className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No history yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((record, index) => (
              <div key={index} className="krishi-card border-l-4 border-krishi-earth">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground capitalize">
                      {record.crop || 'Unknown Crop'}
                    </h3>
                  </div>
                  <button
                    onClick={() => deleteRecord(index)}
                    className="text-red-500 hover:text-red-700 text-sm font-semibold"
                  >
                    Delete
                  </button>
                </div>

                <div className="bg-gray-50 p-3 rounded mb-3">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold">Query:</span> {record.input}
                  </p>
                </div>

                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold text-foreground">Disease:</span>
                    <span className="text-gray-700 ml-2">{record.disease}</span>
                  </p>
                  <p>
                    <span className="font-semibold text-foreground">Solution:</span>
                    <span className="text-gray-700 ml-2">{record.solution}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default HistoryPage;

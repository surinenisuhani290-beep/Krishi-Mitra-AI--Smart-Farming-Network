import React, { useState } from 'react';
import { Send, Phone } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const SmsPage = () => {
  const { lang } = useApp();
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => {
    if (phone && problem) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
    }
  };

  return (
    <FeaturePageLayout title={t(lang, 'smsMode')} icon={Send}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-2">📱 {t(lang, 'smsMode')}</h2>
          <p className="text-gray-600 mb-6">
            Don't have internet? Request farming advice via SMS. We'll analyze your problem and send solutions to your phone.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                {t(lang, 'phoneNumber')}
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 9876543210"
                className="krishi-input"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                {t(lang, 'cropProblem')}
              </label>
              <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe your crop problem..."
                rows="4"
                className="krishi-input"
              />
            </div>

            <button
              onClick={handleSend}
              className="krishi-button-primary w-full justify-center"
            >
              <Send className="w-4 h-4" />
              {t(lang, 'sendSMS')}
            </button>
          </div>

          {sent && (
            <div className="mt-4 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg">
              ✓ SMS request sent! You'll receive advice within 2 hours.
            </div>
          )}
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default SmsPage;

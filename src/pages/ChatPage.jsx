import React from 'react';
import { MessageSquare } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import AIAssistant from '../components/AIAssistant';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const ChatPage = () => {
  const { lang } = useApp();

  return (
    <FeaturePageLayout title={t(lang, 'chatbot')} icon={MessageSquare}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-2">💬 {t(lang, 'chatbot')}</h2>
          <p className="text-gray-600 mb-4">
            Ask your farming questions and get instant AI-powered advice tailored to your crops and location.
          </p>
        </div>
        <AIAssistant />
      </div>
    </FeaturePageLayout>
  );
};

export default ChatPage;

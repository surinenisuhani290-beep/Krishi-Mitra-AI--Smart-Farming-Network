import React, { useState } from 'react';
import { Mic, Volume2 } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import WeatherCard from '../components/WeatherCard';
import { useApp } from '../contexts/AppContext';
import { t, langMap } from '../lib/translations';

const VoicePage = () => {
  const { lang } = useApp();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Voice recognition not supported in your browser');
      return;
    }

    const recognition = new SR();
    recognition.lang = langMap[lang];
    setIsListening(true);
    setTranscript('Listening...');

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      setIsListening(false);
    };

    recognition.onerror = () => {
      setTranscript('Error recognizing speech');
      setIsListening(false);
    };

    recognition.start();
  };

  return (
    <FeaturePageLayout title={t(lang, 'voiceAssistant')} icon={Mic}>
      <div className="space-y-6">
        <WeatherCard />

        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-4">🎤 {t(lang, 'voiceAssistant')}</h2>
          <p className="text-gray-600 mb-6">
            Tap the microphone button and speak your farming question in {lang.toUpperCase()}. The AI will understand and respond in your language.
          </p>

          <button
            onClick={startListening}
            disabled={isListening}
            className="krishi-button-primary w-full justify-center py-4 text-lg disabled:opacity-50"
          >
            <Mic className={`w-6 h-6 ${isListening ? 'animate-pulse' : ''}`} />
            {isListening ? 'Listening...' : t(lang, 'startListening')}
          </button>

          {transcript && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm font-semibold text-gray-700 mb-2">You said:</p>
              <p className="text-gray-800 text-lg">"{transcript}"</p>
            </div>
          )}
        </div>
      </div>
    </FeaturePageLayout>
  );
};

export default VoicePage;

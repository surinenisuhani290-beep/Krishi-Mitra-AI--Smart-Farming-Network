import React, { useState, useEffect, useRef } from 'react';
import { Send, Mic, Volume2, AlertCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { t, langMap } from '../lib/translations';
import WeatherCard from './WeatherCard';

const AIAssistant = () => {
  const { lang, location } = useApp();
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const memoryRef = useRef({ crop: '', problem: '' });

  const updateMemory = (text) => {
    const t_text = text.toLowerCase();
    if (t_text.includes('rice')) memoryRef.current.crop = 'rice';
    if (t_text.includes('wheat')) memoryRef.current.crop = 'wheat';
    if (t_text.includes('cotton')) memoryRef.current.crop = 'cotton';
    if (t_text.includes('tomato')) memoryRef.current.crop = 'tomato';
    if (t_text.includes('yellow')) memoryRef.current.problem = 'yellowing';
    if (t_text.includes('spots')) memoryRef.current.problem = 'leaf spots';
    if (t_text.includes('wilt')) memoryRef.current.problem = 'wilting';
    if (t_text.includes('pest')) memoryRef.current.problem = 'pest infestation';
  };

  const speak = (text) => {
    if (!text) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = window.speechSynthesis.getVoices();
      const voice = voices.find(v => v.lang === langMap[lang]) || voices.find(v => v.lang.startsWith(lang));
      if (voice) utterance.voice = voice;
      utterance.lang = langMap[lang];
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } catch (err) {
      console.error('Speech error:', err);
    }
  };

  const askAI = async (msg) => {
    if (!msg.trim()) return;
    setLoading(true);
    try {
      updateMemory(msg);
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are an agriculture assistant helping farmers in India. 
Crop: ${memoryRef.current.crop || 'unknown'}
Problem: ${memoryRef.current.problem || 'unknown'}
Location: ${location}
Language: ${lang}

Provide ONLY a JSON response with this structure:
{
  "disease": "disease name",
  "solution": "practical solution",
  "precautions": "prevention measures"
}

Rules:
- Answer ONLY in ${lang} language
- Be concise and farmer-friendly
- No repeated questions
- No explanations outside JSON`,
            },
            { role: 'user', content: msg },
          ],
        }),
      });

      const data = await response.json();
      try {
        const result = JSON.parse(data.choices[0].message.content);
        setResponse(result);
        speak(`${result.disease}. ${result.solution}`);
        
        // Save to history
        const history = JSON.parse(localStorage.getItem('cropHistory') || '[]');
        history.push({
          input: msg,
          disease: result.disease,
          solution: result.solution,
          precautions: result.precautions,
          crop: memoryRef.current.crop,
          problem: memoryRef.current.problem,
          location,
          language: lang,
          date: new Date().toISOString(),
        });
        localStorage.setItem('cropHistory', JSON.stringify(history));
      } catch (e) {
        setResponse({
          disease: data.choices?.[0]?.message?.content || 'Unable to analyze',
          solution: 'Please try again with more details',
          precautions: '',
        });
      }
    } catch (err) {
      console.error('AI Error:', err);
      setResponse({
        disease: 'Error',
        solution: 'Could not connect to AI service',
        precautions: 'Check your API key and internet connection',
      });
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Voice recognition not supported');
      return;
    }

    const recognition = new SR();
    recognition.lang = langMap[lang];
    setIsListening(true);

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      setInput(text);
      setIsListening(false);
      askAI(text);
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSend = () => {
    if (input.trim()) {
      askAI(input);
      setInput('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <WeatherCard />

      {/* Input Section */}
      <div className="krishi-card mt-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t(lang, 'askAboutCrops')}
            className="krishi-input flex-1"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="krishi-button-primary disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            {t(lang, 'send')}
          </button>
          <button
            onClick={startListening}
            disabled={loading || isListening}
            className="krishi-button-primary disabled:opacity-50"
          >
            <Mic className={`w-4 h-4 ${isListening ? 'animate-pulse' : ''}`} />
          </button>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="krishi-card mt-4 flex items-center justify-center">
          <div className="spinner"></div>
          <span className="ml-3 text-gray-600">{t(lang, 'loading')}</span>
        </div>
      )}

      {/* Response Section */}
      {response && (
        <div className="krishi-card mt-6 border-l-4 border-krishi-green">
          <div className="flex items-start gap-2 mb-4">
            <AlertCircle className="w-5 h-5 text-krishi-green flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="font-bold text-lg text-foreground">{t(lang, 'disease')}</h3>
              <p className="text-gray-700">{response.disease}</p>
            </div>
          </div>

          <div className="space-y-4 mt-4 pt-4 border-t border-gray-200">
            <div>
              <h4 className="font-bold text-foreground mb-2">{t(lang, 'solution')}</h4>
              <p className="text-gray-700 leading-relaxed">{response.solution}</p>
            </div>

            {response.precautions && (
              <div>
                <h4 className="font-bold text-foreground mb-2">{t(lang, 'precautions')}</h4>
                <p className="text-gray-700 leading-relaxed">{response.precautions}</p>
              </div>
            )}
          </div>

          <button
            onClick={() => speak(`${response.disease}. ${response.solution}`)}
            className="krishi-button-secondary mt-4 w-full flex items-center justify-center gap-2"
          >
            <Volume2 className="w-4 h-4" />
            {t(lang, 'voice')}
          </button>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

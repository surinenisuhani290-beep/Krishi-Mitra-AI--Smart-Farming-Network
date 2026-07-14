import React, { useState } from 'react';
import { Search, Upload } from 'lucide-react';
import FeaturePageLayout from '../components/FeaturePageLayout';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const DetectPage = () => {
  const { lang } = useApp();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const analyzeImage = async () => {
    if (!image) return;
    setLoading(true);

    // Simulated result - replace with actual API call
    setTimeout(() => {
      setResult({
        disease: 'Leaf Spot Disease',
        confidence: '92%',
        description: 'Fungal infection on rice leaves',
        treatment: 'Apply recommended fungicide and maintain proper spacing',
        prevention: 'Avoid over-irrigation and monitor daily',
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <FeaturePageLayout title={t(lang, 'diseaseDetection')} icon={Search}>
      <div className="space-y-6">
        <div className="krishi-card">
          <h2 className="text-lg font-bold text-foreground mb-4">📸 {t(lang, 'uploadImage')}</h2>
          <p className="text-gray-600 mb-4">
            Upload a photo of your crop leaf to get instant disease analysis and treatment recommendations.
          </p>

          <div className="border-2 border-dashed border-krishi-green rounded-lg p-8 text-center cursor-pointer hover:bg-green-50 transition-colors">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              id="imageInput"
            />
            <label htmlFor="imageInput" className="cursor-pointer flex flex-col items-center gap-3">
              <Upload className="w-12 h-12 text-krishi-green" />
              <span className="font-semibold text-foreground">{t(lang, 'uploadImage')}</span>
              <span className="text-sm text-gray-500">PNG, JPG up to 5MB</span>
            </label>
          </div>

          {preview && (
            <div className="mt-6">
              <img src={preview} alt="Preview" className="w-full max-h-64 object-cover rounded-lg" />
              <button
                onClick={analyzeImage}
                disabled={loading}
                className="krishi-button-primary w-full mt-4 justify-center disabled:opacity-50"
              >
                {loading ? 'Analyzing...' : t(lang, 'analyzeImage')}
              </button>
            </div>
          )}
        </div>

        {result && (
          <div className="krishi-card border-l-4 border-krishi-orange">
            <h3 className="text-lg font-bold text-krishi-orange mb-4">🔍 {result.disease}</h3>
            <div className="space-y-3 text-gray-700">
              <p><span className="font-semibold">Confidence:</span> {result.confidence}</p>
              <p><span className="font-semibold">Description:</span> {result.description}</p>
              <p><span className="font-semibold">Treatment:</span> {result.treatment}</p>
              <p><span className="font-semibold">Prevention:</span> {result.prevention}</p>
            </div>
          </div>
        )}
      </div>
    </FeaturePageLayout>
  );
};

export default DetectPage;

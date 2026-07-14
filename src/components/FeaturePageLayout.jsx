import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import { t } from '../lib/translations';

const FeaturePageLayout = ({ title, icon: Icon, children }) => {
  const { lang } = useApp();

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="krishi-gradient px-4 pt-6 pb-8 rounded-b-3xl shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <Link to="/" className="krishi-button-secondary">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          {Icon && <Icon className="w-8 h-8 text-primary-foreground" />}
          <h1 className="text-2xl md:text-3xl font-bold text-primary-foreground">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 -mt-4 pt-6">
        {children}
      </div>
    </div>
  );
};

export default FeaturePageLayout;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import VoicePage from './pages/VoicePage';
import DetectPage from './pages/DetectPage';
import SmsPage from './pages/SmsPage';
import IvrPage from './pages/IvrPage';
import MarketPage from './pages/MarketPage';
import SchemesPage from './pages/SchemesPage';
import AlertsPage from './pages/AlertsPage';
import StoresPage from './pages/StoresPage';
import TipPage from './pages/TipPage';
import HistoryPage from './pages/HistoryPage';
import HealthPage from './pages/HealthPage';
import PredictivePage from './pages/PredictivePage';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-background">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/detect" element={<DetectPage />} />
              <Route path="/voice" element={<VoicePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/sms" element={<SmsPage />} />
              <Route path="/ivr" element={<IvrPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/schemes" element={<SchemesPage />} />
              <Route path="/alerts" element={<AlertsPage />} />
              <Route path="/stores" element={<StoresPage />} />
              <Route path="/tip" element={<TipPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/health" element={<HealthPage />} />
              <Route path="/predictive" element={<PredictivePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

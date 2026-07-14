# Krishi Mitra AI – Smart Farming Network

**A complete AI-powered agricultural assistant for Indian farmers**

![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![Vite](https://img.shields.io/badge/Vite-5+-blueviolet)

## 🌾 Overview

Krishi Mitra AI is a smart farming platform that combines artificial intelligence, real-time weather data, and farmer-friendly interfaces to help Indian farmers make better agricultural decisions. The app supports **6 Indian languages** and provides multilingual voice assistance.

### Key Features

✅ **AI Crop Disease Detection** - Text or voice input for instant disease diagnosis
✅ **Multilingual Voice Assistant** - Support for English, Hindi, Telugu, Tamil, Kannada, Marathi
✅ **Real-time Weather Updates** - GPS-based weather alerts and farming recommendations
✅ **Market Prices** - Current commodity prices with trend analysis
✅ **Government Schemes** - Information on PM-KISAN, Crop Insurance, and more
✅ **Village Alerts** - Community-based agricultural warnings
✅ **Nearby Stores** - Find seeds, fertilizers, and equipment shops
✅ **Crop History** - Track past crop issues and solutions
✅ **Predictive Alerts** - AI-powered risk assessment based on weather
✅ **SMS/IVR Support** - Access for farmers without smartphones
✅ **Daily Tips** - Practical farming advice
✅ **Crop Health Monitoring** - Real-time crop health scoring

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm or yarn
- API Keys:
  - OpenAI API Key (for AI assistant)
  - OpenWeatherMap API Key (for weather data)

### Installation

```bash
# Clone repository
git clone https://github.com/surinenisuhani290-beep/Krishi-Mitra-AI--Smart-Farming-Network.git
cd Krishi-Mitra-AI--Smart-Farming-Network

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Add your API keys to .env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_OPENWEATHERMAP_API_KEY=your_openweather_api_key_here

# Start development server
npm run dev
```

The app will open at **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AIAssistant.jsx         # AI chat interface with voice
│   ├── WeatherCard.jsx         # Weather display with alerts
│   ├── Navbar.jsx              # Navigation bar
│   ├── Footer.jsx              # Footer component
│   ├── LanguageSelector.jsx    # Language switcher
│   └── FeaturePageLayout.jsx   # Common page layout template
│
├── pages/               # Page components (one per route)
│   ├── HomePage.jsx            # Home/dashboard
│   ├── ChatPage.jsx            # AI chatbot
│   ├── VoicePage.jsx           # Voice assistant
│   ├── DetectPage.jsx          # Disease detection
│   ├── SmsPage.jsx             # SMS mode
│   ├── IvrPage.jsx             # IVR system
│   ├── MarketPage.jsx          # Market prices
│   ├── SchemesPage.jsx         # Government schemes
│   ├── AlertsPage.jsx          # Village alerts
│   ├── StoresPage.jsx          # Nearby stores
│   ├── TipPage.jsx             # Daily tips
│   ├── HistoryPage.jsx         # Crop history
│   ├── HealthPage.jsx          # Crop health
│   └── PredictivePage.jsx      # Predictive alerts
│
├── contexts/            # Context API
│   └── AppContext.jsx          # Global app state
│
├── lib/                 # Utilities & translations
│   └── translations.js         # Multilingual support (6 languages)
│
├── App.jsx              # Main app component with routes
├── main.jsx             # React entry point
└── index.css            # Global styles
```

## 🌐 Supported Languages

- 🇮🇳 **English** (en)
- 🇮🇳 **Hindi** (hi)
- 🇮🇳 **Telugu** (te)
- 🇮🇳 **Tamil** (ta)
- 🇮🇳 **Kannada** (kn)
- 🇮🇳 **Marathi** (mr)

## 🎯 Features Explained

### AI Crop Assistant
- Ask about crop diseases, pests, and farming problems
- Get instant AI-powered solutions using GPT-4o-mini
- Voice input/output in your preferred language
- Maintains memory of your crops and problems
- Stores conversation history in localStorage

### Weather Integration
- GPS-based location detection using Geolocation API
- Real-time weather updates from OpenWeatherMap
- Smart weather alerts (rain, high temp, strong wind, high humidity)
- Farming recommendations based on current conditions

### Market Intelligence
- Live commodity prices for rice, wheat, cotton, tomato, maize, onion
- Price trends and percentage changes
- Historical price comparison
- Market insights for farmers

### Government Support
- PM-KISAN scheme details
- Crop insurance information (PMFBY)
- Soil health card program
- Farm mechanization subsidies
- Direct apply buttons for schemes

### Community Features
- Village-wide agricultural alerts
- Pest and disease warnings
- Nearby agricultural store locator
- Emergency support contacts

## ⚙️ Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **State Management:** React Context + useRef
- **APIs Used:**
  - OpenAI GPT-4o-mini (AI Assistant)
  - OpenWeatherMap (Weather Data)
  - BigDataCloud (Reverse Geocoding)
  - Browser APIs (Geolocation, Speech Recognition, Speech Synthesis)

## 🔐 Security & Privacy

⚠️ **Important Security Note:**

This is a frontend Vite application. API keys are exposed in the browser for demonstration purposes. **For production:**

1. Create a backend server to handle API calls
2. Store API keys securely on the server
3. Use environment variables and secrets management
4. Implement proper authentication and authorization
5. Follow OWASP security guidelines
6. Enable HTTPS only

## 📱 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Voice recognition and synthesis work best on Chrome/Edge.

## 📊 Data Flow

```
┌─────────────┐
│   Farmer    │
└──────┬──────┘
       │
       ▼
┌─────────────────────┐
│  React App (UI)     │
│  - HomePage         │
│  - ChatPage         │
│  - VoicePage        │
│  - 13 Feature Pages │
└─────────┬───────────┘
          │
     ┌────┴──────────────────────┐
     │                           │
     ▼                           ▼
┌──────────────┐         ┌──────────────┐
│  External    │         │  Local       │
│  APIs        │         │  Storage     │
├──────────────┤         ├──────────────┤
│ OpenAI       │         │ localStorage │
│ Weather API  │         │ Crop History │
│ Geocoding    │         │ Preferences  │
└──────────────┘         └──────────────┘
```

## 💾 Data Storage

- **Crop History:** Browser localStorage (JSON)
- **User Preferences:** Language and theme cached
- **Real-time Data:** Fetched fresh from APIs
- **No backend:** Pure frontend application

## 🚧 Known Limitations

1. Disease detection from images not fully implemented (UI ready)
2. SMS and IVR are simulated (requires backend integration)
3. Market prices are sample data (integrate with real APIs like NCDEX)
4. Voice recognition depends on browser support
5. Location detection requires HTTPS in production
6. Limited to browser's speech synthesis voices

## 🔮 Future Enhancements

- [ ] Real image-based disease detection using TensorFlow.js or ML models
- [ ] Backend integration for SMS and IVR functionality
- [ ] Drone integration for aerial crop monitoring
- [ ] IoT sensor data integration
- [ ] Blockchain for supply chain tracking
- [ ] Native mobile app (React Native)
- [ ] Offline mode support (Service Workers)
- [ ] Advanced analytics dashboard
- [ ] Farmer community forum
- [ ] Video tutorials library
- [ ] Soil moisture sensors integration
- [ ] Predictive yield estimation

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENAI_API_KEY=sk-...
VITE_OPENWEATHERMAP_API_KEY=...
VITE_BIGDATACLOUD_API_KEY=...
```

## 📝 Usage Examples

### Chat with AI Assistant
```
User Input: "My rice crop leaves are turning yellow"

AI Response:
Disease: Possible rice leaf blast or nutrient deficiency
Solution: Remove infected leaves, apply recommended fungicide, check nitrogen levels
Precautions: Avoid excess water, maintain proper spacing, monitor regularly
```

### Voice Commands (Multilingual)
- Switch language → Auto-switches UI, voice recognition, and voice output
- Ask in any supported language → Get response in same language
- AI speaks the response aloud

### Weather-Based Alerts
```
Current Weather: 40°C, 75% humidity, Rain expected

Alerts Generated:
⚠️ Rain expected
⚠️ High temperature (>38°C)
✓ Humidity level optimal
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support & Contact

- **Email:** contact@krishimitraai.com
- **Phone:** +91 1800-KRISHI-1
- **Website:** krishimitraai.com
- **GitHub Issues:** Report bugs and feature requests

## 🙏 Acknowledgments

- Built with ❤️ for Indian farmers to improve agricultural productivity
- Inspired by challenges faced by rural farming communities
- Thanks to open-source community for amazing tools and libraries
- Special thanks to React, Vite, Tailwind CSS, and Lucide teams

---

**Made for farmers | Krishi Mitra AI – Smart Farming Network**

*Empowering Indian agriculture with AI and technology*

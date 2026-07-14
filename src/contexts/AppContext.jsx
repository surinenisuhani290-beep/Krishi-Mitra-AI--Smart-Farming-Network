import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [lang, setLang] = useState('en');
  const [location, setLocation] = useState('Detecting...');
  const [weather, setWeather] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  /* LOCATION DETECTION */
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        setLat(latitude);
        setLon(longitude);

        /* REVERSE GEOCODING */
        try {
          const locRes = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`
          );
          const locData = await locRes.json();
          setLocation(locData.city || locData.locality || 'Your Area');
        } catch (err) {
          console.error('Geocoding error:', err);
          setLocation('Location detected');
        }

        /* WEATHER API */
        try {
          const wRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_OPENWEATHERMAP_API_KEY}&units=metric`
          );
          const wData = await wRes.json();

          setWeather({
            temp: wData.main?.temp,
            humidity: wData.main?.humidity,
            condition: wData.weather?.[0]?.main,
            windSpeed: wData.wind?.speed,
            feelsLike: wData.main?.feels_like,
            pressure: wData.main?.pressure,
          });

          /* WEATHER ALERTS */
          let a = [];
          if (wData.weather?.[0]?.main?.includes('Rain')) a.push('Rain expected');
          if (wData.main?.temp > 38) a.push('High temperature');
          if (wData.wind?.speed > 12) a.push('Strong wind');
          if (wData.main?.humidity > 80) a.push('High humidity');
          setAlerts(a);
        } catch (err) {
          console.error('Weather error:', err);
        }
      },
      (err) => {
        setLocation('Location Off');
        console.error('Geolocation error:', err);
      }
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        location,
        setLocation,
        weather,
        setWeather,
        alerts,
        setAlerts,
        darkMode,
        setDarkMode,
        lat,
        lon,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}

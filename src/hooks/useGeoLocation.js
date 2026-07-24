import { useState, useEffect } from 'react';
import { COUNTRY_TO_CURRENCY, fetchLiveExchangeRates } from '../utils/currencyEngine';
import { LANGUAGES } from '../data/translations';

export function useGeoLocation(setLang, setCurrency) {
  const [geoData, setGeoData] = useState({
    countryCode: 'IN',
    countryName: 'India',
    city: 'Ahilyanagar',
    currency: 'INR',
    detected: false
  });

  useEffect(() => {
    async function autoDetectGeo() {
      try {
        // Fetch live exchange rates
        await fetchLiveExchangeRates();

        // Detect browser language
        const browserLang = navigator.language ? navigator.language.split('-')[0] : 'en';
        const matchedLang = LANGUAGES.find((l) => l.code === browserLang);
        if (matchedLang) {
          setLang(matchedLang.code);
        }

        // IP Geo-location Detection API
        const res = await fetch('https://ipapi.co/json/');
        if (res.ok) {
          const data = await res.json();
          const country = data.country_code || 'IN';
          const currency = COUNTRY_TO_CURRENCY[country] || 'USD';

          setGeoData({
            countryCode: country,
            countryName: data.country_name || 'India',
            city: data.city || 'Ahilyanagar',
            currency: currency,
            detected: true
          });

          // Auto-set currency if not set in local storage
          const savedCurrency = localStorage.getItem('dnyanx_currency');
          if (!savedCurrency) {
            setCurrency(currency);
          }
        }
      } catch (err) {
        console.warn('IP Geo-location detection using fallback default:', err);
      }
    }

    autoDetectGeo();
  }, [setLang, setCurrency]);

  return geoData;
}

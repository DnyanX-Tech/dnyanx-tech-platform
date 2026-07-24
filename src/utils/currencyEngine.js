// DnyanX Tech Platform - Global Currency Engine & Live Exchange Rates

export const CURRENCY_MAP = {
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1.0, flag: '🇮🇳', defaultCountry: 'IN' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012, flag: '🇺🇸', defaultCountry: 'US' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.011, flag: '🇪🇺', defaultCountry: 'DE' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0094, flag: '🇬🇧', defaultCountry: 'GB' },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 1.87, flag: '🇯🇵', defaultCountry: 'JP' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 0.018, flag: '🇦🇺', defaultCountry: 'AU' },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 0.016, flag: '🇨🇦', defaultCountry: 'CA' },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 0.086, flag: '🇨🇳', defaultCountry: 'CN' },
  AED: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.044, flag: '🇦🇪', defaultCountry: 'AE' },
  SAR: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', rate: 0.045, flag: '🇸🇦', defaultCountry: 'SA' },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 0.016, flag: '🇸🇬', defaultCountry: 'SG' },
  CHF: { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', rate: 0.011, flag: '🇨🇭', defaultCountry: 'CH' }
};

export const COUNTRY_TO_CURRENCY = {
  IN: 'INR',
  US: 'USD',
  GB: 'GBP',
  DE: 'EUR',
  FR: 'EUR',
  IT: 'EUR',
  ES: 'EUR',
  NL: 'EUR',
  JP: 'JPY',
  AU: 'AUD',
  CA: 'CAD',
  CN: 'CNY',
  AE: 'AED',
  SA: 'SAR',
  SG: 'SGD',
  CH: 'CHF'
};

let cachedRates = { ...CURRENCY_MAP };
let lastFetchTime = 0;

export async function fetchLiveExchangeRates() {
  try {
    const now = Date.now();
    if (now - lastFetchTime < 3600000) return cachedRates; // Cache for 1 hour

    const res = await fetch('https://api.exchangerate-api.com/v4/latest/INR');
    if (!res.ok) throw new Error('Failed to fetch exchange rates');
    const data = await res.json();

    if (data && data.rates) {
      Object.keys(CURRENCY_MAP).forEach((code) => {
        if (data.rates[code]) {
          cachedRates[code].rate = data.rates[code];
        }
      });
      lastFetchTime = now;
    }
  } catch (err) {
    console.warn('Using offline exchange rates fallback matrix:', err);
  }
  return cachedRates;
}

export function formatPrice(baseInrAmount, targetCurrency = 'INR') {
  const currencyInfo = cachedRates[targetCurrency] || CURRENCY_MAP.INR;
  const converted = baseInrAmount * currencyInfo.rate;

  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyInfo.code,
      maximumFractionDigits: targetCurrency === 'JPY' || targetCurrency === 'INR' ? 0 : 2
    }).format(converted);
  } catch {
    return `${currencyInfo.symbol}${converted.toFixed(2)}`;
  }
}

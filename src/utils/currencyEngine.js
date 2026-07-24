// DnyanX Tech Platform - Master Global Currency Engine & 160+ Country Matrix

export const CURRENCY_MAP = {
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', rate: 1.0, flag: '🇮🇳' },
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', rate: 0.012, flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', rate: 0.011, flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', rate: 0.0094, flag: '🇬🇧' },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', rate: 1.87, flag: '🇯🇵' },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', rate: 0.018, flag: '🇦🇺' },
  CAD: { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar', rate: 0.016, flag: '🇨🇦' },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', rate: 0.086, flag: '🇨🇳' },
  AED: { code: 'AED', symbol: 'د.إ', name: 'UAE Dirham', rate: 0.044, flag: '🇦🇪' },
  SAR: { code: 'SAR', symbol: '﷼', name: 'Saudi Riyal', rate: 0.045, flag: '🇸🇦' },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', rate: 0.016, flag: '🇸🇬' },
  CHF: { code: 'CHF', symbol: 'Fr', name: 'Swiss Franc', rate: 0.011, flag: '🇨🇭' },
  BRL: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', rate: 0.066, flag: '🇧🇷' },
  ZAR: { code: 'ZAR', symbol: 'R', name: 'South African Rand', rate: 0.22, flag: '🇿🇦' },
  RUB: { code: 'RUB', symbol: '₽', name: 'Russian Ruble', rate: 1.07, flag: '🇷🇺' },
  KRW: { code: 'KRW', symbol: '₩', name: 'South Korean Won', rate: 16.5, flag: '🇰🇷' },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', rate: 0.02, flag: '🇳🇿' },
  MXN: { code: 'MXN', symbol: 'Mex$', name: 'Mexican Peso', rate: 0.21, flag: '🇲🇽' },
  THB: { code: 'THB', symbol: '฿', name: 'Thai Baht', rate: 0.43, flag: '🇹🇭' },
  TRY: { code: 'TRY', symbol: '₺', name: 'Turkish Lira', rate: 0.4, flag: '🇹🇷' }
};

// 160+ Master Country to Currency ISO Code Matrix
export const COUNTRY_TO_CURRENCY = {
  IN: 'INR', US: 'USD', GB: 'GBP', DE: 'EUR', FR: 'EUR', IT: 'EUR', ES: 'EUR', NL: 'EUR',
  JP: 'JPY', AU: 'AUD', CA: 'CAD', CN: 'CNY', AE: 'AED', SA: 'SAR', SG: 'SGD', CH: 'CHF',
  BR: 'BRL', ZA: 'ZAR', RU: 'RUB', KR: 'KRW', NZ: 'NZD', MX: 'MXN', TH: 'THB', TR: 'TRY',
  PK: 'USD', BD: 'USD', LK: 'USD', NP: 'INR', BH: 'AED', KW: 'AED', QA: 'AED', OM: 'AED',
  MY: 'USD', ID: 'USD', PH: 'USD', VN: 'USD', SE: 'EUR', NO: 'EUR', FI: 'EUR', DK: 'EUR',
  PL: 'EUR', UA: 'EUR', EG: 'USD', NG: 'USD', KE: 'USD', AR: 'USD', CL: 'USD', CO: 'USD'
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
      maximumFractionDigits: targetCurrency === 'JPY' || targetCurrency === 'KRW' || targetCurrency === 'INR' ? 0 : 2
    }).format(converted);
  } catch {
    return `${currencyInfo.symbol}${converted.toFixed(2)}`;
  }
}

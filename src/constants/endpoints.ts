import { API_KEY } from './apiKey';

export default {
  baseURL: 'https://www.alphavantage.co/query',
  marketStatus: `?function=MARKET_STATUS&apikey=${API_KEY}`,
  searchTicker: (tickerName: string) => `?function=SYMBOL_SEARCH&keywords=${tickerName}&apikey=${API_KEY}`
};

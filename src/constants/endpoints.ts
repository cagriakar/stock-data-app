import { API_KEY } from './apiKey';

export default {
  baseURL: 'https://www.alphavantage.co/query',
  marketStatus: `?function=MARKET_STATUS&apikey=${API_KEY}`
};

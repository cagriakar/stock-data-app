import api from '@/api';
import endpoints from '@/constants/endpoints';
import { MarketStatus } from '@/types';

type MarketStatusResponse = {
  Information: string;
  endpoint: string;
  markets: MarketStatus[];
};

async function getMarketStatus() {
  const res = await api.get<MarketStatusResponse>(endpoints.marketStatus);
  console.log(`getMarketStatus , res:`, res);
  if (res.data?.Information) {
    // 25 requests per day
    throw Error(res.data.Information);
  }
  return res.data;
}

export default {
  getMarketStatus
};

export { type MarketStatusResponse };

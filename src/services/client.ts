import api from '@/api';
import endpoints from '@/constants/endpoints';
import type { MarketStatus, RowMatch } from '@/types';

type MarketStatusResponse =
  | {
      Information: string;
      endpoint: never;
      markets: never;
    }
  | {
      Information: never;
      endpoint: string;
      markets: MarketStatus[];
    };

async function getMarketStatus() {
  const res = await api.get<MarketStatusResponse>(endpoints.marketStatus);

  if (res.data?.Information) {
    // 25 requests per day
    throw Error(res.data.Information);
  }
  return res.data.markets;
}

type SearchResponse =
  | {
      Information: string;
      bestMatches: never;
    }
  | {
      Information: never;
      bestMatches: RowMatch[];
    };

async function searchTickerByName(tickerName: string) {
  const res = await api.get<SearchResponse>(endpoints.searchTicker(tickerName));

  if (res.data?.Information) {
    // 25 requests per day
    throw Error(res.data.Information);
  }
  return res.data.bestMatches;
}

export default {
  getMarketStatus,
  searchTickerByName
};

export { type MarketStatusResponse };

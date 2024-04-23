import MarketStatus from '@/components/MarketStatusInfo';

type MarketStatus = {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes: string;
};

export { type MarketStatus };

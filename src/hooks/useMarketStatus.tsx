import queryKeys from '@/constants/queryKeys';
import { formatMarketData } from '@/lib/utils';
import client from '@/services/client';
import type { MarketStatus } from '@/types';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export default function useMarketStatus(options?: Partial<UseQueryOptions<MarketStatus[]>>) {
  return useQuery({
    queryKey: [queryKeys.marketStatus],
    queryFn: client.getMarketStatus,
    /* the data fetched by the query will be considered fresh and not in need of refetching. */
    staleTime: Infinity,
    gcTime: Infinity,
    select: formatMarketData,
    ...options
  });
}

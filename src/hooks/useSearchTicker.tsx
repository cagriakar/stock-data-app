import queryKeys from '@/constants/queryKeys';
import { formatMatchData } from '@/lib/utils';
import client from '@/services/client';
import type { RowMatch } from '@/types';
import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

export default function useSearchTicker(tickerName: string, options?: Partial<UseQueryOptions<RowMatch[]>>) {
  return useQuery({
    queryKey: [queryKeys.searchTicker, tickerName],
    queryFn: () => client.searchTickerByName(tickerName),
    /* the data fetched by the query will be considered fresh and not in need of refetching. */
    staleTime: Infinity,
    gcTime: Infinity,
    ...options,
    select: formatMatchData
  });
}

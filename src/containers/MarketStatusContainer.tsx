import MarketStatusInfo from '@/components/MarketStatusInfo';
import Error from '@/components/fallback/Error';
import LoadingContent from '@/components/fallback/LoadingContent';
import useMarketStatus from '@/hooks/useMarketStatus';

export default function MarketStatus() {
  const { data, isLoading, isRefetching, error } = useMarketStatus();

  if (isLoading || isRefetching)
    return (
      <div className='space-y-6'>
        <LoadingContent />
        <LoadingContent />
        <LoadingContent />
      </div>
    );

  if (error) return <Error message={error.message} />;

  return (
    <div className='space-y-4'>
      {data?.map((marketInfo) => (
        <MarketStatusInfo key={`${marketInfo.region}-${marketInfo.market_type}`} marketStatus={marketInfo} />
      ))}
    </div>
  );
}

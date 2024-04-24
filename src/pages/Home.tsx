import StockDataCard from '@/components/StockDataCard';
import Error from '@/components/fallback/Error';
import LoadingContent from '@/components/fallback/LoadingContent';
import SearchMe from '@/components/fallback/SearchMe';
import { Input } from '@/components/ui/input';
import useDebounce from '@/hooks/useDebounce';
import useSearchTicker from '@/hooks/useSearchTicker';
import type { Match } from '@/types';
import { Search } from 'lucide-react';
import { useState } from 'react';

type Props = {
  isLoading: boolean;
  data: Match[] | undefined;
  error: Error | null;
};
function Content({ isLoading, data, error }: Props) {
  if (isLoading) return <LoadingContent large />;
  if (error) return <Error message={error.message} />;

  if (typeof data === 'undefined' || data.length === 0) return <SearchMe />;

  return (
    <ul className='space-y-4'>
      {data.map((data) => (
        <li key={data.name} className='rounded-lg bg-background p-4 shadow-md dark:bg-secondary'>
          <StockDataCard data={data} />
        </li>
      ))}
    </ul>
  );
}
export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const filterTerm = useDebounce(searchTerm, 500);
  const { data, isLoading, error } = useSearchTicker(filterTerm, { enabled: !!filterTerm });

  return (
    <div className='mx-auto max-w-3xl'>
      <h1 className='text-3xl font-bold lg:text-4xl'>Stock Data App</h1>
      <div className='p-4'>
        <div className='relative'>
          <Search className='absolute left-2 top-3 h-4 w-4 text-muted-foreground' />
          <Input
            placeholder='Search'
            className='pl-8'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <Content isLoading={isLoading} data={data} error={error} />
    </div>
  );
}

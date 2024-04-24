import type { Match } from '@/types';
import { StoreIcon } from 'lucide-react';

type Props = {
  data: Match;
};
export default function StockDataCard({ data }: Props) {
  return (
    <>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='rounded-full bg-secondary p-2 dark:bg-background'>
            <StoreIcon className='h-6 w-6 text-secondary-foreground' />
          </div>
          <div>
            <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>{data.symbol}</h3>
            <p className='text-gray-500 dark:text-gray-400'>{data.name}</p>
          </div>
        </div>
        <div className='text-right'>
          <p className='text-gray-500 dark:text-gray-400'>{data.region}</p>
          <p className='text-gray-500 dark:text-gray-400'>{data.type}</p>
        </div>
      </div>
      <div className='mt-4 flex items-center justify-between'>
        <div>
          <p className='text-gray-500 dark:text-gray-400'>Market Open</p>
          <p className='text-gray-900 dark:text-gray-100'>{data.marketOpen}</p>
        </div>
        <div>
          <p className='text-gray-500 dark:text-gray-400'>Market Close</p>
          <p className='text-gray-900 dark:text-gray-100'>{data.marketClose}</p>
        </div>
        <div>
          <p className='text-gray-500 dark:text-gray-400'>Timezone</p>
          <p className='text-gray-900 dark:text-gray-100'>{data.timezone}</p>
        </div>
        <div>
          <p className='text-gray-500 dark:text-gray-400'>Currency</p>
          <p className='text-gray-900 dark:text-gray-100'>{data.currency}</p>
        </div>
      </div>
    </>
  );
}

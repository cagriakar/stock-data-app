import StatusBadge from '@/components/StatusBadge';
import type { MarketStatus } from '@/types';

type Props = {
  marketStatus: MarketStatus;
};

export default function MarketStatusInfo({ marketStatus }: Props) {
  return (
    <div>
      <h3 className='text-sm font-medium'>
        {marketStatus.region} - {marketStatus.market_type}
      </h3>
      <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
        <ClockIcon className='h-4 w-4' />
        <span>Open: {marketStatus.local_open || '--'}</span>
        <span>Close: {marketStatus.local_close || '--'}</span>
      </div>
      <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
        <BuildingIcon className='h-4 w-4' />
        <span>{marketStatus.primary_exchanges}</span>
      </div>
      <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
        <SignalIcon className='h-4 w-4' />
        <StatusBadge status={marketStatus.current_status} />
      </div>
    </div>
  );
}

function BuildingIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='16' height='20' x='4' y='2' rx='2' ry='2' />
      <path d='M9 22v-4h6v4' />
      <path d='M8 6h.01' />
      <path d='M16 6h.01' />
      <path d='M12 6h.01' />
      <path d='M12 10h.01' />
      <path d='M12 14h.01' />
      <path d='M16 10h.01' />
      <path d='M16 14h.01' />
      <path d='M8 10h.01' />
      <path d='M8 14h.01' />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <circle cx='12' cy='12' r='10' />
      <polyline points='12 6 12 12 16 14' />
    </svg>
  );
}

function SignalIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M2 20h.01' />
      <path d='M7 20v-4' />
      <path d='M12 20v-8' />
      <path d='M17 20V8' />
      <path d='M22 4v16' />
    </svg>
  );
}

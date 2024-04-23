import { Badge } from '@/components/ui/badge';

export default function MarketStatus() {
  return (

      <div className='space-y-4'>
        <div>
          <h3 className='text-sm font-medium'>United States</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 9:30 AM</span>
            <span>Close: 4:00 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>NYSE, NASDAQ</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium'>Canada</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 9:30 AM</span>
            <span>Close: 4:00 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>TSX</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium'>Canada</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 9:30 AM</span>
            <span>Close: 4:00 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>TSX</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium'>Canada</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 9:30 AM</span>
            <span>Close: 4:00 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>TSX</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium'>United Kingdom</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 8:00 AM</span>
            <span>Close: 4:30 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>LSE</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
        <div>
          <h3 className='text-sm font-medium'>Germany</h3>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <ClockIcon className='h-4 w-4' />
            <span>Open: 9:00 AM</span>
            <span>Close: 5:30 PM</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BuildingIcon className='h-4 w-4' />
            <span>DAX</span>
          </div>
          <div className='mt-1 flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <SignalIcon className='h-4 w-4' />
            <Badge className='rounded-md bg-green-500 px-2 py-1 text-white' variant='outline'>
              Open
            </Badge>
          </div>
        </div>
      </div>

  );
}

function BuildingIcon(props) {
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

function ClockIcon(props) {
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

function SignalIcon(props) {
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
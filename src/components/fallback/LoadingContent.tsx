import { Skeleton } from '../ui/skeleton';

export default function LoadingContent() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-4 w-[100px]' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px]' />
        <Skeleton className='h-4 w-[200px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  );
}
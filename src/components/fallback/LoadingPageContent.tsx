import { Skeleton } from '@/components/ui/skeleton';

export default function LoadingPageContent() {
  return (
    <div className='grid gap-4 md:flex md:min-h-[60vh] md:items-center'>
      <div className='flex flex-col space-y-3'>
        <Skeleton className='h-[125px] w-[250px] rounded-xl' />
        <div className='space-y-2'>
          <Skeleton className='h-4 w-[250px]' />
          <Skeleton className='h-4 w-[200px]' />
        </div>
      </div>
      <div className='text-center md:text-start'>
        <h1 className='text-3xl'>Loading Page...</h1>
        <p>It will take less than a second</p>
      </div>
    </div>
  );
}

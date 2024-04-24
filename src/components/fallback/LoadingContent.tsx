import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

type Props = {
  large?: boolean;
};
export default function LoadingContent({ large = false }: Props) {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className={cn('h-4', large ? 'w-[200px]' : 'w-[100px]')} />
      <div className='space-y-2'>
        <Skeleton className={cn('h-4', large ? 'w-[500px]' : 'w-[250px]')} />
        <Skeleton className={cn('h-4', large ? 'w-[400px]' : 'w-[200px]')} />
        <Skeleton className={cn('h-4', large ? 'w-[400px]' : 'w-[200px]')} />
      </div>
    </div>
  );
}

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Props = {
  status: string;
};
export default function StatusBadge({ status }: Props) {
  const color = status === 'open' ? 'green' : 'red';
  return (
    <Badge className={cn('rounded-md,px-2 , py-1', `bg-${color}-500`, 'text-white')} variant='outline'>
      {status.toLocaleUpperCase()}
    </Badge>
  );
}

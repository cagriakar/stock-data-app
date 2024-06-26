import type { BadgeProps } from '@/components/ui/badge';
import { Badge } from '@/components/ui/badge';

type Props = {
  status: string;
};
export default function StatusBadge({ status }: Props) {
  const variant: BadgeProps['variant'] = status === 'OPEN' ? 'default' : 'destructive';
  return (
    <Badge className='rounded-md,px-2 , py-1' variant={variant}>
      {status}
    </Badge>
  );
}

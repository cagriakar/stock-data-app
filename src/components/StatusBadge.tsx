import { Badge, BadgeProps } from '@/components/ui/badge';

type Props = {
  status: string;
};
export default function StatusBadge({ status }: Props) {
  const variant:BadgeProps['variant'] = status === 'open' ? 'default' : 'destructive';
  return (
    <Badge className='rounded-md,px-2 , py-1' variant={variant}>
      {status.toLocaleUpperCase()}
    </Badge>
  );
}

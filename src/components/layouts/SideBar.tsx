import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import queryKeys from '@/constants/queryKeys';
import useMarketStatus from '@/hooks/useMarketStatus';
import { cn } from '@/lib/utils';
import { useQueryClient } from '@tanstack/react-query';
import { RefreshCw } from 'lucide-react';
import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';

export default function SideBar({ children }: PropsWithChildren) {
  const location = useLocation();
  if (location.pathname === '/404') return null;

  return (
    <aside className='mx-auto mr-6 hidden md:block lg:w-1/4'>
      <Card className='w-72 overflow-y-auto' style={{ height: 500, position: 'relative', top: 100 }}>
        {children}
      </Card>
    </aside>
  );
}

function Title({ children }: PropsWithChildren) {
  const queryClient = useQueryClient();
  const { isFetching } = useMarketStatus();

  return (
    <CardHeader>
      <CardTitle>
        {children}
        <Button
          className='ml-2'
          variant='ghost'
          size='icon'
          onClick={() => queryClient.invalidateQueries({ queryKey: [queryKeys.marketStatus] })}
        >
          <RefreshCw className={cn({ 'animate-spin': isFetching }, 'h-4 w-4')} />
        </Button>
      </CardTitle>
    </CardHeader>
  );
}

function Content({ children }: PropsWithChildren) {
  return <CardContent>{children}</CardContent>;
}

SideBar.Title = Title;
SideBar.Content = Content;

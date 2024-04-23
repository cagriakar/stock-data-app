import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PropsWithChildren } from 'react';

export default function SideBar({ children }: PropsWithChildren) {
  return (
    <aside className='mx-auto mr-6 hidden md:block'>
      <Card className='w-72'>{children}</Card>
    </aside>
  );
}

function Title({ children }: PropsWithChildren) {
  return (
    <CardHeader>
      <CardTitle>{children}</CardTitle>
    </CardHeader>
  );
}

function Content({ children }: PropsWithChildren) {
  return <CardContent>{children}</CardContent>;
}

SideBar.Title = Title;
SideBar.Content = Content;

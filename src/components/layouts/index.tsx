import ThemeProvider from '@/contexts/theme/ThemeProvider';
import type { PropsWithChildren } from 'react';
import MarketStatus from '../MarketStatus';
import Footer from './Footer';
import Header from './Header';
import SideBar from './SideBar';

export default function Layout ({ children }: PropsWithChildren){
  return (
    <ThemeProvider>
      <div className='flex h-dvh flex-col bg-background text-foreground'>
        <Header />
        <div className='flex'>
          <main className='mx-auto h-full flex-1 p-6 sm:p-8'>{children}</main>
          <SideBar>
            <SideBar.Title>Market Status</SideBar.Title>
            <SideBar.Content>
              <MarketStatus />
            </SideBar.Content>
          </SideBar>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};



import ThemeProvider from '@/contexts/theme/ThemeProvider';
import type { PropsWithChildren } from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <div className='flex h-dvh flex-col bg-background text-foreground'>
        <Header />
        <main className='mx-auto p-6 sm:p-8 h-full'>{children}</main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Layout;

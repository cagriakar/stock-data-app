import LoadingPageContent from '@/components/fallback/LoadingPageContent';
import Page404 from '@/pages/404';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

export default function Routings()  {
	return (
    <Suspense fallback={<LoadingPageContent />}>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};


import Layout from '@/components/layouts';
import Routings from '@/router/Routings';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Layout>
          <Routings />
        </Layout>
      </Router>
    </QueryClientProvider>
  );
}

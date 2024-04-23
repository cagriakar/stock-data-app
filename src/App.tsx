import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts';
import './index.css';
import Routings from './router/Routings';

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

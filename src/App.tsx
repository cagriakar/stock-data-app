import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/layouts';
import './index.css';
import Routings from './router/Routings';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routings/>
      </Layout>
    </Router>
  );
}

import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/variables.css';

const container = document.getElementById('root');

createRoot(container).render(<App />);

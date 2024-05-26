import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from './context/global_context.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <App />
    <Toaster position='top-center' reverseOrder={false} />
  </GlobalProvider>
);

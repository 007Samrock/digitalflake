import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { GlobalProvider } from './context/global_context.tsx';
import { RoleProvider } from './context/role_context.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <RoleProvider>
      <App />
      <Toaster position='top-center' reverseOrder={false} />
    </RoleProvider>
  </GlobalProvider>
);

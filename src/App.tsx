import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomePage,
  LoginPage,
  RolePage,
  AddRolePage,
  EditRolePage,
  UserPage,
  AddUserPage,
  EditUserPage,
} from './pages';
import Layout from './components/Layout';
import ForgetPassword from './pages/ForgetPasswordPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/roles',
        children: [
          {
            index: true,
            element: <RolePage />,
          },
          {
            path: 'edit-role',
            element: <EditRolePage />,
          },
          {
            path: 'add-role',
            element: <AddRolePage />,
          },
        ],
      },
      {
        path: '/users',
        children: [
          {
            index: true,
            element: <UserPage />,
          },
          {
            path: 'edit-user',
            element: <EditUserPage />,
          },
          {
            path: 'add-user',
            element: <AddUserPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },

  {
    path: '/forget-password',
    element: <ForgetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

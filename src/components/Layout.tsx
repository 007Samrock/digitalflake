import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className='flex relative'>
        <Sidebar />
        <main className='min-h-screen flex-1 p-4'>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default Layout;

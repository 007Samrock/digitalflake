import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className='flex'>
        <Sidebar />
        <main className='min-h-screen flex-1 p-4'>
          <Outlet />
        </main>
      </div>
    </>
  );
};
export default Layout;

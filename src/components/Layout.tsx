import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useGlobalContext } from '../context/global_context';
import LogoutModal from './LogoutModal';

const Layout = () => {
  const { isLogoutModalOpen } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <div className='flex relative'>
        <Sidebar />
        <main className='min-h-screen flex-1 p-4'>
          <Outlet />
          {/* logout modal Overlay */}
          {isLogoutModalOpen && <LogoutModal />}
          {/* end of logout modal Overlay */}
        </main>
      </div>
    </div>
  );
};
export default Layout;

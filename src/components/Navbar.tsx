import { FaUserCircle, FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useGlobalContext } from '../context/global_context';

const Navbar: React.FC = () => {
  const { toggleSidebar, openLogoutModal } = useGlobalContext();

  return (
    <nav className='flex-center bg-primary'>
      <div className='section-center flex-between h-16'>
        <img src={logo} alt='digital-flake logo' className='w-36' />

        <div className='text-white flex-center gap-4'>
          <button
            type='button'
            className='text-2xl hover:text-gray-300'
            onClick={openLogoutModal}
          >
            <FaUserCircle />
          </button>
          <button
            type='button'
            className='block md:hidden text-2xl transition-all duration-300 hover:text-gray-300'
            onClick={toggleSidebar}
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

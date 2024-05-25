import { FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className='h-16 flex-center bg-primary'>
      <div className='section-center flex-between'>
        <img src={logo} alt='digital-flake logo' className='w-36' />
        <button type='button' className='text-2xl'>
          <FaUserCircle className='text-white' />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

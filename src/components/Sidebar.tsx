import { NavLink } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa6';
import { useGlobalContext } from '../context/global_context';
import { navLinks } from '../constants/data';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`md:w-80 transition-all duration-300 min-h-screen max-w-80 overflow-hidden bg-gray-100 ${
        isSidebarOpen ? 'w-80 absolute inset-0 z-20' : 'w-0'
      }`}
    >
      <ul className='text-black h-full pt-12'>
        {navLinks.map(({ id, url, text, icon }) => (
          <li key={id} className='group'>
            <NavLink
              to={url}
              className={({ isActive }) =>
                `transition-all duration-300 group-hover:ml-2 group-hover:bg-primary/75 group-hover:text-white text-gray-700 flex items-center gap-3 flex-1 px-4 py-3 ${
                  isActive ? 'text-primary' : null
                }`
              }
              onClick={closeSidebar}
            >
              <div className='flex flex-1 items-center gap-3'>
                {icon}
                {text}
              </div>
              <FaCaretRight />
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;

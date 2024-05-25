import { NavLink } from 'react-router-dom';
import { FaHouse, FaHandHolding, FaSortUp } from 'react-icons/fa6';
import { FaRegUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className='w-[300px] min-h-screen max-w-80 bg-gray-100'>
      <ul className='text-black h-full pt-12'>
        {/*  */}
        <li className=''>
          <NavLink
            to='/'
            className={({ isActive }) =>
              `transition-all duration-300 text-gray-700 hover:bg-secondary hover:text-gray-900 flex items-center gap-3 flex-1 px-4 py-3 ${
                isActive ? 'bg-secondary' : null
              }`
            }
          >
            <div className='flex flex-1 items-center gap-3'>
              <FaHouse className='' />
              Home
            </div>
            <FaSortUp className='rotate-90 ' />
          </NavLink>
        </li>

        {/*  */}
        <li>
          <NavLink
            to='/roles'
            className={({ isActive }) =>
              `transition-all duration-300 text-gray-700 hover:bg-secondary hover:text-gray-900 flex items-center gap-3 flex-1 px-4 py-3 ${
                isActive ? 'bg-secondary' : null
              }`
            }
          >
            <div className='flex flex-1 items-center gap-3'>
              <FaHandHolding className='' />
              Roles
            </div>
            <FaSortUp className='rotate-90 ' />
          </NavLink>
        </li>

        {/*  */}
        <li>
          <NavLink
            to='/users'
            className={({ isActive }) =>
              `transition-all duration-300 text-gray-700 hover:bg-secondary hover:text-gray-900 flex items-center gap-3 flex-1 px-4 py-3 ${
                isActive ? 'bg-secondary' : null
              }`
            }
          >
            <div className='flex flex-1 items-center gap-3'>
              <FaRegUserCircle className='' />
              Users
            </div>
            <FaSortUp className='rotate-90 ' />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;

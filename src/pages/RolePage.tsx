import { FaSearch, FaHandHoldingUsd } from 'react-icons/fa';
import RoleTable from '../components/RoleTable';
import { Link } from 'react-router-dom';

const RolePage = () => {
  return (
    <>
      <header className='flex-between gap-4'>
        <div className='flex-center gap-3'>
          <FaHandHoldingUsd className=' hidden md:block text-2xl' />
          <h2 className='font-bold sm:text-base md:text-lg'>Roles</h2>
        </div>
        <div className='flex-1 flex-between'>
          <div className='border border-gray-300 flex-center gap-2 px-2 rounded-md flex-1 max-w-md text-sm'>
            <FaSearch />
            <input type='text' className='flex-1 py-2 outline-none border-0' />
          </div>
          <Link
            to='add-role'
            className='bg-primary hover:bg-primary/85 transition-all duration-300 flex-center px-3 py-2 text-xs md:text-sm text-white rounded-md'
          >
            Add New
          </Link>
        </div>
      </header>

      <article className='py-4'>
        <RoleTable />
      </article>
    </>
  );
};
export default RolePage;

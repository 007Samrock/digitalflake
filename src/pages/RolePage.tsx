import { FaSearch } from 'react-icons/fa';
import RoleTable from '../components/RoleTable';
import { Link } from 'react-router-dom';

const RolePage = () => {
  return (
    <>
      <header className='flex-between px-8'>
        <div className='flex items-center flex-1 max-w-3xl gap-3'>
          {/* <FaHandHolding className='text-3xl' /> */}
          <h2 className='font-bold text-lg'>Roles</h2>
          <div className='border border-gray-300 flex-center gap-2 px-2 rounded-md w-full max-w-md text-sm'>
            <FaSearch />
            <input type='text' className='flex-1 py-2 outline-none border-0' />
          </div>
        </div>
        <Link
          to='add-role'
          className='bg-primary flex-center px-3 py-2 text-sm text-white rounded-md'
        >
          Add New
        </Link>
      </header>

      <article className='py-4'>
        <RoleTable />
      </article>
    </>
  );
};
export default RolePage;

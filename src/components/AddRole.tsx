import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import { useState } from 'react';

const AddRolePage = () => {
  const [addRole, setAddRole] = useState('');

  return (
    <section className='min-h-screen '>
      <header className='flex flex-col'>
        <nav className='flex items-center gap-3'>
          <Link to='../'>
            <FaArrowLeft />
          </Link>
          <h2 className='text-lg font-semibold'>Add Role</h2>
        </nav>
        <form className='mt-6 w-full flex flex-col gap-2'>
          {/* Email */}
          <div className='relative w-full max-w-72'>
            <label
              htmlFor='email'
              className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
            >
              Role name
            </label>
            <input
              id='email'
              type='email'
              className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              name='email'
              value={addRole}
              onChange={(e) => setAddRole(e.target.value)}
            />
          </div>
        </form>
      </header>

      <div className='mt-6 flex gap-3'>
        <button
          type='button'
          className='rounded-md border border-gray-500 text-gray-500 transition-all duration-300 hover:shadow-md px-4 py-1.5'
        >
          Cancel
        </button>
        <button
          type='button'
          className='rounded-md border border-transparent text-white bg-primary transition-all duration-300 hover:shadow-md px-4 py-1.5'
        >
          Save
        </button>
      </div>
    </section>
  );
};
export default AddRolePage;

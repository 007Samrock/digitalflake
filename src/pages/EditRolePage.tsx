import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const EditRolePage = () => {
  return (
    <section className='min-h-screen '>
      <header className='flex flex-col'>
        <nav className='flex items-center gap-3'>
          <Link to='../'>
            <FaArrowLeft />
          </Link>
          <h2 className='text-lg font-semibold'>Edit Role</h2>
        </nav>
        <form className='mt-6 w-full flex gap-8'>
          {/* Role Name */}
          {/* Email */}
          <div className='relative w-full max-w-72'>
            <label
              htmlFor='text'
              className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
            >
              Role name
            </label>
            <input
              id='email'
              type='email'
              className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              name='email'
              placeholder='Active'
              // value={addRole}
              // onChange={(e) => setAddRole(e.target.value)}
            />
          </div>

          {/* Status */}
          <div className='relative w-full max-w-72'>
            <label
              htmlFor='status'
              className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
            >
              Status
            </label>
            <input
              id='status'
              type='email'
              className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              name='email'
              placeholder='Active'
              // value={addRole}
              // onChange={(e) => setAddRole(e.target.value)}
            />
            {/* <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option>choose one</option>
              <option value='active'>Active</option>
              <option value='realme'>Realme</option>
            </select> */}
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
export default EditRolePage;

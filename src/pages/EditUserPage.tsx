import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';

const EditUserPage = () => {
  return (
    <section className='min-h-screen '>
      <header className='flex flex-col'>
        <nav className='flex items-center gap-3'>
          <Link to='../'>
            <FaArrowLeft />
          </Link>
          <h2 className='text-lg font-semibold'>Edit User</h2>
        </nav>
        <form className='mt-6 w-full flex flex-col gap-2'>
          <div className='flex gap-4'>
            {/* Name */}
            <div className='relative w-full max-w-80 flex-1'>
              <label
                htmlFor='name'
                className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
              >
                Name
              </label>
              <input
                id='name'
                type='text'
                name='name'
                className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              />
            </div>

            {/* Mobile */}
            <div className='relative w-full max-w-80 flex-1'>
              <label
                htmlFor='mobile'
                className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
              >
                Mobile
              </label>
              <input
                id='mobile'
                type='text'
                name='mobile'
                className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              />
            </div>

            {/* Email */}
            <div className='relative w-full max-w-80 flex-1'>
              <label
                htmlFor='email'
                className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-800'
              >
                Email
              </label>
              <input
                id='email'
                type='text'
                name='email'
                className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
              />
            </div>
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
export default EditUserPage;

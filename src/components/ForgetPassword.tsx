import { Link } from 'react-router-dom';

const ForgetPassword = () => {
  return (
    <section className='min-h-screen flex-center bg-gray-100'>
      <div className='bg-white p-4 text-center'>
        <h2 className='text-primary text-lg font-medium mb-2'>
          Did you forget password?
        </h2>
        <p className='text-gray-500 text-xs'>
          Enter your email address and we’ll send you a link to restore password
        </p>

        <form className='mt-6'>
          <div className='flex flex-col justify-start items-start'>
            <label
              htmlFor='email'
              className='text-gray-400 flex-1 w-full text-left text-sm mb-1.5'
            >
              Email address
            </label>
            <input
              type='text'
              id='email'
              name='email'
              className='border border-gray-200 w-full rounded-md outline-none py-2'
            />
          </div>
          <button type='button' className='btn mt-8 mb-1'>
            Request reset link
          </button>
          <Link
            to='/login'
            className='text-gray-400 text-xs border-b border-gray-200'
          >
            Back to log in
          </Link>
        </form>
      </div>
    </section>
  );
};
export default ForgetPassword;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ForgetPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('All fields are required');
      return;
    }

    toast.success('Password rest link sent to your email');
    return setTimeout(() => {
      navigate('/login');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email */}
      <div className='flex flex-col'>
        <label
          htmlFor='email'
          className='text-gray-400 w-full text-left text-xs capitalize sm:text-sm mb-1.5'
        >
          Email address
        </label>
        <input
          type='email'
          id='email'
          name='email'
          className='border border-gray-200 text-sm rounded-md p-2 w-full outline-gray-300'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Button */}
      <button type='submit' className='btn w-full mt-8 mb-3 text-sm py-4'>
        Request reset link
      </button>

      {/* Link */}
      <Link
        to='/login'
        className='text-gray-400 text-xs border-b border-gray-300'
      >
        Back to log in
      </Link>
    </form>
  );
};
export default ForgetPasswordForm;

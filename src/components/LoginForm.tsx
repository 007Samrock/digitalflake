import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formValues.email || !formValues.password) {
      toast.error('All fields are required');
      return;
    }

    console.log(formValues);
    return navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full flex flex-col gap-6'>
        {/* Email */}
        <div className='relative w-full'>
          <label
            htmlFor='email'
            className='absolute -top-3 z-10 left-2 px-0.5 bg-white text-xs sm:text-sm text-gray-400'
          >
            Email-id *
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className='border border-gray-200 text-xs sm:text-sm rounded-md relative px-2 py-2 sm:py-3 w-full outline-gray-300'
            value={formValues.email}
            onChange={handleFormValues}
          />
        </div>

        {/* Password */}
        <div className='w-full'>
          <div className='border border-gray-200 text-xs sm:text-sm rounded-md m-2 w-full flex items-center px-2 relative'>
            <label
              htmlFor='password'
              className='absolute -top-3 z-10 left-2 px-0.5 bg-white text-xs sm:text-sm text-gray-400'
            >
              Password *
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className='flex-1 py-2 sm:py-3 outline-none'
              value={formValues.password}
              onChange={handleFormValues}
            />

            {/* Button */}
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeLowVision /> : <FaEye />}
            </button>
          </div>

          {/* Forget Password */}
          <p className='text-primary text-xs text-right self-end w-full capitalize'>
            <Link to='/forget-password' className=''>
              forget password
            </Link>
          </p>
        </div>

        <button type='submit' className='btn mt-12'>
          Log In
        </button>
      </div>
    </form>
  );
};
export default LoginForm;

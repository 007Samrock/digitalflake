import { FaEye, FaEyeLowVision } from 'react-icons/fa6';
import loginBg from '../assets/login-bg.svg';
import logo from '../assets/dark-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleFormValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section
      className='flex-center min-h-screen bg-contain bg-center bg-no-repeat'
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url(${loginBg})`,
      }}
    >
      <article className='p-12 bg-white w-[90vw] max-w-md mx-auto flex flex-col justify-center'>
        <img src={logo} alt='digital-flake logo' className='w-36 mx-auto' />
        <p className='text-gray-500 text-center'>
          Welcome to Digitalflake admin
        </p>

        <form className='mt-8' onSubmit={handleSubmit}>
          <div className='w-full flex flex-col gap-2'>
            {/* Email */}
            <div className='relative w-full'>
              <label
                htmlFor='email'
                className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-400'
              >
                Email-id
              </label>
              <input
                id='email'
                type='email'
                className='border border-gray-400 text-sm rounded-md relative m-2 p-2 w-full'
                name='email'
                value={formValues.email}
                onChange={handleFormValues}
              />
            </div>

            {/* Password */}
            <div className='relative w-full'>
              <label
                htmlFor='password'
                className='absolute -top-0.5 z-10 left-2 bg-white px-2 text-sm text-gray-400'
              >
                Password
              </label>
              <div className='border border-gray-200 text-sm rounded-md relative m-2 w-full flex items-center px-2'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  className='flex-1 py-2 outline-none'
                  name='password'
                  value={formValues.password}
                  onChange={handleFormValues}
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeLowVision /> : <FaEye />}
                </button>
              </div>
              <p className='text-primary text-xs text-right self-end w-full capitalize'>
                <Link to='/forget-password' className=''>
                  forget password
                </Link>
              </p>
            </div>

            <button type='button' className='btn mt-12'>
              Log In
            </button>
          </div>
        </form>
      </article>
    </section>
  );
};
export default LoginPage;

/* Rectangle 20 */

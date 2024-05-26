import loginBg from '../assets/login-bg.svg';
import logo from '../assets/dark-logo.png';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <section
      className='flex-center min-h-screen bg-contain bg-center bg-no-repeat'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)) , url(${loginBg})`,
      }}
    >
      <article className='p-3 md:p-6 bg-white w-[90vw] max-w-md mx-auto flex flex-col justify-center'>
        {/* Header */}
        <header className='mb-12'>
          <img src={logo} alt='digital-flake logo' className='w-36 mx-auto' />
          <p className='text-gray-500 text-sm md:text-base text-center'>
            Welcome to Digital Flake admin
          </p>
        </header>

        {/* Login Form */}
        <LoginForm />
      </article>
    </section>
  );
};
export default LoginPage;

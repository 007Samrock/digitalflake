import ForgetPasswordForm from '../components/ForgetPasswordForm';

const ForgetPassword = () => {
  return (
    <section className='min-h-screen flex-center bg-gray-100'>
      <article className='w-[90vw] max-w-xl bg-white px-8 py-4 text-center'>
        {/* Header */}
        <header className='mb-6'>
          <h2 className='text-primary text-md sm:text-lg font-medium mb-1'>
            Did you forget password?
          </h2>
          <p className='text-gray-500 text-xs sm:text-sm'>
            Enter your email address and we’ll send you a link to restore
            password
          </p>
        </header>

        {/* Form */}
        <ForgetPasswordForm />
      </article>
    </section>
  );
};
export default ForgetPassword;

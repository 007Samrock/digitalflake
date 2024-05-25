import logo from '../assets/dark-logo.png';

const HomePage = () => {
  return (
    <section className='min-h-screen flex-center'>
      <div>
        <img src={logo} alt='digital-flake logo' />
        <h1>Welcome to Digitalflake admin</h1>
      </div>
    </section>
  );
};
export default HomePage;

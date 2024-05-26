import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import EditRoleForm from './EditRoleForm';

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
      </header>
      <EditRoleForm />
    </section>
  );
};
export default EditRolePage;

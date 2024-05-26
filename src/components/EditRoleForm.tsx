import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';

const EditRoleForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    role: '',
    status: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { role, status } = formValues;

    if (!role || !status) {
      toast.error('All fields are required');
      return;
    }

    console.log(formValues);
    return navigate('../');
  };

  return (
    <form className='mt-6 w-full flex flex-col gap-8' onSubmit={handleSubmit}>
      <article className='flex gap-4 w-full'>
        {/* Role Name */}
        <div className='relative w-full max-w-sm'>
          <label
            htmlFor='role'
            className='absolute -top-3 z-10 left-2 px-0.5 bg-white text-xs sm:text-sm text-gray-400'
          >
            Role name
          </label>
          <input
            id='role'
            type='text'
            className='border border-gray-200 text-xs sm:text-sm rounded-md relative px-2 py-2 sm:py-3 w-full outline-gray-300'
            name='role'
            value={formValues.role}
            onChange={handleChange}
          />
        </div>

        {/* Status */}
        <div className='relative w-full max-w-sm'>
          <label
            htmlFor='status'
            className='absolute -top-3 z-10 left-2 px-0.5 bg-white text-xs sm:text-sm text-gray-400'
          >
            Status
          </label>
          <select
            id='status'
            className='border border-gray-300 text-sm rounded-lg block w-full p-2.5 outline-none'
            name='status'
            onChange={handleChange}
          >
            <option value='active' selected>
              Active
            </option>
            <option value='realme'>Realme</option>
          </select>
        </div>
      </article>

      <div className='flex gap-3'>
        <Link
          to='../'
          className='hover:border-primary hover:text-primary rounded-lg px-4 py-2 border border-gray-500 text-gray-900 bg-white transition-all duration-300'
        >
          Cancel
        </Link>
        <button
          type='submit'
          // className='rounded-md border border-transparent text-white bg-primary transition-all duration-300 hover:shadow-md px-4 py-1.5'
          className='hover:bg-primary/85 rounded-lg bg-primary px-4 py-2 border border-gray-300 text-white transition-all duration-300'
        >
          Save
        </button>
      </div>
    </form>
  );
};
export default EditRoleForm;

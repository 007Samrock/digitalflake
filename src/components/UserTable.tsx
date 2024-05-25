import { Link } from 'react-router-dom';
import { userData, userDataHeader } from '../constants/data';
import { FaRegTrashCan, FaRegPenToSquare } from 'react-icons/fa6';

const UserTable = () => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 '>
        <thead className='text-xs text-gray-700 uppercase bg-secondary'>
          <tr>
            {userDataHeader.map((role, index) => (
              <th key={index} scope='col' className='px-6 py-3'>
                {role}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {userData.map(({ id, name, mobile, email, role, status }) => (
            <tr key={id} className='bg-gray-200'>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {id}
              </td>
              <td className='px-6 py-4'>{name}</td>
              <td className='px-6 py-4'>{mobile}</td>
              <td className='px-6 py-4'>{email}</td>
              <td className='px-6 py-4'>{role}</td>
              <td className='px-6 py-4'>{status}</td>
              <td className='px-6 py-4 flex items-center gap-2'>
                <Link to='edit-user'>
                  <FaRegPenToSquare />
                </Link>
                <button type='button'>
                  <FaRegTrashCan />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;

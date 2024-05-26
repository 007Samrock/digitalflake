import { FaRegTrashCan, FaRegPenToSquare } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { roleDataHeader } from '../constants/data';
import { useRoleContext } from '../context/role_context';
import DeleteRoleModal from './DeleteRoleModal';
import { useState } from 'react';

const RoleTable = () => {
  const {
    isRoleModalOpen,
    openRoleModal,
    closeRoleModal,
    loadRoleData,
    deleteRole,
    roleData,
    editRole,
  } = useRoleContext();
  const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);

  const confirmDelete = () => {
    if (selectedRoleId !== null) {
      deleteRole(selectedRoleId);
      closeRoleModal();
      setSelectedRoleId(null);
    }
  };

  const handleDeleteRole = (id: number) => {
    setSelectedRoleId(id);
    openRoleModal();
  };

  return (
    <>
      <div>
        {isRoleModalOpen && <DeleteRoleModal onConfirm={confirmDelete} />}

        {roleData.length === 0 ? (
          <div className='flex-center mt-8'>
            <button type='button' className='btn px-4' onClick={loadRoleData}>
              Refresh
            </button>
          </div>
        ) : (
          <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left table-auto border-separate border-spacing-y-3 bg-white'>
              {/* Table Head */}
              <thead className='text-xs text-gray-900 capitalize bg-secondary'>
                <tr>
                  {roleDataHeader.map((role, index) => (
                    <th key={index} scope='col' className='px-6 py-3'>
                      {role}
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {roleData.map(({ id, role, status }) => (
                  <tr key={id} className='bg-gray-100 capitalize'>
                    <td className='px-6 py-3 font-medium text-gray-900 whitespace-nowrap'>
                      {id}
                    </td>
                    <td className='px-6 py-3'>{role}</td>
                    <td
                      className={`px-6 py-3 ${
                        status === 'active' ? 'text-red-500' : 'text-green-500'
                      }`}
                    >
                      {status}
                    </td>
                    <td className='px-6 py-3 flex items-center gap-2 text-gray-500'>
                      <Link to='edit-role'>
                        <FaRegPenToSquare />
                      </Link>
                      {/* <button
                        type='button'
                        onClick={() => editRole()}
                      >
                        <FaRegPenToSquare />
                      </button> */}
                      <button
                        type='button'
                        onClick={() => handleDeleteRole(id)}
                      >
                        <FaRegTrashCan />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};
export default RoleTable;

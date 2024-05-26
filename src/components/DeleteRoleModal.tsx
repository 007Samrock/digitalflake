import { FaTriangleExclamation } from 'react-icons/fa6';
import { useGlobalContext } from '../context/global_context';

const DeleteRoleModal: React.FC<{ onConfirm: () => void }> = ({
  onConfirm,
}) => {
  const { closeRoleModal } = useGlobalContext();
  return (
    <div className='bg-black/75 flex-center fixed inset-0 z-50 transition-all duration-300'>
      <article className='bg-red-white w-[90vw] max-w-xl py-8 bg-white'>
        {/* Header */}
        <header className='flex-center flex-col gap-2 bg-white'>
          <div className='flex gap-2 items-center justify-center'>
            <FaTriangleExclamation className='text-xl text-red-700' />
            <h2 className='font-semibold text-2xl'>Delete</h2>
          </div>
          <p className='text-gray-500 text-sm'>
            Are you sure you want to delete?
          </p>
        </header>

        {/* Footer */}
        <footer className='mt-6 flex-center gap-4 text-gray-400'>
          <button
            type='button'
            className='hover:border-primary hover:text-primary rounded-lg px-4 py-2 border border-gray-500 text-gray-900 bg-white transition-all duration-300'
            onClick={closeRoleModal}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            type='button'
            className='hover:bg-primary/85 rounded-lg bg-primary px-4 py-2 border border-gray-300 text-white transition-all duration-300'
          >
            Delete
          </button>
        </footer>
      </article>
    </div>
  );
};
export default DeleteRoleModal;

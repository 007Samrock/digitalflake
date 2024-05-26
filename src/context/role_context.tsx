import { createContext, useContext, useReducer } from 'react';
import reducer from '../reducers/role_reducers';
import { RoleState, RoleContextType } from '../types/role_types';
import { roleData } from '../constants/data';
import {
  LOAD_ROLE_DATA,
  ROLE_MODAL_OPEN,
  ROLE_MODAL_CLOSE,
  ADD_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
} from '../actions';

const initialState: RoleState = {
  roleData: roleData,
  isRoleModalOpen: false,
  isRoleAdding: false,
  isRoleEditing: false,
  isRoleDeleting: false,
};

const RoleContext = createContext<RoleContextType | undefined>(undefined);

export const RoleProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const loadRoleData = () => dispatch({ type: LOAD_ROLE_DATA });
  const openRoleModal = () => dispatch({ type: ROLE_MODAL_OPEN });
  const closeRoleModal = () => dispatch({ type: ROLE_MODAL_CLOSE });
  const addRole = (role: { id: number; role: string; status: string }) =>
    dispatch({ type: ADD_ROLE, payload: role });
  const editRole = (id: number, role: string, status: string) =>
    dispatch({ type: EDIT_ROLE, payload: { id, role, status } });
  const deleteRole = (id: number) =>
    dispatch({ type: DELETE_ROLE, payload: id });

  return (
    <RoleContext.Provider
      value={{
        ...state,
        openRoleModal,
        closeRoleModal,
        loadRoleData,
        addRole,
        editRole,
        deleteRole,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRoleContext = (): RoleContextType => {
  const context = useContext(RoleContext);
  if (context === undefined) {
    throw new Error('useRoleContext must be used within a RoleContextProvider');
  }
  return context;
};

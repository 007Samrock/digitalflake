import { createContext, useContext, useReducer } from 'react';
import reducer from './global_reducers';
import { GlobalState, GlobalContextType } from '../types';
import { roleData } from '../constants/data';
import {
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
  ROLE_MODAL_OPEN,
  ROLE_MODAL_CLOSE,
  LOAD_ROLE_DATA,
  ADD_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
} from './actions';

const initialState: GlobalState = {
  roleData: roleData,
  isSidebarOpen: false,
  isLogoutModalOpen: false,
  isRoleModalOpen: false,
  isRoleAdding: false,
  isRoleEditing: false,
  isRoleDeleting: false,
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => dispatch({ type: SIDEBAR_CLOSE });
  const toggleSidebar = () => dispatch({ type: SIDEBAR_TOGGLE });
  const openLogoutModal = () => dispatch({ type: LOGOUT_MODAL_OPEN });
  const closeLogoutModal = () => dispatch({ type: LOGOUT_MODAL_CLOSE });
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
    <GlobalContext.Provider
      value={{
        ...state,
        closeSidebar,
        toggleSidebar,
        openLogoutModal,
        closeLogoutModal,
        openRoleModal,
        closeRoleModal,
        loadRoleData,
        addRole,
        editRole,
        deleteRole,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(
      'useGlobalContext must be used within a GlobalContextProvider'
    );
  }
  return context;
};

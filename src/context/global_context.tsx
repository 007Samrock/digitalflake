import { createContext, useContext, useReducer } from 'react';
import reducer from './global_reducers';
import {
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
} from './actions';
import { GlobalState } from '../types';

const initialState: GlobalState = {
  isSidebarOpen: false,
  isLogoutModalOpen: false,
};

interface GlobalContextType extends GlobalState {
  closeSidebar: () => void;
  toggleSidebar: () => void;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const closeSidebar = () => dispatch({ type: SIDEBAR_CLOSE });
  const toggleSidebar = () => dispatch({ type: SIDEBAR_TOGGLE });
  const openLogoutModal = () => dispatch({ type: LOGOUT_MODAL_OPEN });
  const closeLogoutModal = () => dispatch({ type: LOGOUT_MODAL_CLOSE });

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        closeSidebar,
        toggleSidebar,
        openLogoutModal,
        closeLogoutModal,
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

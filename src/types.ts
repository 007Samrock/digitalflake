import {
  LOAD_ROLE_DATA,
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
  ROLE_MODAL_OPEN,
  ROLE_MODAL_CLOSE,
  ADD_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
} from './context/actions';

// Global state interface
export interface GlobalState {
  roleData: {
    id: number;
    role: string;
    status: string;
  }[];
  isSidebarOpen: boolean;
  isLogoutModalOpen: boolean;
  isRoleModalOpen: boolean;
  isRoleAdding: boolean;
  isRoleEditing: boolean;
  isRoleDeleting: boolean;
}

// Unified action type
export type Action =
  | { type: typeof SIDEBAR_CLOSE }
  | { type: typeof SIDEBAR_TOGGLE }
  | { type: typeof LOGOUT_MODAL_OPEN }
  | { type: typeof LOGOUT_MODAL_CLOSE }
  | { type: typeof ROLE_MODAL_OPEN }
  | { type: typeof ROLE_MODAL_CLOSE }
  | { type: typeof LOAD_ROLE_DATA }
  | {
      type: typeof ADD_ROLE;
      payload: {
        id: number;
        role: string;
        status: string;
      };
    }
  | {
      type: typeof EDIT_ROLE;
      payload: {
        id: number;
        role: string;
        status: string;
      };
    }
  | { type: typeof DELETE_ROLE; payload: number };

// Global context interface with methods
export interface GlobalContextType extends GlobalState {
  closeSidebar: () => void;
  toggleSidebar: () => void;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
  openRoleModal: () => void;
  closeRoleModal: () => void;
  loadRoleData: () => void;
  addRole: (role: { id: number; role: string; status: string }) => void;
  editRole: (id: number, role: string, status: string) => void;
  deleteRole: (id: number) => void;
}

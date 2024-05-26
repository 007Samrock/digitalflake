import {
  LOAD_ROLE_DATA,
  ROLE_MODAL_OPEN,
  ROLE_MODAL_CLOSE,
  ADD_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
} from '../actions';

// Role state interface
export interface RoleState {
  roleData: {
    id: number;
    role: string;
    status: string;
  }[];
  isRoleModalOpen: boolean;
  isRoleAdding: boolean;
  isRoleEditing: boolean;
  isRoleDeleting: boolean;
}

// Unified action type
export type RoleAction =
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

// Role context interface with methods
export interface RoleContextType extends RoleState {
  openRoleModal: () => void;
  closeRoleModal: () => void;
  loadRoleData: () => void;
  addRole: (role: { id: number; role: string; status: string }) => void;
  editRole: (id: number, role: string, status: string) => void;
  deleteRole: (id: number) => void;
}

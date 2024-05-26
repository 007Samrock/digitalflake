import { roleData } from '../constants/data';
import { GlobalState, Action } from '../types';
import {
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
  LOAD_ROLE_DATA,
  ROLE_MODAL_OPEN,
  ROLE_MODAL_CLOSE,
  ADD_ROLE,
  EDIT_ROLE,
  DELETE_ROLE,
} from './actions';

const global_reducer = (state: GlobalState, action: Action): GlobalState => {
  if (action.type === SIDEBAR_CLOSE) {
    return { ...state, isSidebarOpen: false };
  }

  if (action.type === SIDEBAR_TOGGLE) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  if (action.type === LOGOUT_MODAL_OPEN) {
    return { ...state, isLogoutModalOpen: true };
  }

  if (action.type === LOGOUT_MODAL_CLOSE) {
    return { ...state, isLogoutModalOpen: false };
  }

  if (action.type === LOAD_ROLE_DATA) {
    return {
      ...state,
      roleData: roleData,
    };
  }

  if (action.type === ROLE_MODAL_OPEN) {
    return { ...state, isRoleModalOpen: true };
  }

  if (action.type === ROLE_MODAL_CLOSE) {
    return { ...state, isRoleModalOpen: false };
  }

  if (action.type === ADD_ROLE) {
    return {
      ...state,
      roleData: [...state.roleData, action.payload],
    };
  }

  if (action.type === EDIT_ROLE) {
    state.isRoleEditing = true;
    const updatedRoleData = state.roleData.map((role) =>
      role.id === action.payload.id
        ? { ...role, role: action.payload.role, status: action.payload.status }
        : role
    );
    return {
      ...state,
      roleData: updatedRoleData,
      isRoleEditing: false,
    };
  }

  if (action.type === DELETE_ROLE) {
    return {
      ...state,
      isRoleModalOpen: false,
      roleData: state.roleData.filter((role) => role.id !== action.payload),
    };
  }

  throw new Error(`No Matching "${action}" - action type`);
};

export default global_reducer;

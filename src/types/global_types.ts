import {
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
} from '../actions';

// Global state interface
export interface GlobalState {
  isSidebarOpen: boolean;
  isLogoutModalOpen: boolean;
}

// Unified action type
export type GlobalAction =
  | { type: typeof SIDEBAR_CLOSE }
  | { type: typeof SIDEBAR_TOGGLE }
  | { type: typeof LOGOUT_MODAL_OPEN }
  | { type: typeof LOGOUT_MODAL_CLOSE };

// Global context interface with methods
export interface GlobalContextType extends GlobalState {
  closeSidebar: () => void;
  toggleSidebar: () => void;
  openLogoutModal: () => void;
  closeLogoutModal: () => void;
}

import {
  SIDEBAR_CLOSE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
  SIDEBAR_TOGGLE,
} from './context/actions';

export interface GlobalState {
  isSidebarOpen: boolean;
  isLogoutModalOpen: boolean;
}

export type Action =
  | CloseSidebarAction
  | ToggleSidebarAction
  | OpenLogoutModalAction
  | CloseLogoutModalAction;

interface CloseSidebarAction {
  type: typeof SIDEBAR_CLOSE;
}

interface ToggleSidebarAction {
  type: typeof SIDEBAR_TOGGLE;
}

interface OpenLogoutModalAction {
  type: typeof LOGOUT_MODAL_OPEN;
}

interface CloseLogoutModalAction {
  type: typeof LOGOUT_MODAL_CLOSE;
}

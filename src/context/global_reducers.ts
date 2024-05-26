import { GlobalState, Action } from '../types';
import {
  SIDEBAR_CLOSE,
  SIDEBAR_TOGGLE,
  LOGOUT_MODAL_OPEN,
  LOGOUT_MODAL_CLOSE,
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

  throw new Error(`No Matching "${action}" - action type`);
};

export default global_reducer;

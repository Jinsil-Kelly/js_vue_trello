import * as api from "@/api/api";

export default {
  SET_IS_ADD_BOARD(state, toggle) {
    state.isAddBoard = toggle;
  },
  SET_BOARDS(state, boards) {
    state.boards = boards;
  },
  LOGIN(state, token) {
    if (!token) return;
    state.token = token;
    localStorage.setItem("token", token);
    api.setAuthInHeader(token);
  },
  LOGOUT(state) {
    state.token = null;
    delete localStorage.token;
    api.setAuthInHeader(null);
  }
};

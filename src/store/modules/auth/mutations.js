import * as api from "@/api/api";

export default {
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

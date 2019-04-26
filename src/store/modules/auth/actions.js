import * as api from "@/api/api";

export default {
  LOGIN({ commit }, { email, password }) {
    return api.auth
      .login(email, password)
      .then(({ accessToken }) => commit("LOGIN", accessToken));
  }
};

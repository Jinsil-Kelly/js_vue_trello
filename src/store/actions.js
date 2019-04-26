import * as api from "@/api/api";

export default {
  ADD_BOARD(context, { title }) {
    console.log(context);
    return api.board.create(title);
  },
  FETCH_BOARDS({ commit }) {
    return api.board.fetch().then(data => {
      commit("SET_BOARDS", data.list);
    });
  },
  LOGIN({ commit }, { email, password }) {
    return api.auth
      .login(email, password)
      .then(({ accessToken }) => commit("LOGIN", accessToken));
  }
};

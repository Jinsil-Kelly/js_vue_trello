import * as api from "@/api/api";

export default {
  ADD_BOARD(context, { title }) {
    return api.board.create(title);
  },
  async FETCH_BOARDS({ commit }) {
    try {
      const data = await api.board.fetch();
      commit("SET_BOARDS", data.list);
    } catch (e) {
      throw Error("API Error occurred.");
    }
  },
  async FETCH_BOARD({ commit }, { id }) {
    try {
      const data = await api.board.fetch(id);
      commit("SET_BOARD", data.item);
    } catch (e) {
      throw Error("API Error occurred.");
    }
  }
};

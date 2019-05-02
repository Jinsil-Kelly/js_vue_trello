import * as api from "@/api/api";

export default {
  //id is bId
  ADD_CARD({ dispatch }, { id, title, listId, pos }) {
    return api.card
      .create(title, listId, pos)
      .then(() => dispatch("board/FETCH_BOARD", { id }, { root: true }));
  },

  //id is cId
  async FETCH_CARD({ commit }, { id }) {
    try {
      const { item } = await api.card.fetch(id);
      commit("SET_CARD", item);
    } catch (e) {
      throw Error("API Error occurred.");
    }
  },

  //id is cId
  UPDATE_CARD({ dispatch }, { id, title, description, pos, listId, bId }) {
    return api.card
      .update(id, { title, description, pos, listId })
      .then(() => dispatch("board/FETCH_BOARD", { id: bId }, { root: true }));
  }
};

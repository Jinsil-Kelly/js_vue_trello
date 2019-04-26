import * as api from "@/api/api";

export default {
  async LOGIN({ commit }, { email, password }) {
    try {
      const { accessToken } = await api.auth.login(email, password);
      commit("LOGIN", accessToken);
    } catch (e) {
      throw Error("API Error occurred.");
    }
  }
};

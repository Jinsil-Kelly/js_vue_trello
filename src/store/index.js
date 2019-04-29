import Vue from "vue";
import Vuex from "vuex";
import board from "@/store/modules/board";
import auth from "@/store/modules/auth";
import card from "@/store/modules/card";

Vue.use(Vuex);

const state = {
  loading: false
};
export const mutations = {
  START_LOADING: state => (state.loading = true),
  FINISH_LOADING: state => (state.loading = false)
};

export const getters = {
  loading: state => state.loading
};

export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    auth,
    board,
    card
  }
});

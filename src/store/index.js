import Vue from "vue";
import Vuex from "vuex";
import board from "@/store/modules/board";
import auth from "@/store/modules/auth";
import card from "@/store/modules/card";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    START_LOADING: state => (state.loading = true),
    FINISH_LOADING: state => (state.loading = false)
  },
  getters: {
    loading: state => state.loading
  },
  modules: {
    auth,
    board,
    card
  }
});

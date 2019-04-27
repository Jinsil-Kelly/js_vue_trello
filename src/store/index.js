import Vue from "vue";
import Vuex from "vuex";
import board from "@/store/modules/board";
import auth from "@/store/modules/auth";
import card from "@/store/modules/card";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    board,
    card
  }
});

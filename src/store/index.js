import Vue from "vue";
import Vuex from "vuex";
import board from "@/store/modules/board";
import auth from "@/store/modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    board
  }
});

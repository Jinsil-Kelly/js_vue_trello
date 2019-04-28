import axios from "axios";
import store from "@/store";

axios.interceptors.request.use(
  config => {
    store.commit("START_LOADING");
    return config;
  },
  error => {
    store.commit("FINISH_LOADING");
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    store.commit("FINISH_LOADING");
    return response;
  },
  error => {
    store.commit("FINISH_LOADING");
    return Promise.reject(error);
  }
);

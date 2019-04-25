import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import NotFound from "./views/NotFound.vue";
import Board from "./views/Board.vue";
import Card from "./views/Card.vue";

Vue.use(Router);

const requireAuth = (to, from, next) => {
  const isAuth = localStorage.getItem("token");
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
  isAuth ? next() : next(loginPath);
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: requireAuth
    },
    { path: "/login", component: Login },
    {
      path: "/b/:bId",
      component: Board,
      name: "board",
      beforeEnter: requireAuth,

      children: [{ path: "c/:cId", component: Card }]
    },

    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: NotFound
    }
  ]
});

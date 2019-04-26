import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import App from "@/App.vue";
import Router from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import NotFound from "@/views/NotFound.vue";
import Board from "@/views/Board.vue";
import Card from "@/views/Card.vue";
import store from "@/store";
const localVue = createLocalVue();
localVue.use(Router);

describe("App", () => {
  let isAuth;
  const requireAuth = (to, from, next) => {
    const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`;
    isAuth ? next() : next(loginPath);
  };
  const routes = [
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
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "*",
      component: NotFound
    }
  ];

  const router = new Router({ routes });

  const build = () => {
    const wrapper = mount(App, {
      localVue,
      router,
      store
    });
    return {
      wrapper
    };
  };

  it("renders the component", () => {
    // arrange
    const wrapper = shallowMount(App, {
      localVue,
      router,
      store
    });
    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    // arrange
    const wrapper = shallowMount(App, {
      localVue,
      router,
      store
    });
    // assert
    expect(wrapper.find(Navbar).exists()).toBe(true);
  });

  it("renders a child component via routing when a user is logged in and path is '/'", () => {
    isAuth = true;
    const { wrapper } = build();
    router.push("/");
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(Home).exists()).toBe(true);
    expect(wrapper.find(Board).exists()).toBe(false);
  });

  it("renders a child component via routing when a user is logged in and path is '/b/1", () => {
    isAuth = true;
    const { wrapper } = build();
    router.push("/b/1");
    expect(wrapper.find(Login).exists()).toBe(false);
    expect(wrapper.find(Home).exists()).toBe(false);
    expect(wrapper.find(Board).exists()).toBe(true);
  });

  it("renders a child component via routing when a user is not logged in", () => {
    isAuth = false;
    const { wrapper } = build();
    router.push("/");
    expect(wrapper.find(Login).exists()).toBe(true);
    expect(wrapper.find(Home).exists()).toBe(false);
    expect(wrapper.find(Board).exists()).toBe(false);
  });
});
import Board from "@/views/Board.vue";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import List from "@/components/List.vue";
import Vuex from "vuex";
import Router from "vue-router";
import store from "@/store";
import board from "./../fixtures/board";

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(Router);

describe("BoardComponent", () => {
  const router = new Router({
    routes: [{ path: "/b/2", component: Board }]
  });
  const build = () => {
    const options = { localVue, store, router };
    const wrapper = shallowMount(Board, options);
    const wrapperMounted = mount(Board, options);

    return {
      wrapper,
      wrapperMounted
    };
  };

  it("renders the component", () => {
    // arrange
    const { wrapperMounted } = build();

    // assert
    expect(wrapperMounted.find(List).exists()).toBe(false);

    expect(wrapperMounted.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    let getters = {
      board: () => {
        return board;
      }
    };

    let actions = {
      FETCH_BOARD: () => jest.fn()
    };
    const mockStore = new Vuex.Store({
      modules: {
        board: {
          namespaced: true,
          actions,
          getters
        }
      }
    });

    const fetchData = jest.fn();

    const wrapper = shallowMount(Board, {
      methods: { fetchData },
      store: mockStore,
      localVue,
      router
    });
    actions.FETCH_BOARD();
    console.log(getters.board());
    getters.board();
    expect(wrapper.html()).toMatchSnapshot();
    expect(wrapper.findAll(List).length).toEqual(3);

    expect(wrapper.find(List).exists()).toBe(true);
  });
});

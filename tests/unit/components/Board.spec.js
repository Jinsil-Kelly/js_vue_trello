import Board from "@/views/Board.vue";
import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import List from "@/components/List.vue";
import Vuex from "vuex";
import board from "../fixtures/board";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Board", () => {
  let wrapper, wrapperMounted;
  const getters = {
    board: jest.fn().mockReturnValue(board)
  };
  const actions = {
    FETCH_BOARD: jest.fn()
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
  const $route = {
    params: { bId: 2 }
  };
  const options = {
    store: mockStore,
    localVue,
    stubs: ["router-view"],
    mocks: {
      $route
    }
  };
  test("It should fetch items.", () => {
    wrapper = shallowMount(Board, options);

    expect(actions.FETCH_BOARD).toBeCalled();
    expect(actions.FETCH_BOARD.mock.calls[0][1]).toEqual({
      id: wrapper.vm.$route.params.bId
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    wrapperMounted = mount(Board, options);

    expect(wrapperMounted.find(".board").text()).toContain(board.title);
    expect(wrapperMounted.findAll(List).length).toEqual(3);
    expect(wrapperMounted.find(List).exists()).toBe(true);
    expect(wrapperMounted.html()).toMatchSnapshot();
  });
});

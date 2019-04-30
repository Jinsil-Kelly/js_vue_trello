import Board from "@/views/Board.vue";
import { shallowMount, createLocalVue, mount } from "@vue/test-utils";
import List from "@/components/List.vue";
import CardItem from "@/components/CardItem.vue";
import Vuex from "vuex";
import board from "../fixtures/board";
import listBoard from "../fixtures/listBoard";
import cardBoard from "../fixtures/cardBoard";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Board", () => {
  let wrapper;
  const actions = {
    FETCH_BOARD: jest.fn()
  };

  const $route = {
    params: { bId: 2 }
  };
  const getters = {
    board: jest.fn().mockReturnValue(board)
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
  const options = {
    localVue,
    stubs: ["router-view", "router-link"],
    mocks: {
      $route
    }
  };
  test("It should fetch items.", () => {
    wrapper = shallowMount(Board, { ...options, store: mockStore });
    expect(actions.FETCH_BOARD.mock.calls).toHaveLength(1);
    expect(actions.FETCH_BOARD.mock.calls[0][1]).toEqual({ id: 2 });
  });

  test("It doesn't render List Component when list data isn't", () => {
    wrapper = shallowMount(Board, { ...options, store: mockStore });

    expect(wrapper.find(".board").text()).toContain(board.title);
    expect(wrapper.findAll(List).length).toEqual(0);
    expect(wrapper.find(List).exists()).toBe(false);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("It renders List Component and doesn't render Card Component when list data is", () => {
    wrapper = shallowMount(Board, {
      ...options,
      store: new Vuex.Store({
        modules: {
          board: {
            namespaced: true,
            actions,
            getters: {
              board: jest.fn().mockReturnValue(listBoard)
            }
          }
        }
      })
    });

    expect(wrapper.findAll(List).length).toEqual(3);
    expect(wrapper.find(List).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });

  test("It renders List Component and Card Component when list data is", () => {
    wrapper = mount(Board, {
      ...options,
      store: new Vuex.Store({
        modules: {
          board: {
            namespaced: true,
            actions,
            getters: {
              board: jest.fn().mockReturnValue(cardBoard),
              boardId: jest.fn().mockReturnValue(cardBoard.id)
            }
          }
        }
      })
    });

    expect(wrapper.find(CardItem).exists()).toBe(true);
    expect(wrapper.html()).toMatchSnapshot();
  });
});

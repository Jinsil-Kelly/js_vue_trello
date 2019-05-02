import Card from "@/views/Card.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import {fetchedCard} from "../fixtures/card";
import cardBoard from "../fixtures/cardBoard";
const localVue = createLocalVue();
localVue.use(Vuex);
describe("Card", () => {
  let wrapper;
  const actions = {
    FETCH_CARD: jest.fn(),
    UPDATE_CARD: jest.fn()
  };

  const $route = {
    params: { bId: 2, cId: 1 }
  };
  const $router = {
    push: jest.fn()
  };
  const mockStore = new Vuex.Store({
    modules: {
      board: {
        namespaced: true,
        getters: {
          board: jest.fn().mockReturnValue(cardBoard)
        }
      },
      card: {
        namespaced: true,
        actions,
        getters: {
          card: jest.fn(() => fetchedCard.item)
        }
      }
    }
  });
  const options = {
    localVue,
    mocks: {
      $route,
      $router
    }
  };
  test("It should fetch items.", () => {
    wrapper = shallowMount(Card, { ...options, store: mockStore });
    expect(actions.FETCH_CARD.mock.calls).toHaveLength(1);
    expect(actions.FETCH_CARD.mock.calls[0][1]).toEqual({ id: 1 });
  });

  it("has the expected html structure", () => {
    wrapper = shallowMount(Card, { ...options, store: mockStore });
    expect(wrapper.html()).toMatchSnapshot();
  });

  // test("onCLose.", () => {
  //   wrapper = shallowMount(Card, { ...options, store: mockStore });
  //   let button = wrapper.find(".modal-close-btn");
  //   button.trigger("click");
  //   expect($router.push).toHaveBeenCalledWith("/b/2");
  // });
});

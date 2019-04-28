import Home from "@/views/Home.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import initialState from "@/store";
import Vuex from "vuex";
import boards from "../fixtures/boards";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HomeComponent", () => {
  let state;
  let getters = {
    boards: () => {
      return boards;
    },
    isAddBoard: () => false
  };

  let actions = {
    FETCH_BOARDS: () => jest.fn()
  };
  const build = () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store: new Vuex.Store({
        modules: {
          board: {
            namespaced: true,
            actions,
            getters,
            state
          }
        }
      })
    });
    return {
      wrapper
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  it("renders the component", () => {
    // arrange
    const { wrapper } = build();

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });
});

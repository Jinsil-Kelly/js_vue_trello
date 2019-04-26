import Home from "@/views/Home.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import initialState from "@/store";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("HomeComponent", () => {
  let state;

  const build = () => {
    const wrapper = shallowMount(Home, {
      localVue,
      store: new Vuex.Store({
        state
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

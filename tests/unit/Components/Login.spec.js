import Login from "@/views/Login.vue";
import { shallowMount, mount, createLocalVue } from "@vue/test-utils";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const routes = [
  {
    path: '/login?rPath="%2f"',
    component: Login
  }
];
const router = new VueRouter({
  routes
});
describe("LoginComponent", () => {
  const build = () => {
    const options = { localVue, router };
    const wrapper = shallowMount(Login, options);
    const wrapperMounted = mount(Login, options);

    return {
      wrapper,
      wrapperMounted,
      emailInput: () => wrapper.find("#email"),
      pwdInput: () => wrapper.find("#password"),
      emailInputMounted: () => wrapperMounted.find("#email"),
      pwdInputMounted: () => wrapperMounted.find("#password"),
      button: () => wrapperMounted.find("button")
    };
  };

  it("renders the component", () => {
    // arrange
    const { wrapper } = build();

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    // arrange
    const { wrapper, emailInput, pwdInput, button } = build();
    // assert
    expect(wrapper.findAll("input").length).toEqual(2);
    expect(emailInput().exists()).toBe(true);
    expect(pwdInput().exists()).toBe(true);
    expect(button().exists()).toBe(true);
  });

  it('calls "onSubmit" func when submitting form', () => {
    // arrange
    const { wrapper, button, emailInputMounted, pwdInputMounted } = build();
    const loginForm = wrapper.find("#loginForm");
    const email = "test@test.com";
    const pwd = "123123";
    const onSubmitMock = jest.fn();
    wrapper.setMethods({ onSubmit: onSubmitMock });

    emailInputMounted().element.value = email;
    pwdInputMounted().element.value = pwd;

    // act
    emailInputMounted().trigger("input");
    pwdInputMounted().trigger("input");

    button().trigger("click");
    button().trigger("submit");
    loginForm.trigger("submit.prevent");

    // assert
    expect(onSubmitMock).toBeCalled();
  });
});

//https://alexjover.com/blog/test-vue-js-slots-in-jest/

import { mount } from "@vue/test-utils";
import Modal from "@/components/Modal";
import EditCardHeader from "@/components/EditCardHeader.vue";
describe("Modal", () => {
  let cmp;
  beforeEach(() => {
    const messageWrapper = {
      render(h) {
        return h(EditCardHeader, { props: { title: "card1" } });
      }
    };

    cmp = mount(Modal, {
      mocks: {
        toggleTitle: true,
        onBlurTitle: jest.fn()
      },
      slots: {
        header: messageWrapper
      }
    });
  });

  it("EditCardHeader are inserted in a Modal component", () => {
    expect(cmp.find(EditCardHeader).isVueInstance()).toBe(true);
  });

  it("Header slot renders a default header text", () => {
    const header = cmp.find(".modal-header");
    expect(header.find("input").element.value).toBe("card1");
    expect(cmp.html()).toMatchSnapshot();
  });
});

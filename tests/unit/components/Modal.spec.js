//https://alexjover.com/blog/test-vue-js-slots-in-jest/

import { mount } from "@vue/test-utils";
import Modal from "@/components/Modal";
import CardBody from "@/components/card/CardBody.vue";
import CardHeader from "@/components/card/CardHeader.vue";
describe("Modal", () => {
  let cmp;
  beforeEach(() => {
    const cardHeaderWrapper = {
      render(h) {
        return h(CardHeader, { props: { title: "card1" } });
      }
    };

    const cardBodyWrapper = {
      render(h) {
        return h(CardBody, { props: { title: "card1" } });
      }
    };

    cmp = mount(Modal, {
      slots: {
        header: cardHeaderWrapper,
        body: cardBodyWrapper,
        footer: "<div/>"
      }
    });
  });

  test("EditCardHeader are inserted in a Modal component", () => {
    expect(cmp.find(CardHeader).isVueInstance()).toBe(true);
    expect(cmp.find(CardBody).isVueInstance()).toBe(true);
    expect(cmp.html()).toMatchSnapshot();
  });

  test("Header slot renders a default header text", () => {
    const header = cmp.find(".modal-header");
    expect(header.find("input").element.value).toBe("card1");
  });

  test("Body slot renders h3 and textarea text", () => {
    const body = cmp.find(".modal-body");
    expect(body.find("h3").text()).toBe("Description");
    expect(body.find("textarea").exists()).toBe(true);
  });

  test("Footer slot doesn't have any child El", () => {
    const footer = cmp.find(".modal-footer");
    expect(footer.html()).toEqual(
      '<div class="modal-footer"><div></div></div>'
    );
  });
});

import { fetchedCard } from "../../../fixtures/card";
import mutations from "@/store/modules/card/mutations.js";

describe("CARD mutations", () => {
  test("SET_CARD mutation sets the card to the store", () => {
    const state = {
      card: {}
    };
    const card = fetchedCard.item;
    mutations["SET_CARD"](state, card);

    expect(state).toEqual({
      card: fetchedCard.item
    });
  });
});

import getters from "@/store/modules/card/getters.js";
import { fetchedCard } from "../../../fixtures/card";

describe("Card Getters", () => {
  test("card getters returns the card", () => {
    const state = { card: fetchedCard.item };
    const actual = getters.card(state);

    expect(actual).toEqual(fetchedCard.item);
  });
});

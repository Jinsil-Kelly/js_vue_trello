jest.mock("@/api/api");
import flushPromises from "flush-promises";
import actions from "@/store/modules/card/actions.js";
import * as api from "@/api/api";
import { fetchedCard } from "../../../fixtures/card";
describe("CARD", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("fetches the card by card Id", async () => {
    // arrange
    const cardId = "2";
    // act
    await actions.FETCH_CARD({ commit }, { id: cardId });
    await flushPromises();
    // assert
    expect(api.card.fetch).toHaveBeenCalledWith(cardId);
    expect(commit).toHaveBeenCalledWith("SET_CARD", fetchedCard.item);
  });
});

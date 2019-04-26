import getters from "@/store/modules/board/getters.js";
import boards from "../../../fixtures/boards";
const state = { boards: boards, isAddBoard: false };
describe("boards", () => {
  it("returns the list of board", () => {
    const actual = getters.boards(state);
    expect(actual).toEqual(boards);
  });
});
describe("isAddBoard", () => {
  it("returns boolean value", () => {
    const actual = getters.isAddBoard(state);

    expect(actual).toEqual(false);
  });
});

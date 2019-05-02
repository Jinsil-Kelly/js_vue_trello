import getters from "@/store/modules/board/getters.js";
import boards from "../../../fixtures/boards";
import board from "../../../fixtures/board";

const state = { boards: boards, isAddBoard: false, board: board };
describe("Board Getters", () => {
  test("boards getter returns the list of board", () => {
    const actual = getters.boards(state);
    expect(actual).toEqual(boards);
  });

  test("board getter returns the  board", () => {
    const actual = getters.board(state);
    expect(actual).toEqual(board);
  });

  test("boardId getter returns the id of board", () => {
    const actual = getters.boardId(state);
    expect(actual).toEqual(2);
  });

  test("isAddBoard returns boolean value", () => {
    const actual = getters.isAddBoard(state);
    expect(actual).toEqual(false);
  });
});

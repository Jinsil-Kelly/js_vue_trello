import boards from "../../../fixtures/boards";
import mutations from "@/store/modules/board/mutations.js";
import board from "../../../fixtures/board";

describe("SET_IS_ADD_BOARD", () => {
  it("opens the modal to create a board", () => {
    const expectedTogle = true;
    const state = {
      isAddBoard: false
    };

    mutations["SET_IS_ADD_BOARD"](state, expectedTogle);

    expect(state).toEqual({
      isAddBoard: expectedTogle
    });
  });
  it("closes the modal to create a board", () => {
    const expectedTogle = false;
    const state = {
      isAddBoard: true
    };
    mutations["SET_IS_ADD_BOARD"](state, expectedTogle);

    expect(state).toEqual({
      isAddBoard: expectedTogle
    });
  });
});

describe("SET_BOARDS", () => {
  it("adds the list of board to the state", () => {
    const expectedBoards = boards;
    const state = {
      boards: []
    };

    mutations["SET_BOARDS"](state, expectedBoards);

    expect(state).toEqual({
      boards: expectedBoards
    });
  });
});

describe("SET_BOARD", () => {
  it("adds the a board to the state", () => {
    const expectedBoard = board;
    const state = {
      board: {}
    };

    mutations["SET_BOARD"](state, expectedBoard);

    expect(state).toEqual({
      board: expectedBoard
    });
  });
});

jest.mock("@/api/api");
import flushPromises from "flush-promises";
import actions from "@/store/modules/board/actions.js";
import * as api from "@/api/api";
import boardFixture from "../../../fixtures/board";
import boardsFixture from "../../../fixtures/boards";

describe("Boards Action", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("adds board", async () => {
    // arrange
    const testTitle = "testTitle";

    // act
    await actions.ADD_BOARD({ commit }, { title: testTitle });
    await flushPromises();

    // assert
    expect(api.board.create).toHaveBeenCalledWith(testTitle);
  });

  it("fetches boards", async () => {
    // act
    await actions.FETCH_BOARDS({ commit });
    await flushPromises();

    // assert
    expect(api.board.fetch).toHaveBeenCalled();
    expect(commit).toHaveBeenCalledWith("SET_BOARDS", boardsFixture.list);
  });

  it("fetches a board", async () => {
    // arrange
    const testId = "123123";
    // act
    await actions.FETCH_BOARD({ commit }, { id: testId });
    await flushPromises();

    // assert
    expect(api.board.fetch).toHaveBeenCalledWith(testId);
    expect(commit).toHaveBeenCalledWith("SET_BOARD", boardFixture.item);
  });
});

import { mutations } from "@/store";

describe("LOADING mutations", () => {
  const mockState = {
    loading: false
  };
  test("START_LOADING", () => {
    mutations["START_LOADING"](mockState);
    expect(mockState).toEqual({
      loading: true
    });
  });

  test("FINISH_LOADING", () => {
    mutations["FINISH_LOADING"](mockState);
    expect(mockState).toEqual({
      loading: false
    });
  });
});

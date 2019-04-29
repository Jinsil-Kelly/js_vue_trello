import user from "../../../fixtures/user";
import mutations from "@/store/modules/auth/mutations.js";

describe("LOGIN", () => {
  it("adds the token for the user to the state", () => {
    const { accessToken } = user;
    const state = {
      token: null
    };

    if (!accessToken) return;

    mutations["LOGIN"](state, accessToken);

    expect(state).toEqual({
      token: accessToken
    });
  });

  it("still has initial state when token does not exist", () => {
    const initialState = {
      token: null
    };
    mutations["LOGIN"](initialState);

    expect(initialState).toEqual({
      token: null
    });
  });
});
describe("LOGOUT", () => {
  it("removes the token fo the user to the state", () => {
    const state = {
      token: "test_string_token"
    };

    mutations["LOGOUT"](state);

    expect(state).toEqual({
      token: null
    });
  });
});

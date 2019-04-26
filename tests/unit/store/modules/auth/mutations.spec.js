import user from "../../../fixtures/user";
import mutations from "@/store/modules/auth/mutations.js";

describe("LOGIN", () => {
  it("adds the token fo the user to the state", () => {
    const { accessToken } = user;
    const state = {
      token: null
    };

    mutations["LOGIN"](state, accessToken);

    expect(state).toEqual({
      token: accessToken
    });
  });
});

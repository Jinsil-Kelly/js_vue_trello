import getters from "@/store/modules/auth/getters.js";

describe("isAuth", () => {
  it("returns true if token is", () => {
    const state = { token: "welcometovueworldIamhungryandsleepy" };
    const actual = getters.isAuth(state);

    expect(actual).toEqual(true);
  });

  it("returns false if token isn't", () => {
    const state = { token: null };
    const actual = getters.isAuth(state);

    expect(actual).toEqual(false);
  });
});

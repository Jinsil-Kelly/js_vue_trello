jest.mock("@/api/api");
import flushPromises from "flush-promises";
import actions from "@/store/modules/auth/actions.js";
// import {auth} from "@/api/api";
import * as api from "@/api/api";
import userFixture from "../../../fixtures/user";
const { accessToken } = userFixture;
describe("LOGIN", () => {
  let commit;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("searches for user", async () => {
    // arrange
    const email = "test@test.com";
    const password = "123123";
    // act
    await actions.LOGIN({ commit }, { email: email, password: password });
    await flushPromises();

    // assert
    expect(api.auth.login).toHaveBeenCalledWith(email, password);
    expect(commit).toHaveBeenCalledWith("LOGIN", accessToken);
  });

  // it("catches an error", async () => {
  //    const mockError = true
  //
  //     await expect(actions.LOGIN({ commit: jest.fn() }, {}))
  //         .rejects.toThrow("API Error occurred.")
  // })
});

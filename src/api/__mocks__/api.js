/* eslint-disable */
//https://jestjs.io/docs/en/mock-functions
import userFixture from "../../../tests/unit/fixtures/user";
const { accessToken } = userFixture;

export const auth = {
  login: jest.fn().mockResolvedValue({ accessToken })
};

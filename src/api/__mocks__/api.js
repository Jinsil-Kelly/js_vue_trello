/* eslint-disable */
//https://jestjs.io/docs/en/mock-functions
import userFixture from "../../../tests/unit/fixtures/user";
import boardsFixture from "../../../tests/unit/fixtures/boards";
import boardFixture from "../../../tests/unit/fixtures/board";
import {fetchedCard} from "../../../tests/unit/fixtures/card";

const { accessToken } = userFixture;

export const auth = {
  login: jest.fn().mockResolvedValue({ accessToken })
};

export const board = {
  create: jest.fn(),
  fetch: jest.fn(id => (id ? boardFixture : boardsFixture))
};
export const card = {
  // create: jest.fn(title, listId, pos),
  fetch: jest.fn(id=> fetchedCard)
  // update:jest.fn(id,payload),
};

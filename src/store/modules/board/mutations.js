export default {
  SET_IS_ADD_BOARD(state, toggle) {
    state.isAddBoard = toggle;
  },
  SET_BOARDS(state, boards) {
    state.boards = boards;
  },
  SET_BOARD(state, board) {
    state.board = board;
  }
};

import * as types from "types";

export default (state = { posts: [] }, { payload, type }) => {
  switch (type) {
    case types.SET_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};

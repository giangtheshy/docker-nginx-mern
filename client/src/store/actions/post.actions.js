import * as types from "types";
// import * as apis from "Apis";

export const getPosts = () => ({ type: types.GET_POSTS });
export const setPosts = (posts) => ({ type: types.SET_POSTS, payload: posts });

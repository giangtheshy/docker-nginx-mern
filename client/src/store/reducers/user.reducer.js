import * as types from "types";

const initState = { username: null, token: null, role: null, avatar: null, favorites: null, watched: null, type: null };
export default (userState = initState, action) => {
  switch (action.type) {
    case types.LOGIN:
    case types.LOGIN_GOOGLE:
      return {
        username: action.payload.name,
        token: action.payload.authenticationToken,
        role: action.payload.role,
        avatar: action.payload.avatar,
        favorites: action.payload.favorites,
        watched: action.payload.watched,
        type: action.payload.type,
      };
    case types.LOGOUT:
      return { username: null, token: null, role: null, avatar: null };
    case types.CHECK_LOGIN:
      return { user: action.payload.data, token: action.payload.token };

    default:
      return userState;
  }
};

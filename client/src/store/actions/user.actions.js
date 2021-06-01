import * as types from "types";
export const registerUser = (user, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const { data } = await api.registerUser({
      username: user.username,
      password: user.password,
      name: user.name,
      email: user.email,
    });
    setLoading(false);

    return data;
  } catch (error) {
    setLoading(false);
    if (error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.response.data;
    }
  }
};
export const loginUser = (user, setLoading) => async (dispatch) => {
  try {
    setLoading(true);
    const { data } = await api.loginUser({ username: user.username, password: user.password });
    setLoading(false);

    dispatch({ type: types.LOGIN, payload: data });
  } catch (error) {
    setLoading(false);
    if (error.response.data.message) {
      return error.response.data.message;
    } else {
      return error.response.data;
    }
  }
};
export const logoutUser = () => async (dispatch) => {
  try {
    await api.logoutUser();
    dispatch({ type: types.LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
export const checkLogin = () => async (dispatch) => {
  try {
    const { data } = await api.checkLogin();

    dispatch({ type: types.LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

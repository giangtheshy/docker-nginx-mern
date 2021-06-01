import axios from "./axios";
axios.defaults.withCredentials = true;

export const loginUser = (user) => axios.post("/auth/login", user);
export const registerUser = (user) => axios.post("/auth/signup", user);
export const verifyAccount = (token) => axios.get(`/auth/accountVerification/${token}`);
export const checkLogin = () => axios.get("/auth/refresh/token");
export const logoutUser = () => axios.delete("/auth/logout");

export const getPosts = () => axios.get("/posts/getPosts");

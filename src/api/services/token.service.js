import jwtDecode from "jwt-decode";

const setTokenInLocalStorage = (accessToken) => {
  localStorage.setItem("accessToken", accessToken);
};

const getTokenFromLocalStorage = () => {
  const accessToken = localStorage.getItem("accessToken");
  return accessToken;
};

const getUserFromLocalToken = () => {
  const accessToken = getTokenFromLocalStorage();
  if (!accessToken) return null;
  return jwtDecode(accessToken);
};

const TokenService = {
  setTokenInLocalStorage,
  getUserFromLocalToken,
  getTokenFromLocalStorage,
};

export default TokenService;

import Cookies from "js-cookie";

export const userIsLogged = () => {
  const token = Cookies.get("token");
  return token ? true : false;
};

export const dataToken = () => {
  const token = Cookies.get("token");
  return token ? token : null;
};

export const logout = () => {
  console.log("Logout function called");
  Cookies.remove("token");
  window.location.href = "/login";
};

import Cookies from "js-cookie";

export const userIsLogged = () => {
  const token = Cookies.get("token");
  return token ? true : false;
};

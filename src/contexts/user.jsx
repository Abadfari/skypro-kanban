import { createContext, useState } from "react";
import { getUserFromLocalStorage } from "../lib/helpers";
import { routes } from "../lib/routes";
import { Outlet, useNavigate } from "react-router-dom";

export const UserContext = createContext(null);
export const UserProvider = () => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const navigate = useNavigate();

  function login(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
    setUser(userData);
    navigate(routes.BOARD);
  }
  function logout() {
    localStorage.removeItem("userData");
    setUser(null);
    navigate(routes.LOGIN);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      <Outlet />
    </UserContext.Provider>
  );
};

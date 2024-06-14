import { Routes, Route, useNavigate } from "react-router-dom";
import { routes } from "./lib/routes";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import NotFoundPage from "./pages/notFound/NotFound";
import AddCardPage from "./pages/addCard/AddCard";
import CardPage from "./pages/card/Card";
import ExitPage from "./pages/exit/Exit";
import { useEffect, useState } from "react";
import PrivateRoute from "./components/route/PrivateRoute";
import { getUserFromLocalStorage } from "./lib/helpers";
import BoardPage from "./pages/board/Board";

function AppRoutes() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userData = getUserFromLocalStorage();
    console.log(userData);
    if (userData) {
      setUser(userData);
      navigate(routes.BOARD);
    }
  }, [navigate]);

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
    <Routes>
      <Route element={<PrivateRoute isAuth={user} />}>
        <Route
          path={routes.BOARD}
          element={<BoardPage user={user} logout={logout} />}
        >
          <Route path={routes.ADD_CARD} element={<AddCardPage />} />
          <Route path={routes.CARD} element={<CardPage />} />
          <Route path={routes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={routes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={routes.REGISTER} element={<RegisterPage login={login} />} />
      <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

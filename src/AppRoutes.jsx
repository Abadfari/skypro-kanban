import { Routes, Route, useNavigate } from "react-router-dom";
import BoardPage from "./pages/board/Board";
import { routes } from "./lib/routes";
import LoginPage from "./pages/login/Login";
import RegisterPage from "./pages/register/Register";
import NotFoundPage from "./pages/notFound/NotFound";
import AddCardPage from "./pages/addCard/AddCard";
import CardPage from "./pages/card/Card";
import ExitPage from "./pages/exit/Exit";
import { useState } from "react";
import PrivateRoute from "./components/route/PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  function login() {
    setIsAuth(true);
    navigate(routes.BOARD);
  }
  function logout() {
    setIsAuth(false);
    navigate(routes.LOGIN);
  }
  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path={routes.BOARD} element={<BoardPage />}>
          <Route path={routes.ADD_CARD} element={<AddCardPage />} />
          <Route path={routes.CARD} element={<CardPage />} />
          <Route path={routes.EXIT} element={<ExitPage logout={logout} />} />
        </Route>
      </Route>
      <Route path={routes.LOGIN} element={<LoginPage login={login} />} />
      <Route path={routes.REGISTER} element={<RegisterPage />} />
      <Route path={routes.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

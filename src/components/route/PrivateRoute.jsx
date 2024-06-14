import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuth }) {
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;

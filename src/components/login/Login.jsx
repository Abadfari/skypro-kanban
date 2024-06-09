import { Link } from "react-router-dom";
import { routes } from "../../lib/routes";

const Login = () => {
  return (
    <div className="modal__block">
      <div className="modal__ttl">
        <h2>Вход</h2>
      </div>
      <input className="modal__form-login" id="formLogIn" action="#" />
      <input
        className="modal__input"
        type="text"
        name="login"
        id="formlogin"
        placeholder="Эл. почта"
      />
      <input
        className="modal__input"
        type="password"
        name="password"
        id="formpassword"
        placeholder="Пароль"
      />
      <button className="modal__btn-enter _hover01" id="btnEnter">
        <Link to={routes.BOARD}>Войти</Link>
      </button>
      <div className="modal__form-group">
        <p>Нужно зарегистрироваться?</p>
        <Link to={routes.REGISTER}>Регистрируйтесь здесь</Link>
      </div>
    </div>
  );
};

export default Login;

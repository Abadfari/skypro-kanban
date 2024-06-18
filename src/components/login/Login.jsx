import { routes } from "../../lib/routes";
import * as S from "./Login.styled";
import * as Shared from "../../shared/Shared.styled";
import { useState } from "react";
import { loginUser } from "../../API/auth";

const Login = ({ login }) => {
  const [formValue, setFormValue] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  function onChange(event) {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  function onClick(event) {
    event.preventDefault();
    if (!formValue.login.trim() || !formValue.password.trim()) {
      setError(
        "Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа."
      );
      return;
    }
    loginUser({ login: formValue.login, password: formValue.password })
      .then((userData) => {
        login(userData.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  return (
    <Shared.LoginWrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Вход</h2>
          </S.ModalTitle>
          <S.ModalInputWrapper>
            <S.ModalFormLogin
              placeholder="Эл. почта"
              type="text"
              name="login"
              value={formValue.login}
              onChange={onChange}
            />
            <S.ModalFormLogin
              placeholder="Пароль"
              type="password"
              name="password"
              value={formValue.password}
              onChange={onChange}
            />
            <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
          </S.ModalInputWrapper>
          <S.Button onClick={onClick}>Войти</S.Button>
          <S.ModalFormGroup>
            <p>Нужно зарегистрироваться?</p>
            <S.StyledLinkLogin to={routes.REGISTER}>
              Регистрируйтесь здесь
            </S.StyledLinkLogin>
          </S.ModalFormGroup>
        </S.ModalBlock>
      </S.Modal>
    </Shared.LoginWrapper>
  );
};

export default Login;

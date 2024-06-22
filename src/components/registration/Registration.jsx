import { routes } from "../../lib/routes";
import * as S from "./Registration.styled";
import * as Shared from "../../shared/Shared.styled";
import { useState } from "react";
import { register } from "../../API/auth";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  
  const [formValue, setFormValue] = useState({
    name: "",
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function onChange(event) {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  }
  function onClick(event) {
    event.preventDefault();
    if (
      !formValue.name.trim() ||
      !formValue.login.trim() ||
      !formValue.password.trim()
    ) {
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме."
      );
      return;
    }
    register({
      name: formValue.name,
      login: formValue.login,
      password: formValue.password,
    })
      .then(() => {
        navigate(routes.LOGIN);
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
            <h2>Регистрация</h2>
          </S.ModalTitle>
          <S.ModalInputWrapper>
            <S.ModalFormRegistration
              placeholder="Имя"
              type="text"
              name="name"
              value={formValue.name}
              onChange={onChange}
            />
            <S.ModalFormRegistration
              placeholder="Эл. почта"
              type="text"
              name="login"
              value={formValue.login}
              onChange={onChange}
            />
            <S.ModalFormRegistration
              placeholder="Пароль"
              type="password"
              name="password"
              value={formValue.password}
              onChange={onChange}
            />
            <S.StyledErrorMessage>{error}</S.StyledErrorMessage>
          </S.ModalInputWrapper>
          <S.Button onClick={onClick}>Зарегистрироваться</S.Button>
          <S.ModalFormGroup>
            <p>Уже есть аккаунт?</p>
            <S.StyledLinkRegistration to={routes.LOGIN}>
              Войдите здесь
            </S.StyledLinkRegistration>
          </S.ModalFormGroup>
        </S.ModalBlock>
      </S.Modal>
    </Shared.LoginWrapper>
  );
};

export default Registration;

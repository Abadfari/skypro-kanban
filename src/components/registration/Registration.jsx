import { routes } from "../../lib/routes";
import * as S from "./Registration.styled";
import * as Shared from "../../shared/Shared.styled";
import { useState } from "react";
// import { loginUser } from "../../API/auth";

const Registration = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    login: "",
    password: "",
  });
  // const [error, setError] = useState("");
  function onChange(event) {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
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
              name="login"
              value={formValue.login}
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
            {/* <p>{error}</p> */}
          </S.ModalInputWrapper>
          <S.Button>Зарегистрироваться</S.Button>
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

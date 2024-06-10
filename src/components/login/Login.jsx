import { routes } from "../../lib/routes";
import * as S from "./Login.styled";
import * as Shared from "../../shared/Shared.styled";

const Login = ({ login }) => {
  return (
    <Shared.LoginWrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTitle>
            <h2>Вход</h2>
          </S.ModalTitle>
          <S.ModalInputWrapper>
            <S.ModalFormLogin placeholder="Эл. почта" />
            <S.ModalFormLogin placeholder="Пароль" />
          </S.ModalInputWrapper>
          <S.Button onClick={login}>Войти</S.Button>
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

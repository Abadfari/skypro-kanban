import { Link } from "react-router-dom";
import { routes } from "../../../lib/routes";
import { useUser } from "../../../hooks/useUser";
import * as S from "./PopExit.styled";

const PopExit = () => {
  const { logout } = useUser();
  return (
    <S.PopExit>
      <S.PopExitContainer>
        <S.PopExitBlock>
          <S.PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </S.PopExitTitle>
          <form>
            <S.PopExitFormGroup>
              <S.PopExitYes onClick={logout}>Да, выйти</S.PopExitYes>
              <S.PopExitNo>
                <Link to={routes.BOARD}>Нет, остаться</Link>
              </S.PopExitNo>
            </S.PopExitFormGroup>
          </form>
        </S.PopExitBlock>
      </S.PopExitContainer>
    </S.PopExit>
  );
};

export default PopExit;

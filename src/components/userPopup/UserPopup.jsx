import { Link } from "react-router-dom";
import * as S from "./UserPopup.styled";
import { routes } from "../../lib/routes";

const UserPopup = () => {
  return (
    <S.HeaderPopUserSet>
      <S.PopUserSetName>Ivan Ivanov</S.PopUserSetName>
      <S.PopUserSetMail>ivan.ivanov@gmail.com</S.PopUserSetMail>
      <S.PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox"></input>
      </S.PopUserSetTheme>
      <S.UserButton type="button">
        <Link to={routes.EXIT}>Выйти</Link>
      </S.UserButton>
    </S.HeaderPopUserSet>
  );
};

export default UserPopup;

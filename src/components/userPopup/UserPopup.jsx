import * as S from "./UserPopup.styled";

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
        <a href="#popExit">Выйти</a>
      </S.UserButton>
    </S.HeaderPopUserSet>
  );
};

export default UserPopup;

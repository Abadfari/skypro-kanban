import {
  HeaderPopUserSet,
  PopUserSetMail,
  PopUserSetName,
  PopUserSetTheme,
  UserButton,
} from "./UserPopup.styled";

const UserPopup = () => {
  return (
    <HeaderPopUserSet>
      <PopUserSetName>Ivan Ivanov</PopUserSetName>
      <PopUserSetMail>ivan.ivanov@gmail.com</PopUserSetMail>
      <PopUserSetTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox"></input>
      </PopUserSetTheme>
      <UserButton type="button">
        <a href="#popExit">Выйти</a>
      </UserButton>
    </HeaderPopUserSet>
  );
};

export default UserPopup;

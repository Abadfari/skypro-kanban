import * as Shared from "../../shared/Shared.styled";
import Nav from "../nav/Nav";
import * as S from "./Header.styled";

const Header = ({ addTask }) => {
  return (
    <S.Header>
      <Shared.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </S.HeaderLogo>
          <Nav addTask={addTask} />
        </S.HeaderBlock>
      </Shared.Container>
    </S.Header>
  );
};

export default Header;

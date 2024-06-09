import { Link } from "react-router-dom";
import * as Shared from "../../shared/Shared.styled";
import Nav from "../nav/Nav";
import * as S from "./Header.styled";
import { routes } from "../../lib/routes";

const Header = ({ addTask }) => {
  return (
    <S.Header>
      <Shared.Container>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <Link to={routes.BOARD}>
              <img src="images/logo.png" alt="logo"></img>
            </Link>
          </S.HeaderLogo>
          <Nav addTask={addTask} />
        </S.HeaderBlock>
      </Shared.Container>
    </S.Header>
  );
};

export default Header;

import Nav from "../nav/Nav";
import * as S from "./Header.styled"

const Header = ({ addTask }) => {
  return (
    <S.Header>
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo"></img>
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo"></img>
            </a>
          </div>
          <Nav addTask={addTask} />
        </div>
      </div>
    </S.Header>
  );
};

export default Header;

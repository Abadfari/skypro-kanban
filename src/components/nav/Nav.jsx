import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";
import * as S from "./Nav.styled";
import { Link } from "react-router-dom";
import { routes } from "../../lib/routes";

const Nav = ({ addTask, user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.HeaderNav>
      <S.Button onClick={addTask}>
        <Link to={routes.ADD_CARD}>Создать новую задачу</Link>
      </S.Button>
      <S.HeaderUser href="#" onClick={() => setIsOpen(!isOpen)}>
        {user?.login}
      </S.HeaderUser>
      {isOpen && <UserPopup user={user} />}
    </S.HeaderNav>
  );
};

export default Nav;

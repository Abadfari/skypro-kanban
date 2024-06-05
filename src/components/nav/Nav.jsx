import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";
import * as S from "./Nav.styled";

const Nav = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.HeaderNav>
      <S.Button onClick={addTask}>
        <a href="#popNewCard">Создать новую задачу</a>
      </S.Button>
      <S.HeaderUser href="#" onClick={() => setIsOpen(!isOpen)}>
        Ivan Ivanov
      </S.HeaderUser>
      {isOpen && <UserPopup />}
    </S.HeaderNav>
  );
};

export default Nav;

import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";
import { Button, HeaderNav, HeaderUser } from "./Nav.styled";

const Nav = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <HeaderNav>
      <Button onClick={addTask}>
        <a href="#popNewCard">Создать новую задачу</a>
      </Button>
      <HeaderUser href="#" onClick={() => setIsOpen(!isOpen)}>
        Ivan Ivanov
      </HeaderUser>
      {isOpen && <UserPopup />}
    </HeaderNav>
  );
};

export default Nav;

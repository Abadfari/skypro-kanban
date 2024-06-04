import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";
import styled from "styled-components";
import { Hover01 } from "../../shared/Shared.styled";
const Button = styled.button`
  ${Hover01}
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  & a {
    color: #ffffff;
  }
`;
const Nav = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="header__nav">
      <Button onClick={addTask}>
        <a href="#popNewCard">Создать новую задачу</a>
      </Button>
      <a
        href="#"
        className="header__user _hover02"
        onClick={() => setIsOpen(!isOpen)}
      >
        Ivan Ivanov
      </a>
      {isOpen && <UserPopup />}
    </nav>
  );
};

export default Nav;

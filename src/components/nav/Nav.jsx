import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";

const Nav = ({ addTask }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="header__nav">
      <button
        className="header__btn-main-new _hover01"
        id="btnMainNew"
        onClick={addTask}
      >
        <a href="#popNewCard">Создать новую задачу</a>
      </button>
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

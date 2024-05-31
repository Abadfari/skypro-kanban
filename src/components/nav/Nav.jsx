import { useState } from "react";
import UserPopup from "../userPopup/UserPopup";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="header__nav">
      <button className="header__btn-main-new _hover01" id="btnMainNew">
        <a href="#popNewCard">Создать новую задачу</a>
      </button>
      <a
        href="#user-set-target"
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

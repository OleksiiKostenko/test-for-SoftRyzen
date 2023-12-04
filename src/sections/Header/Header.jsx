import { useState } from "react";
import BurgerMenu from "../../component/BurgerMenu";
import Logo from "../../component/Logo";
import css from "./Header.module.css";

function Header() {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <header>
      <div className={css.header_container}>
        <Logo />
        <button className={css.btn} type="button" onClick={toggleModal}>
          <svg className={css.btn_icon}>
            <use href="../../public/svg/icons.svg#icon-menu"></use>
          </svg>
          {isShowModal && <BurgerMenu></BurgerMenu>}
        </button>
      </div>
    </header>
  );
}

export default Header;

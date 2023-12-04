import { useState } from "react";
import PropTypes from "prop-types";
import BurgerMenu from "../../component/BurgerMenu";
import Logo from "../../component/Logo";
import css from "./Header.module.css";
import { useEffect } from "react";
import HeaderBtn from "../../component/HeaderBtn";

function Header({ viewportWidts }) {
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("#header");
      const rect = header.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();
      const top = rect.top + window.scrollY - bodyRect.top;
      header.style.backgroundColor = "#fff";
      if (top < -90) {
        header.style.backgroundColor = "transparent";
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <header id="header" className={css.header}>
      <div className={css.header_container}>
        <Logo />
        <div className={css.btn_wrapp}>
          <button className={css.btn} type="button" onClick={toggleModal}>
            <svg className={css.btn_icon}>
              <use href="svg/icons.svg#icon-menu"></use>
            </svg>
            {isShowModal && <BurgerMenu toggleModal={toggleModal}></BurgerMenu>}
          </button>
          {viewportWidts >= 768 ? <HeaderBtn>Get in touch</HeaderBtn> : false}
        </div>
      </div>
    </header>
  );
}
Header.propTypes = {
  viewportWidts: PropTypes.number.isRequired,
};

export default Header;

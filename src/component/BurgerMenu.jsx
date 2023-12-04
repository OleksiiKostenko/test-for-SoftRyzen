import css from "./Components.module.css";
import LinkIcon from "./LinkIcon";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

function BurgerMenu({ toggleModal }) {
  const color = {
    color: "var(--modal-text-color)",
  };

  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <div className={css.modal_btn_wrapp}>
          <button className={css.close_btn} type="button" onClick={toggleModal}>
            <svg className={css.close_icon}>
              <use href="src/assets/svg/icons.svg#icon-close"></use>
            </svg>
            close
          </button>
        </div>
        <div className={css.nav_wrapp}>
          <ul className={css.nav_list}>
            <li className={css.nav_item}>
              <a className={`${css.nav_link} ${css.active}`} href="#hero">
                Main
              </a>
            </li>
            <li className={css.nav_item}>
              <a className={css.nav_link} href="#about">
                About
              </a>
            </li>
            <li className={css.nav_item}>
              <a className={css.nav_link} href="#cases">
                Cases
              </a>
            </li>
            <li className={css.nav_item}>
              <a className={css.nav_link} href="#faq">
                FAQ
              </a>
            </li>
            <li className={css.nav_item}>
              <a className={css.nav_link} href="#contactUs">
                Contact Us
              </a>
            </li>
          </ul>
          <LinkIcon color={color} />
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default BurgerMenu;

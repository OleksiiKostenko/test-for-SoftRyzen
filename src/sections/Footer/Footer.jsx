import ContactInfo from "../../component/ContactInfo";
import Logo from "../../component/Logo";
import css from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div className={css.container}>
        <div className={css.img_wrapp}>
          <Logo />
          <button type="button" className={css.btn}>
            <svg className={css.icon_btn}>
              <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        </div>
        <div>
          <ul className={css.list}>
            <li className={css.item}>
              <a
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg className={css.social_icon}>
                  <use href="../../public/svg/icons.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li className={css.item}>
              <a
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg className={css.social_icon}>
                  <use href="../../public/svg/icons.svg#icon-instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <ContactInfo showAll={true} />
      </div>
    </footer>
  );
}

export default Footer;

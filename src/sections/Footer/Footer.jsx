import ContactInfo from "../../component/ContactInfo";
import LinkIcon from "../../component/LinkIcon";
import Logo from "../../component/Logo";
import css from "./Footer.module.css";

function Footer() {
  const color = {
    color: "var(--dark-green-color)",
  };

  return (
    <footer>
      <div className={css.container}>
        <div className={css.img_wrapp}>
          <Logo />
          <button type="button" className={css.btn}>
            <svg className={css.icon_btn}>
              <use href="src/assets/svg/icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
        </div>
        <div>
          <LinkIcon color={color} />
        </div>
        <ContactInfo showAll={true} />
      </div>
    </footer>
  );
}

export default Footer;

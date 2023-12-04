import Form from "../../component/Form";
import css from "./ContactUs.module.css";
import indexCss from "../../index.module.css";

function ContactUs() {
  return (
    <section id="contactUs" className={css.section}>
      <div>
        <div>
          <h2 className={indexCss.section_title}>Contact us</h2>
          <ul className={css.contact_list}>
            <li className={css.list_item}>
              <p className={css.list_title}>Phone:</p>
              <div className={css.numb_wrapp}>
                <a
                  className={`${css.item_link} ${css.first_numb}`}
                  href="tel:+380981234567"
                >
                  <svg className={css.link_icon}>
                    <use href="src/assets/svg/icons.svg#icon-call"></use>
                  </svg>
                  38 (098) 12 34 567
                </a>
                <a className={css.item_link} href="tel:+380931234567">
                  <svg className={css.link_icon}>
                    <use href="src/assets/svg/icons.svg#icon-call"></use>
                  </svg>
                  38 (093) 12 34 567
                </a>
              </div>
            </li>
            <li className={css.list_item}>
              <p className={css.list_title}>E-mail:</p>
              <a className={css.item_link} href="mailto:office@ecosolution.com">
                <svg className={css.link_icon}>
                  <use href="src/assets/svg/icons.svg#icon-sms"></use>
                </svg>
                office@ecosolution.com
              </a>
            </li>
            <li className={css.list_item}>
              <p className={css.list_title}>Address:</p>
              <a
                className={css.item_link}
                href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <svg className={css.link_icon}>
                  <use href="src/assets/svg/icons.svg#icon-map"></use>
                </svg>
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </a>
            </li>
            <li className={css.list_item}>
              <p className={css.list_title}>Social Networks:</p>
              <div className={css.social_icon_wrapp}>
                <a
                  className={`${css.item_link} ${css.social_icon_link}`}
                  href="http://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg className={`${css.link_icon} ${css.social_icon}`}>
                    <use href="src/assets/svg/icons.svg#icon-facebook"></use>
                  </svg>
                </a>
                <a
                  className={`${css.item_link} ${css.social_icon_link}`}
                  href="http://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <svg className={`${css.link_icon} ${css.social_icon}`}>
                    <use href="src/assets/svg/icons.svg#icon-instagram"></use>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;

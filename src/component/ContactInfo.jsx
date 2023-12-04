import css from "./Components.module.css";

function contactInfo({ showAll }) {
  return (
    <div className={css.cont_wrapp}>
      <ul className={css.cont_list}>
        <li className={css.cont_item}>
          <a
            className={css.cont_link}
            href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </li>
        <li className={css.cont_item}>
          <a className={css.cont_link} href="mailto:office@ecosolution.com">
            office@ecosolution.com
          </a>
        </li>
        {showAll && (
          <li className={css.cont_item}>
            <p className={css.cont_link}>Ecosolution &#169; 2023</p>
          </li>
        )}
      </ul>
    </div>
  );
}

export default contactInfo;

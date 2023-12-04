import css from "./Components.module.css";

function LinkIcon({ color }) {
  return (
    <ul className={css.list}>
      <li className={css.item}>
        <a
          style={color}
          href="http://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <svg className={css.social_icon}>
            <use href="src/assets/svg/icons.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li className={css.item}>
        <a
          style={color}
          href="http://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <svg className={css.social_icon}>
            <use href="src/assets/svg/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default LinkIcon;

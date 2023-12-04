import css from "./Components.module.css";
import PropTypes from "prop-types";

function HeaderBtn({ children }) {
  return (
    <button className={css.contact_btn} type="button">
      {children}
      <div className={css.contact_arrow_wrapp}>
        <svg className={css.contact_icon_btn}>
          <use href="src/assets/svg/icons.svg#icon-arrow-right"></use>
        </svg>
      </div>
    </button>
  );
}

HeaderBtn.propTypes = {
  children: PropTypes.string.isRequired,
};

export default HeaderBtn;

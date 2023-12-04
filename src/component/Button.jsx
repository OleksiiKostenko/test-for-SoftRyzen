import css from "./Components.module.css";
import PropTypes from "prop-types";

function Button({ children, type }) {
  return (
    <button className={css.btn} type={type}>
      {children}
      <div className={css.arrow_wrapp}>
        <svg className={css.icon_btn}>
          <use href="src/assets/svg/icons.svg#icon-arrow-right"></use>
        </svg>
      </div>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
export default Button;

import css from "./Components.module.css";

function Logo() {
  return (
    <img
      className={css.img}
      src="image/logo.png"
      alt="Логотип Компанії Ecosolution"
    />
  );
}

export default Logo;

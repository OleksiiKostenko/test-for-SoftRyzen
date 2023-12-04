import Button from "./Button";
import css from "./Components.module.css";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.label}>
        * Full name:
        <input
          required
          pattern="[A-Za-z]+\s[A-Za-z]+"
          className={css.input}
          placeholder="John Roise"
          type="text"
          name="fullName"
          id="fullName"
        />
      </label>
      <label className={css.label}>
        * E-mail:
        <input
          required
          className={css.input}
          placeholder="jounroise@gmail.com"
          type="email"
          name="email"
          id="email"
        />
      </label>
      <label className={css.label}>
        * Phone:
        <input
          required
          className={css.input}
          pattern="^380\d{9}$"
          placeholder="380961234567"
          type="tel"
          name="email"
          id="email"
        />
      </label>
      <label className={css.label}>
        Message:
        <textarea
          className={css.input}
          placeholder="My message...."
          rows="7"
          name="message"
          id="message"
        ></textarea>
      </label>
      <div className={css.btn_wrapp}>
        <Button type={"submit"}>Send</Button>
      </div>
    </form>
  );
}

export default Form;

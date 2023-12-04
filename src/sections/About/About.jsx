import css from "./About.module.css";
import indexCss from "../../index.module.css";

function About() {
  return (
    <section>
      <div>
        <img
          className={css.img}
          src="../../public/image/wind_turbine.png"
          alt="Wind turbine"
        />
        <h2 className={indexCss.section_title}>Main values of our company</h2>
        <p className={indexCss.paragr}>
          EcoSolution envisions a world where sustainable energy solutions power
          a brighter and cleaner future for all. We aspire to be at the
          forefront of the global shift towards renewable energy, leading the
          way in innovative technologies that harness the power of nature to
          meet the world`s energy needs.
        </p>
      </div>
      <div className={css.list_wrapp}>
        <ul className={css.list}>
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="../../public/svg/icons.svg#icon-maximize-circle"></use>
              </svg>
              Openness
            </h3>
            <p className={css.card_desc}>
              to the world, people, new ideas and projects
            </p>
          </li>
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="../../public/svg/icons.svg#icon-global-edit"></use>
              </svg>
              Responsibility
            </h3>
            <p className={css.card_desc}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="../../public/svg/icons.svg#icon-cpu-charge"></use>
              </svg>
              Innovation
            </h3>
            <p className={css.card_desc}>
              we use the latest technology to implement non-standard solutions
            </p>
          </li>
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="../../public/svg/icons.svg#icon-ranking"></use>
              </svg>
              Quality
            </h3>
            <p className={css.card_desc}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;

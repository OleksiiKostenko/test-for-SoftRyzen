import css from "./About.module.css";
import indexCss from "../../index.module.css";
import PropTypes from "prop-types";

function About({ viewportWidts }) {
  return (
    <section id="about">
      <div>
        <img
          className={css.img}
          src="./public/image/wind_turbine.png"
          alt="Wind turbine"
        />
        <div className={css.text_wrapp}>
          <h2 className={`${indexCss.section_title} ${css.title}`}>
            Main values of our company
          </h2>
          <p className={css.paragr}>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world`s energy needs.
          </p>
        </div>
      </div>
      <div className={css.list_wrapp}>
        <ul className={css.list}>
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="./public/svg/icons.svg#icon-maximize-circle"></use>
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
                <use href="./public/svg/icons.svg#icon-global-edit"></use>
              </svg>
              Responsibility
            </h3>
            <p className={css.card_desc}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </li>
          {viewportWidts >= 768 ? (
            <>
              <li className={css.list_item}>
                <img
                  className={css.second_img}
                  src="./public/image/worker_with_sun_panels.png"
                  alt="Worker with sun panels"
                />
              </li>
              <li className={css.list_item}>
                <img
                  className={css.second_img}
                  src="./public/image/workers.png"
                  alt="Workers"
                />
              </li>
            </>
          ) : (
            false
          )}
          <li className={css.list_item}>
            <h3 className={css.card_title}>
              <svg className={css.card_icon}>
                <use href="./public/svg/icons.svg#icon-cpu-charge"></use>
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
                <use href="./public/svg/icons.svg#icon-ranking"></use>
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

About.propTypes = {
  viewportWidts: PropTypes.number.isRequired,
};

export default About;

import PropTypes from "prop-types";
import css from "./Hero.module.css";
import indexCss from "../../index.module.css";
import ContactInfo from "../../component/ContactInfo";
import Button from "../../component/Button";

function Hero({ viewportWidts }) {
  return (
    <section id="hero" className={css.section}>
      <div className={css.hero_wrapp}>
        <h1 className={indexCss.title}>Renewable energy for any task</h1>
        <div className={css.text_wrapp}>
          <p className={css.paragr}>
            Development and implementation of renewable non-polluting energy
            sources, generating power generetion using energy
            wind,sun,water,biomass
          </p>
          <div className={css.btn_wrapp}>
            <Button type={"button"}>Learn more</Button>
          </div>
        </div>
      </div>
      <ContactInfo showAll={viewportWidts >= 768 ? true : false} />
    </section>
  );
}

Hero.propTypes = {
  viewportWidts: PropTypes.number.isRequired,
};

export default Hero;

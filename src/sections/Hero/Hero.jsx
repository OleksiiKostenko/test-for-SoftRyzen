import { useEffect, useState } from "react";
import css from "./Hero.module.css";
import indexCss from "../../index.module.css";
import ContactInfo from "../../component/ContactInfo";
import Button from "../../component/Button";

function Hero() {
  const [viewportWidts, setViewportWidts] = useState(window.innerWidth);

  useEffect(() => {
    const handerResize = () => {
      setViewportWidts(window.innerWidth);
    };

    window.addEventListener("resize", handerResize);
  }, []);

  return (
    <section className={css.section}>
      <div className={css.hero_wrapp}>
        <h1 className={indexCss.title}>Renewable energy for any task</h1>
        <p className={indexCss.paragr}>
          Development and implementation of renewable non-polluting energy
          sources, generating power generetion using energy
          wind,sun,water,biomass
        </p>
        <div className={css.btn_wrapp}>
          <Button type={"button"}>Learn more</Button>
        </div>
      </div>
      <ContactInfo showAll={viewportWidts >= 768 ? true : false} />
    </section>
  );
}

export default Hero;

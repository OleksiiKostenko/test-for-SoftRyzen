import { useState } from "react";
import css from "./Electricity.module.css";
import indexCss from "../../index.module.css";

function Electricity() {
  const [quantity, setQuantity] = useState(1134147814);

  setTimeout(() => {
    setQuantity(quantity + 1);
  }, 1000);

  return (
    <section>
      <div className={css.container_wrapp}>
        <h2 className={`${indexCss.section_title} ${css.title}`}>
          Electricity we produced for all time
        </h2>
        <h3 className={css.quantity}>
          {quantity.toLocaleString("da-DK")}
          <span className={css.value}>kWh</span>
        </h3>
      </div>
    </section>
  );
}

export default Electricity;

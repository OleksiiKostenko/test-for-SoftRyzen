import css from "./Faq.module.css";
import indexCss from "../../index.module.css";

function Faq() {
  return (
    <section>
      <div className={css.title_wrapp}>
        <h2 className={indexCss.section_title}>Frequently Asked Questions</h2>
      </div>
      <div className={css.list_wrapp}>
        <ul className={css.list}>
          <li className={css.list_item}>
            <p className={css.list_title}>
              How do wind turbines and solar panels work together in a renewable
              energy system?
            </p>
            <p className={css.list_desc}>
              Wind turbines and solar panels generate electricity through
              different mechanisms. Wind turbines harness the kinetic energy of
              the wind to turn blades, which then drive a generator. Solar
              panels convert sunlight into electricity through the photovoltaic
              effect. When integrated into a renewable energy system, these
              technologies complement each other by providing a continuous and
              reliable power supply. Wind power is often more abundant during
              certain times, while solar power is consistent during daylight
              hours, resulting in a more stable overall energy output.
            </p>
          </li>
          <li className={css.list_item}>
            <p className={css.list_title}>
              What sets EcoSolution`s renewable energy solutions apart from
              others on the market?
            </p>
            <p className={css.list_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              pariatur exercitationem cupiditate suscipit, incidunt asperiores.
              Harum tempore vitae recusandae autem ullam quisquam ratione qui,
              culpa repellat est consectetur excepturi minus?
            </p>
          </li>
          <li className={css.list_item}>
            <p className={css.list_title}>
              How can businesses and communities benefit from integrating
              renewable energy solutions from EcoSolution?
            </p>
            <p className={css.list_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              pariatur veniam in, voluptates odio veritatis, totam accusantium
              exercitationem, velit magni autem consequatur sint sunt nulla
              quaerat animi magnam excepturi. Autem.
            </p>
          </li>
          <li className={css.list_item}>
            <p className={css.list_title}>
              What measures does EcoSolution take to ensure the environmental
              sustainability of its products?
            </p>
            <p className={css.list_desc}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              officiis facilis. Recusandae fugit voluptatem mollitia officiis et
              eos possimus quisquam perferendis consequatur impedit quasi
              pariatur sequi a nostrum, corrupti neque.
            </p>
          </li>
          <li className={css.list_item}>
            <p className={css.list_title}>
              How does EcoSolution engage with local communities and support a
              just transition to renewable energy?
            </p>
            <p className={css.list_desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              eligendi vel incidunt culpa fugiat similique debitis magni labore
              hic, laborum deleniti tempora fuga in alias corporis tenetur nam
              animi harum.
            </p>
          </li>
        </ul>
      </div>
      <div className={css.question_wrapp}>
        <p className={css.question_text}>
          Didn`t find the answer to your question?
        </p>
        <button className={css.contact_btn} type="button">
          <p className={css.btn_text}>Contact Us</p>
        </button>
      </div>
    </section>
  );
}

export default Faq;

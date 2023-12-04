import css from "./Cases.module.css";
import indexCss from "../../index.module.css";
import { cards } from "./cards";

function Cases() {
  return (
    <section id="cases">
      <div className={css.container}>
        <div className={css.block_wrapp}>
          <h2 className={indexCss.section_title}>
            Successful cases of our company
          </h2>
          <div className={css.num_wrapp}>
            <p className={css.num}>
              <span className={css.active_num}>01</span>/05
            </p>
            <div className={css.btn_wrapp}>
              <button type="button" className={css.btn}>
                <svg className={css.icon_btn_left}>
                  <use href="svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
              <button type="button" className={css.btn}>
                <svg className={css.icon_btn_right}>
                  <use href="svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ul className={css.list}>
          {cards.map((card) => (
            <li key={card.id} className={css.list_item}>
              <img className={css.card_img} src={card.src} alt="Photo" />
              <div className={css.title_wrapp}>
                <p className={css.card_title}>{card.title}</p>
                <button type="button" className={css.card_btn}>
                  <svg className={css.icon_card_btn}>
                    <use href="svg/icons.svg#icon-arrow-right"></use>
                  </svg>
                </button>
              </div>
              <div className={css.desc_wrapp}>
                <p className={css.card_desc}>{card.description}</p>
                <p className={css.card_desc}>{card.data}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Cases;

import css from "./Cases.module.css";
import indexCss from "../../index.module.css";

function Cases() {
  return (
    <section>
      <div className={css.container}>
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
                <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
              </svg>
            </button>
            <button type="button" className={css.btn}>
              <svg className={css.icon_btn_right}>
                <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
              </svg>
            </button>
          </div>
        </div>
        <ul className={css.list}>
          <li className={css.list_item}>
            <img
              className={css.card_img}
              src="../../public/image/wind_turbine_in_field.png"
              alt=""
            />
            <div className={css.title_wrapp}>
              <p className={css.card_title}>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </p>
              <button type="button" className={css.card_btn}>
                <svg className={css.icon_card_btn}>
                  <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
            <div className={css.desc_wrapp}>
              <p className={css.card_desc}>
                Wind Power for auto field irrigation
              </p>
              <p className={css.card_desc}>July 2023</p>
            </div>
          </li>
          <li className={css.list_item}>
            <img
              className={css.card_img}
              src="../../public/image/sun_panel_field.png"
              alt=""
            />
            <div className={css.title_wrapp}>
              <p className={css.card_title}>
                Zhytomyr city Private Enterprise “Bosch”
              </p>
              <button type="button" className={css.card_btn}>
                <svg className={css.icon_card_btn}>
                  <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
            <div className={css.desc_wrapp}>
              <p className={css.card_desc}>
                Solar Panels for industrial useSolar Panels for industrial use
              </p>
              <p className={css.card_desc}>November 2023</p>
            </div>
          </li>
          <li className={css.list_item}>
            <img
              className={css.card_img}
              src="../../public/image/h2_generetor.png"
              alt=""
            />
            <div className={css.title_wrapp}>
              <p className={css.card_title}>
                Rivne city Private Enterprise “Biotech”
              </p>
              <button type="button" className={css.card_btn}>
                <svg className={css.icon_card_btn}>
                  <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
            <div className={css.desc_wrapp}>
              <p className={css.card_desc}>Thermal modules</p>
              <p className={css.card_desc}>October 2023</p>
            </div>
          </li>
          <li className={css.list_item}>
            <img
              className={css.card_img}
              src="../../public/image/wind_turbine_in_desert.png"
              alt=""
            />
            <div className={css.title_wrapp}>
              <p className={css.card_title}>
                Kherson city Private Enterprise “HealthyFarm”
              </p>
              <button type="button" className={css.card_btn}>
                <svg className={css.icon_card_btn}>
                  <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
            <div className={css.desc_wrapp}>
              <p className={css.card_desc}>Wind power</p>
              <p className={css.card_desc}>September 2021</p>
            </div>
          </li>
          <li className={css.list_item}>
            <img
              className={css.card_img}
              src="../../public/image/tanks.png"
              alt=""
            />
            <div className={css.title_wrapp}>
              <p className={css.card_title}>
                Zaporizhia city Private Enterprise “Biotech”
              </p>
              <button type="button" className={css.card_btn}>
                <svg className={css.icon_card_btn}>
                  <use href="../../public/svg/icons.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
            <div className={css.desc_wrapp}>
              <p className={css.card_desc}>Mini nuclear stations</p>
              <p className={css.card_desc}>May 2021</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Cases;

import css from "./Faq.module.css";
import indexCss from "../../index.module.css";
import { tabs } from "./tabs";
import HeaderBtn from "../../component/HeaderBtn";

function Faq() {
  return (
    <section id="faq">
      <div className={css.title_wrapp}>
        <h2 className={indexCss.section_title}>Frequently Asked Questions</h2>
      </div>
      <div className={css.list_wrapp}>
        <ul className={css.list}>
          {tabs.map((tab) => (
            <li key={tab.id} className={css.list_item}>
              <p className={css.list_title}>{tab.title}</p>
              <p className={css.list_desc}>{tab.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.question_wrapp}>
        <p className={css.question_text}>
          Didn`t find the answer to your question?
        </p>
        <HeaderBtn>Contact Us</HeaderBtn>
      </div>
    </section>
  );
}

export default Faq;

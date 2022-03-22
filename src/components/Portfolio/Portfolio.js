import "./Portfolio.css";
import Redirect from "../../images/redirect.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__title">Портфолио</h2>

        <a
          href="https://aparinalena.github.io/how-to-learn/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item link-opacity"
        >
          <h2 className="portfolio__item-title">Статичный сайт</h2>
          <img
            src={Redirect}
            className="portfolio__item-arrow"
            alt="Изображение стрелки"
          ></img>
        </a>

        <a
          href="https://aparinalena.github.io/russian-travel/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item link-opacity"
        >
          <h2 className="portfolio__item-title">Адаптивный сайт</h2>
          <img
            src={Redirect}
            className="portfolio__item-arrow"
            alt="Изображение стрелки"
          ></img>
        </a>
        <a
          href="https://mestofront.aparinalena.nomoredomains.work/"
          target="_blank"
          rel="noreferrer"
          className="portfolio__item link-opacity"
        >
          <h2 className="portfolio__item-title">Одностраничное приложение</h2>
          <img
            src={Redirect}
            className="portfolio__item-arrow"
            alt="Изображение стрелки"
          ></img>
        </a>
      </div>
    </section>
  );
}

export default Portfolio;

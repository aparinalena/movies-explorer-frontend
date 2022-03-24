import "./Footer.css";

function Footer() {
  return (
    <section className="footer">
      <div className="footer__container">
        <div className="footer__box">
          <h2 className="footer__box-title">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </h2>
        </div>
        <div className="footer__information">
          <h2 className="footer__year">&#169; 2022</h2>
          <div className="footer__links">
            <a
              href="https://practicum.yandex.ru/web/"
              target="_blank"
              rel="noreferrer"
              className="footer__link link-opacity"
            >
              Яндекс.Практикум
            </a>
            <a
              href="https://github.com/yandex-praktikum"
              target="_blank"
              rel="noreferrer"
              className="footer__link link-opacity"
            >
              Github
            </a>
            {/* <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="footer__link link-opacity"
            >
              Facebook
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

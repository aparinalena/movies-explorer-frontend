/* eslint-disable jsx-a11y/anchor-is-valid */
import "./AboutMe.css";
import Me from "../../images/me-photo.png";

function AboutMe() {
  return (
    <section id="aboutMe" className="aboutMe">
      <div className="aboutMe__container">
        <div className="aboutMe__title-box">
          <h2 className="aboutMe__title">Студент</h2>
        </div>
      </div>

      <div className="aboutMe__description">
        <div className="aboutMe__info">
          <h2 className="aboutMe__name">Виталий</h2>
          <h3 className="aboutMe__speciality">Фронтенд-разработчик, 30 лет</h3>
          <h4 className="aboutMe__history">
          Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
          и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С    
          2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, 
          начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </h4>
          <div className="aboutMe__links">
            <a
              href="https://github.com/aparinalena"
              target="_blank"
              rel="noreferrer"
              className="aboutMe__link link-opacity"
            >
              Github
            </a>
            <a href="https://vk.com/aparinalena" target="_blank" rel="noreferrer" className="aboutMe__link link-opacity">
              Vkontakte
            </a>
            <a href="https://tlgg.ru/aparinalena" target="_blank" rel="noreferrer" className="aboutMe__link link-opacity">
              Telegram
            </a>
            {/* <a
              href=""
              target="_blank"
              rel="noreferrer"
              className="aboutMe__link link-opacity"
            >
              Instagram
            </a> */}
          </div>
        </div>
        <img src={Me} className="aboutMe__foto" alt="Моя фотография"></img>
      </div>
    </section>
  );
}

export default AboutMe;
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="about-project" >
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>

        <ul className="about-project__info">
          <li className="about-project__info-box">
            <h3 className="about-project__info-box-title">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__info-box-subtitle">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="about-project__info-box">
            <h3 className="about-project__info-box-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__info-box-subtitle">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>

        <div className="about-project__weeks">
          <div className="about-project__weeks-backend">
            <div className="about-project__weeks-backend-green">
              <h3 className="about-project__weeks-backend-title">1 неделя</h3>
            </div>
            <p className="about-project__weeks-subtitle">Back-end</p>
          </div>

          <div className="about-project__weeks-frontend">
            <div className="about-project__weeks-frontend-grey">
              <h3 className="about-project__weeks-frontend-title">4 недели</h3>
            </div>
            <p className="about-project__weeks-subtitle">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
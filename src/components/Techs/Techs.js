import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>

        <div className="techs__info">
          <h3 className="techs__info-title">7 технологий</h3>
          <p className="techs__info-subtitle">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>

        <ul className="techs__technologies">
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">HTML</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">CSS</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">JS</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">React</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">Git</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">Express.js</h2>
          </li>
          <li className="techs__technology link-opacity">
            <h2 className="techs__technology-title">mongoDB</h2>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;

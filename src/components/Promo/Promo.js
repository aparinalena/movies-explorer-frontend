import "./Promo.css";
import logo from "../../images/text-logo.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img src={logo} className="promo__logo" alt="Логотип страницы"></img>
    </section>
  );
}

export default Promo;

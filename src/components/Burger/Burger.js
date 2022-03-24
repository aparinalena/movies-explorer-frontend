import "./Burger.css";
import burgerIcon from "../../images/burger-icon.svg";

function Burger(props) {
  const { openBurger } = props;
  return (
    <section className="burger-header">
      <img
        src={burgerIcon}
        onClick={openBurger}
        className="burger-header__button link-opacity"
        alt="Иконка выпадающего меню"
      ></img>
    </section>
  );
}

export default Burger;

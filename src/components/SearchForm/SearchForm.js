import { useState } from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";

function SearchForm() {
  const [isOn, setIsOn] = useState(false);

  function handleOn() {
    setIsOn(true);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__input-container">
            <input
              className="search__input"
              type="text"
              placeholder="Фильм"
              autoComplete="off"
              minLength="2"
              maxLength="200"
              required
            />
            <button className="search__button" type="submit">
              <img src={find} alt="Иконка кнопки поиска" />
            </button>
          </div>
        </form>
        <div className="search__shortfilms">
          <p className="search__shortfilms_title">Короткометражки</p>

          <div
            onClick={handleOn}
            className={`search__shortfilms_button ${isOn ? "_on-green" : ""}`}
          >
            <div
              className={`search__shortfilms_circle ${isOn ? "_on-circle" : ""}`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SearchForm;

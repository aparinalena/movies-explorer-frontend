import { useState } from "react";
import "./SearchForm.css";
import find from "../../images/find.svg";
import Checkbox from "../Checkbox/Checkbox";

function SearchForm(props) {
  const { handleFilter, setSearchValue, tumbler, setTumbler, arrayforSearch, searchValue } = props;

  function handleEdit(evt) {
    setSearchValue(evt.target.value);
  }

  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form" onSubmit={(evt) => {
              evt.preventDefault();
              handleFilter(arrayforSearch);
            }}>
          <div className="search__input-container">
            <input
              className="search__input"
              type="text"
              name="searchValue"
              value={searchValue}
              required
              placeholder="Фильм"
              onChange={handleEdit}
            />
            <button className="search__button" type="submit">
              <img src={find} alt="Иконка кнопки поиска" />
            </button>
          </div>
        </form>
        <div className="search__shortfilms">
          <p className="search__shortfilms_title">Короткометражки</p>
          <Checkbox tumbler={tumbler} setTumbler={setTumbler} />
          {/* <div
            onClick={handleOn}
            className={`search__shortfilms_button ${isOn ? "_on-green" : ""}`}
          >
            <div
              className={`search__shortfilms_circle ${isOn ? "_on-circle" : ""}`}
            ></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default SearchForm;

import React from "react";
import "../MoviesCardsList/MoviesCardsList.css";
import MoviesCard from "../MoviesCard/MoviesCard.js";

function SavedMoviesCardsList() {
  return (
    <section className="movies-cardlist">
      <section className="movies-cardlist__section">
        <ul className="movies-cards__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </section>
    </section>
  );
}

export default SavedMoviesCardsList;

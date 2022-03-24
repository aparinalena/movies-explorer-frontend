import "./MoviesCardsList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardsList() {
  return (
    <section className="movies-cardlist">
      <section className="movies-cardlist__section">
        <ul className="movies-cards__list">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </ul>
      </section>
    </section>
  );
}

export default MoviesCardsList;

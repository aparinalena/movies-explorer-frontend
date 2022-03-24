import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import card from "../../images/pic-1.png";
import SavedButton from "../../images/saved-film_button.svg";
import SaveMovieButton from "../../images/save_button.svg";
import RemoveSavedMovie from "../../images/delete-film_button.svg";

function MoviesCard() {
  let SavedMovie;
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();
  SavedMovie = pathname === "/saved-movies";

  function handleSave() {
    setIsSaved(true);
  }

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">В погоне за Бенкси</h3>
          <p className="movies-card__duration">1ч 17м</p>
        </div>
        <img
          className="movies-card__image"
          src={card}
          alt="Кадр из фильма В погоне за Бенкси"
        />

        {SavedMovie ? (
          <button className="movies-card__button-delete link-opacity">
            <img
              src={RemoveSavedMovie}
              alt="Кнопка удаления сохранённого фильма"
            />
          </button>
        ) : (
          <>
            {isSaved ? (
              <button className="movies-card__button-saved">
                <img src={SavedButton} alt="Кнопка Фильм сохранен" />
              </button>
            ) : (
              <button
                className="movies-card__button link-opacity"
                onClick={handleSave}
              >
                <img src={SaveMovieButton} alt="Кнопка Сохранить" />
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCard;

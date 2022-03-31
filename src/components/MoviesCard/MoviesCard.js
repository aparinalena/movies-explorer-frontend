import React from "react";
import "./MoviesCard.css";
import SavedButton from "../../images/saved-film_button.svg";
import SaveMovieButton from "../../images/save_button.svg";
import RemoveSavedMovie from "../../images/delete-film_button.svg";

function MoviesCard(props) {
  const { card, handleSaveFilm, handleDeleteFilm, saveCards } = props;
  const duration = prepareDuration(card.duration);
  const pathName = window.location.pathname;
  const imgUrl =
    pathName === "/movies"
      ? "https://api.nomoreparties.co" + card.image.url
      : card.image;
  const [isLike, setIsLike] = React.useState(false);

  function prepareDuration(minutes) {
    if (minutes > 60) {
      return ((minutes / 60) | 0) + "ч " + (minutes % 60) + "м";
    } else if (minutes === 60) {
      return ((minutes / 60) | 0) + "ч ";
    } else {
      return minutes + " мин";
    }
  }

  React.useEffect(() => {
    saveCards.map((saveCard) => {
      if (saveCard.movieId === card.id) {
        setIsLike(true);
      }
    });
  }, [saveCards]);

  return (
    <section className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__info">
          <h3 className="movies-card__title">{card.nameRU}</h3>
          <p className="movies-card__duration">{duration}</p>
        </div>
        <a href={card.trailerLink} target="_blank" rel="noreferrer">
          <img
            className="movies-card__image"
            src={imgUrl}
            alt="Кадр из фильма"
          ></img>
        </a>
        {pathName === "/saved-movies" ? (
          <button
            className="movies-card__button-delete link-opacity"
            onClick={() => {
              handleDeleteFilm(card);
            }}
          >
            <img
              src={RemoveSavedMovie}
              alt="Кнопка удаления сохранённого фильма"
            />
          </button>
        ) : (
          <button
            className={`movies-card__button ${isLike && "movies-card__button-saved"} link-opacity`}
            onClick={() => {
              if (isLike) {
                handleDeleteFilm(saveCards.find((saveCard) => saveCard.movieId === card.id));
              } else {
                handleSaveFilm(card);
              }
              setIsLike(!isLike);
            }}
          >
            <img src={isLike ? SavedButton : SaveMovieButton} alt="Кнопка Сохранить" />
          </button>
        )}
      </div>
    </section>
  );
}

export default MoviesCard;

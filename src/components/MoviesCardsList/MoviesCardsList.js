import "./MoviesCardsList.css";
import More from "../More/More";
import { SHORT } from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardsList(props) {
  const {
    tumbler,
    filterCards,
    saveCards,
    handleSaveFilm,
    handleDeleteFilm,
    amountShowCards,
    setAmountShowCards,
    addShowCards,
  } = props;

  // eslint-disable-next-line array-callback-return
  let tumblerFilteredArray = filterCards.filter((card) => {
    if (!tumbler || (tumbler && card.duration <= SHORT)) {
      return card;
    }
  });

  return (
    <section className="movies-cardlist">
      {tumblerFilteredArray.length === 0 && (
        <p className="movies-cards__list-empty">НИЧЕГО НЕ НАЙДЕНО</p>
      )}
      <section className="movies-cardlist__section">
        <ul className="movies-cards__list">
          {tumblerFilteredArray.slice(0, amountShowCards).map((card) => {
            return (
              <MoviesCard
                key={card.id}
                card={card}
                handleSaveFilm={handleSaveFilm}
                handleDeleteFilm={handleDeleteFilm}
                saveCards={saveCards}
              />
            );
          })}
        </ul>
      </section>
      {amountShowCards <= tumblerFilteredArray.length && (
        <More
          setAmountShowCards={setAmountShowCards}
          amountShowCards={amountShowCards}
          addShowCards={addShowCards}
        />
      )}
    </section>
  );
}

export default MoviesCardsList;

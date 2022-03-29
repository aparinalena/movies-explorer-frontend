import Header from "../Header/Header";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardsList from "../MoviesCardsList/MoviesCardsList";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  const {
    handleFilter,
    setMoviesInputValue,
    handleDeleteFilm,
    handleSaveFilm,
    setAmountShowCards,
    setTumbler,
    tumbler,
    filterCards,
    amountShowCards,
    addShowCards,
    saveCards,
    loggedIn,
    isPreloader,
    cards,
    searchValue,
  } = props;

  return (
    <>
      <div>
        <section className="movies">
          <Header loggedIn={loggedIn} />
          {isPreloader && <Preloader />}
          <SearchForm
            handleFilter={handleFilter}
            setSearchValue={setMoviesInputValue}
            tumbler={tumbler}
            setTumbler={setTumbler}
            arrayforSearch={cards}
            searchValue={searchValue}
          />
          {filterCards && (
            <MoviesCardsList
              tumbler={tumbler}
              filterCards={filterCards}
              saveCards={saveCards}
              handleSaveFilm={handleSaveFilm}
              handleDeleteFilm={handleDeleteFilm}
              amountShowCards={amountShowCards}
              setAmountShowCards={setAmountShowCards}
              addShowCards={addShowCards}
            />
          )}
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Movies;

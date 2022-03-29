import Header from "../Header/Header";
import SearchForm from "./../SearchForm/SearchForm";
import MoviesCardsList from "../MoviesCardsList/MoviesCardsList";import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
  const {
    handleFilter,
    setSavedMoviesInputValue,
    handleDeleteFilm,
    handleSaveFilm,
    setTumbler,
    filterSavedCards,
    tumbler,
    addShowCards,
    saveCards,
    loggedIn,
    isPreloader,
    searchValue,
    successSearch,
  } = props;

  return (
    <>
      <div>
        <section className="movies">
          <Header loggedIn={loggedIn} />
          {isPreloader && <Preloader />}
          <SearchForm
            handleFilter={handleFilter}
            setSearchValue={setSavedMoviesInputValue}
            tumbler={tumbler}
            setTumbler={setTumbler}
            arrayforSearch={saveCards}
            searchValue={searchValue}
          />
          {saveCards && (
            <MoviesCardsList
              tumbler={tumbler}
              filterCards={successSearch ? filterSavedCards : saveCards}
              saveCards={saveCards}
              handleSaveFilm={handleSaveFilm}
              handleDeleteFilm={handleDeleteFilm}
              addShowCards={addShowCards}
            />
          )}
          <Footer />
        </section>
      </div>
    </>
  );
}

export default SavedMovies;

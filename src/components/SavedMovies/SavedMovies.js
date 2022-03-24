import Header from "../Header/Header";
import SearchForm from "./../SearchForm/SearchForm";
import SavedMoviesCardsList from "./../SavedMoviesCardsList/SavedMoviesCardsList";
import Footer from "../Footer/Footer";

function SavedMovies(props) {
  const { loggedIn } = props;

  return (
    <>
      <div>
        <section className="movies">
          <Header loggedIn={loggedIn} />
          <SearchForm />
          <SavedMoviesCardsList />
          <Footer />
        </section>
      </div>
    </>
  );
}

export default SavedMovies;

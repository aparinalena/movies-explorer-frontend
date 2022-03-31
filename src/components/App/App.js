import React from "react";
import { CurrentUserContext } from "../../contexts/Context";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import * as MainApi from "../../utils/MainApi";
import api from "../../utils/MoviesApi";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error from "../Error/Error";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import {
  LARGE,
  AmountShowCardsAtLarge,
  AmountShowCardsAtMedium,
  AddShowCardsAtLarge,
  AddShowCardsAtMedium,
} from "../../utils/constants";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState({});
  const [preloader, setPreloader] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState("");
  const [cards, setCards] = React.useState([]);
  const [saveCards, setSaveCards] = React.useState([]);
  const [filterCards, setFilterCards] = React.useState([]);
  const [filterSavedCards, setFilterSavedCards] = React.useState([]);
  const [editProfile, setEditProfile] = React.useState(false);
  const [moviesInputValue, setMoviesInputValue] = React.useState("");
  const [savedMoviesInputValue, setSavedMoviesInputValue] = React.useState("");
  const [blockInput, setBlockInput] = React.useState(false);
  const [moviesTumbler, setMoviesTumbler] = React.useState(false);
  const [savedMoviesTumbler, setSavedMoviesTumbler] = React.useState(false);
  const [successSearch, setSuccessSearch] = React.useState(false);
  const [message, setMessage] = React.useState(null);

  const [amountShowCards, setAmountShowCards] = React.useState(
    window.innerWidth > LARGE ? AmountShowCardsAtLarge : AmountShowCardsAtMedium
  );

  const [addShowCards, setAddShowCards] = React.useState(
    window.innerWidth > LARGE ? AddShowCardsAtLarge : AddShowCardsAtMedium
  );

  window.onresize = () => {
    if (window.innerWidth > LARGE) {
      setAddShowCards(AddShowCardsAtLarge);
    } else {
      setAddShowCards(AddShowCardsAtMedium);
    }
  };

  React.useEffect(() => {
    setFilterCards(JSON.parse(localStorage.getItem("filterCards")));
    setMoviesTumbler(JSON.parse(localStorage.getItem("moviesTumbler")));
    setSavedMoviesTumbler(
      JSON.parse(localStorage.getItem("savedMoviesTumbler"))
    );
    setMoviesInputValue(JSON.parse(localStorage.getItem("moviesInputValue")));
  }, []);

  React.useEffect(() => {
    savedMoviesInputValue.length === 0 && setSuccessSearch(false);
  }, [savedMoviesInputValue]);

  React.useEffect(() => {
    localStorage.setItem("moviesTumbler", JSON.stringify(moviesTumbler));
  }, [moviesTumbler]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo(localStorage.token)
        .then(() => {
          setLoggedIn(true);
        })
        .catch((err) => {
          setLoggedIn(false);
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    if (loggedIn) {
      MainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loggedIn]);

  React.useEffect(() => {
    MainApi.getFilms()
      .then((cards) => {
        setSaveCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    api
      .getListCard()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function showMessage(message) {
    setMessage(message);
    setTimeout(() => setMessage(""), 10000);
  }

  function handleLoggedOut(evt) {
    evt.preventDefault();
    localStorage.removeItem("filterCards");
    localStorage.removeItem("moviesTumbler");
    localStorage.removeItem("savedMoviesTumbler");
    localStorage.removeItem("moviesInputValue");
    localStorage.removeItem("savedMoviesInputValue");
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/", { replace: false });
  }

  function handleSaveFilm(card) {
    setPreloader(true);
    setBlockInput(true);
    MainApi.saveFilm(card)
      .then((res) => {
        setSaveCards([...saveCards, res]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
        setBlockInput(false);
      });
  }

  function handleDeleteFilm(card) {
    setPreloader(true);
    setBlockInput(true);
    MainApi.deleteFilm(card)
      .then(() => {
        setSaveCards(saveCards.filter((saveCard) => saveCard._id !== card._id));
        setFilterSavedCards(
          saveCards.filter((saveCard) => saveCard._id !== card._id)
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setPreloader(false);
        setBlockInput(false);
      });
  }

  function registration(name, email, password) {
    setBlockInput(true);
    MainApi.register(name, email, password)
      .then((res) => {
        if (email === res.email) {
          authorization(email, password);
          navigate("/movies", { replace: false });
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => {
        setBlockInput(false);
      });
  }

  function authorization(email, password) {
    setBlockInput(true);
    MainApi.authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          setLoggedIn(true);
          navigate("/movies", { replace: false });
        }
      })
      .catch((err) => {
        setErrorMessage(err.message);
      })
      .finally(() => {
        setBlockInput(false);
      });
  }

  function handleUpdateUser(name, email) {
    setBlockInput(true);
    MainApi.patchUserInfo(name, email)
      .then((response) => {
        setCurrentUser(response);
        setErrorMessage("");
        setEditProfile(false);
        showMessage("Изменения сохранены");
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setEditProfile(true);
      })
      .finally(() => {
        setBlockInput(false);
      });
  }

  function handleMoviesFilter(arrayforSearch) {
    // eslint-disable-next-line array-callback-return
    const newArray = arrayforSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(moviesInputValue)) {
        return card;
      }
    });
    localStorage.setItem("filterCards", JSON.stringify(newArray));
    setFilterCards(JSON.parse(localStorage.getItem("filterCards")));
    localStorage.setItem("moviesInputValue", JSON.stringify(moviesInputValue));
    localStorage.setItem("moviesTumbler", JSON.stringify(moviesTumbler));
  }

  function handleSavedMoviesFilter(arrayforSearch) {
    // eslint-disable-next-line array-callback-return
    const newArray = arrayforSearch.filter((card) => {
      if (card.nameRU.toLowerCase().includes(savedMoviesInputValue)) {
        return card;
      }
    });
    savedMoviesInputValue.length === 0
      ? setSuccessSearch(false)
      : setSuccessSearch(true);
    setFilterSavedCards(newArray);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <section className="root">
        <Routes>
          <Route path="/" element={<Main loggedIn={loggedIn} />} />
          {loggedIn ? (
            <Route path="/signin" element={<Navigate replace to="/movies" />} />
          ) : (
            <Route
              exact
              path="/signin"
              element={
                <Login
                  errorMessage={errorMessage}
                  blockInput={blockInput}
                  handleSubmit={authorization}
                />
              }
            />
          )}
          {loggedIn ? (
            <Route path="/signup" element={<Navigate replace to="/movies" />} />
          ) : (
            <Route
              exact
              path="/signup"
              element={
                <Register
                  errorMessage={errorMessage}
                  blockInput={blockInput}
                  handleSubmit={registration}
                />
              }
            />
          )}
          <Route
            path="/profile"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  editProfile={editProfile}
                  setEditProfile={setEditProfile}
                  loggedIn={loggedIn}
                  blockInput={blockInput}
                  errorMessage={errorMessage}
                  handleLoggedOut={handleLoggedOut}
                  handleUpdateUser={handleUpdateUser}
                  message={message}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies
                  handleFilter={handleMoviesFilter}
                  setMoviesInputValue={setMoviesInputValue}
                  handleDeleteFilm={handleDeleteFilm}
                  handleSaveFilm={handleSaveFilm}
                  setAmountShowCards={setAmountShowCards}
                  setTumbler={setMoviesTumbler}
                  tumbler={moviesTumbler}
                  filterCards={filterCards}
                  amountShowCards={amountShowCards}
                  addShowCards={addShowCards}
                  saveCards={saveCards}
                  loggedIn={loggedIn}
                  isPreloader={preloader}
                  cards={cards}
                  searchValue={moviesInputValue}
                />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <SavedMovies
                  handleFilter={handleSavedMoviesFilter}
                  setSavedMoviesInputValue={setSavedMoviesInputValue}
                  handleDeleteFilm={handleDeleteFilm}
                  handleSaveFilm={handleSaveFilm}
                  setAmountShowCards={setAmountShowCards}
                  setTumbler={setSavedMoviesTumbler}
                  filterSavedCards={filterSavedCards}
                  tumbler={savedMoviesTumbler}
                  amountShowCards={amountShowCards}
                  addShowCards={addShowCards}
                  saveCards={saveCards}
                  loggedIn={loggedIn}
                  isPreloader={preloader}
                  searchValue={savedMoviesInputValue}
                  successSearch={successSearch}
                />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
    </CurrentUserContext.Provider>
  );
}

export default App;

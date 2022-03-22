import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Error from "../Error/Error";

function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  function handleloggedInClick(evt) {
    evt.preventDefault();
    if (loggedIn === true ? setLoggedIn(false) : setLoggedIn(true));

    navigate("/", { replace: false });
  }

  return (
    <section className="root">
      <Routes>
        <Route path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/signin"
          element={<Login handleloggedInClick={handleloggedInClick} />}
        />
        <Route
          path="/profile"
          element={
            <Profile
              loggedIn={loggedIn}
              handleloggedInClick={handleloggedInClick}
            />
          }
        />
        <Route path="/movies" element={<Movies loggedIn={loggedIn} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies loggedIn={loggedIn} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
}

export default App;

import React from "react";
import { CurrentUserContext } from "../../contexts/Context";
import "./Profile.css";
import Header from "../Header/Header";
import { Validation } from "../../utils/Validation";

function Profile(props) {
  const {
    editProfile,
    setEditProfile,
    loggedIn,
    blockInput,
    errorMessage,
    handleLoggedOut,
    handleUpdateUser,
  } = props;

  const { values, handleChange, errors, isValid } = Validation();
  const currentUser = React.useContext(CurrentUserContext);

  function handleEdit(e) {
    e.preventDefault();
    setEditProfile(true);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    handleUpdateUser(
      values.name ? values.name : currentUser.name,
      values.email ? values.email : currentUser.email
    );
  }

  const [hasChanges, setHasChanges] = React.useState(false);
  React.useEffect(() => {
    setHasChanges(
      values.name !== currentUser.name || values.email !== currentUser.email
    );
  }, [values.name, values.email, currentUser.name, currentUser.email]);

  return (
    <>
      <Header loggedIn={loggedIn} />
      <section className="profile">
        <form className="profile__form">
          <h2 className="profile__title">Привет, {currentUser.name}!</h2>
          <div className="profile__container">
            <span
              className={`profile__error-text ${
                !errors.name && `profile__error-text_type_disabled`
              }`}
            >
              {errors.name ? errors.name : "⁣"}
            </span>
            <div className="profile__form-element">
              <p className="profile__text">Имя</p>
              <input
                className={`profile__input ${
                  errors.name && `profile__input_type_error`
                }`}
                type="text"
                name="name"
                minLength="2"
                maxLength="30"
                autoComplete="off"
                onChange={handleChange}
                defaultValue={currentUser.name}
                disabled={(!editProfile || blockInput) && "disabled"}
                required
              />
            </div>
            <div className="profile__form-element">
              <p className="profile__text">Email</p>
              <input
                className={`profile__input ${
                  errors.email && `profile__input_type_error`
                }`}
                type="email"
                name="email"
                minLength="2"
                maxLength="30"
                onChange={handleChange}
                defaultValue={currentUser.email}
                disabled={(!editProfile || blockInput) && "disabled"}
                pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
                required
              />
            </div>
            <span
              className={`profile__error-text ${
                !errors.email && `profile__error-text_type_disabled`
              }`}
            >
              {errors.email ? errors.email : "⁣"}
            </span>
          </div>
          <div className="profile__exit">
            <span className="profile__success">{props.message}</span>
            {!editProfile ? (
              <button
                type="submit"
                className="profile__button link-opacity"
                onClick={handleEdit}
              >
                Редактировать
              </button>
            ) : (
              <div className="profile__submit">
                {errorMessage && (
                  <p className="profile__submit-error">{errorMessage}</p>
                )}
                <button
                  onClick={handleSubmit}
                  type="submit"
                  disabled={!hasChanges || !isValid}
                  className={`profile__submit-button
          ${
            !isValid || !hasChanges
              ? "profile__submit-button_type_disable"
              : "link-opacity"
          }`}
                >
                  Сохранить
                </button>
              </div>
            )}
            <button
              className="profile__exit-button link-opacity"
              onClick={handleLoggedOut}
            >
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Profile;

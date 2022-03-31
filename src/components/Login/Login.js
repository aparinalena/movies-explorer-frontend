import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import { Validation } from "../../utils/Validation";

function Login(props) {
  const { errorMessage, handleSubmit, blockInput } = props;
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  function Submit(evt) {
    evt.preventDefault();
    handleSubmit(values.email, values.password);
  }

  React.useEffect(() => {
    resetForm({});
  }, [resetForm]);

  return (
    <section className="login">
      <form className="login__form" onSubmit={Submit}>
        <div className="login__header">
          <Link className="login__link" to="/">
            <img
              src={logo}
              className="login__logo link-opacity"
              alt="логотип"
            ></img>
          </Link>
          <h2 className="login__title">Рады видеть!</h2>
        </div>
        <div className="login__container">
          <p className="login__text">E-mail</p>
          <input
            className={`login__input ${
              errors.email && `login__input_type_error`
            }`}
            type="email"
            name="email"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            onChange={handleChange}
            disabled={blockInput && "disabled"}
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
            required
          />
          <span
            className={`login__error-text ${
              !errors.email && `login__error-text_type_disabled`
            }`}
          >
            {errors.email ? errors.email : ""}
          </span>
          <p className="login__text">Пароль</p>
          <input
            className={`login__input ${
              errors.password && `login__input_type_error`
            }`}
            type="password"
            name="password"
            minLength="8"
            maxLength="30"
            onChange={handleChange}
            disabled={blockInput && "disabled"}
            required
          />
          <span
            className={`login__error-text ${
              !errors.password && `login__error-text_type_disabled`
            }`}
          >
            {errors.password ? errors.password : "⁣"}
          </span>
        </div>
        <div className="login__submit">
          {errorMessage && (
            <p className="login__submit-error">{errorMessage}</p>
          )}
          <button
            type="submit"
            className={`login__submit-button ${
              !isValid ? "login__submit-button_type_disable" : "link-opacity"
            }`}
          >
            Войти
          </button>
          <h2 className="login__redirect">
            Ещё не зарегистрированы?
            <Link to="/signup" className="login__link link-opacity">
              Регистрация
            </Link>
          </h2>
        </div>
      </form>
    </section>
  );
}

export default Login;

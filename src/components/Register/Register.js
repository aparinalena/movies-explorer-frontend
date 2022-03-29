import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import { Validation } from "../../utils/Validation";

function Register(props) {
  const { errorMessage, handleSubmit, blockInput } = props;
  const { values, handleChange, errors, isValid, resetForm } = Validation();

  function Submit(evt) {
    evt.preventDefault();
    handleSubmit(values.name, values.email, values.password);
  }

  React.useEffect(() => {
    resetForm({});
  }, [resetForm]);

  return (
    <section className="register">
      <form className="register__form" onSubmit={Submit}>
        <div className="register__header">
          <Link className="register__link" to="/">
            <img
              src={logo}
              className="register__logo link-opacity"
              alt="логотип"
            ></img>
          </Link>
          <h2 className="register__title">Добро пожаловать!</h2>
        </div>
        <div className="register__container">
          <p className="register__text">Имя</p>
          <input
            className={`register__input ${
              errors.name && `register__input_type_error`
            }`}
            type="name"
            name="name"
            minLength="2"
            maxLength="30"
            autoComplete="off"
            onChange={handleChange}
            disabled={blockInput && "disabled"}
            required
          />
          <span
            className={`register__error-text ${
              !errors.name && `register__error-text_type_disabled`
            }`}
          >
            {errors.name ? errors.name : "⁣"}
          </span>
          <p className="register__text">E-mail</p>
          <input
            className={`register__input ${
              errors.email && `register__input_type_error`
            }`}
            type="email"
            name="email"
            minLength="2"
            maxLength="30"
            onChange={handleChange}
            disabled={blockInput && "disabled"}
            required
          />
          <span
            className={`register__error-text ${
              !errors.email && `register__error-text_type_disabled`
            }`}
          >
            {errors.email ? errors.email : "⁣"}
          </span>
          <p className="register__text">Пароль</p>
          <input
            className={`register__input ${
              errors.password && `register__input_type_error`
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
            className={`register__error-text ${
              !errors.password && `register__error-text_type_disabled`
            }`}
          >
            {errors.password ? errors.password : "⁣"}
          </span>
        </div>
        <div className="register__submit">
          {errorMessage && (
            <p className="register__submit-error">{errorMessage}</p>
          )}
          <button
            type="submit"
            className={`register__submit-button ${
              !isValid ? "register__submit-button_type_disable" : "link-opacity"
            }`}
          >
            Зарегистрироваться
          </button>
          <h2 className="register__redirect">
            Уже зарегистрированы?
            <Link to="/signin" className="register__link link-opacity">
              Войти
            </Link>
          </h2>
        </div>
      </form>
    </section>
  );
}

export default Register;

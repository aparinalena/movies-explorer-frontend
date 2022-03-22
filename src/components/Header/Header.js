import "./Header.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header(props) {
  const { loggedIn } = props;

  return (
    <section className={`header ${loggedIn & (window.location.pathname !== "/") ? "header_theme_dark" : ""} `}>
      <nav className="header__container">
        <Link className="header__link" to="/">
          <img src={logo} className="header__logo link-opacity" alt="логотип"></img>
        </Link>

        {loggedIn ? (<Navigation />) : (
          <>
            <div className="header__links">
              <Link className="header__link" to="/signup">
                <h2 className="header__link-title link-opacity">Регистрация</h2>
              </Link>
              <Link className="header__link" to="/signin">
                <button className="header__link-button link-opacity">Войти</button>
              </Link>
            </div>
          </>
         )
        }
      </nav>
    </section>
  );
}

export default Header;
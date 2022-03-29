import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";
import Burger from "../Burger/Burger";
import SlideMenu from "../SlideMenu/SlideMenu";
import { MEDIUM } from "../../utils/constants";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= MEDIUM);

  const setActive = ({ isActive }) =>
    isActive
      ? "navigation__link navigation__link_active link-opacity"
      : "navigation__link link-opacity";

  const updateWidth = React.useCallback(() => {
    const newWidth = window.innerWidth <= MEDIUM;
    if (newWidth !== isMobile) {
      setIsMobile(newWidth);
    }
  }, [isMobile]);

  React.useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  function closeAllPopups() {
    setIsOpen(false);
  }

  function openBurger() {
    setIsOpen(true);
  }

  return (
    <>
      {isMobile ? (
        <>
          <Burger openBurger={openBurger} />
          <SlideMenu isOpen={isOpen} onClose={closeAllPopups} />
        </>
      ) : (
        <section className="navigation">
          <div className="navigation__links">
            <NavLink to="/movies" className={setActive}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={setActive}>
              Сохраненные фильмы{" "}
            </NavLink>
          </div>
          <NavLink to="/profile" className="navigation__profile link-opacity">
            <img src={profile} alt="Изображение кнопки Аккаунт"></img>
          </NavLink>
        </section>
      )}
    </>
  );
}

export default Navigation;

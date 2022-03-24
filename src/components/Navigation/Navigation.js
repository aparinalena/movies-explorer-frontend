import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";
import Burger from "../Burger/Burger";
import SlideMenu from "../SlideMenu/SlideMenu";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const setActive = ({ isActive }) =>
    isActive
      ? "navigation__link navigation__link_active link-opacity"
      : "navigation__link link-opacity";

  const updateWidth = useCallback(() => {
    const newWidth = window.innerWidth <= 768;
    if (newWidth !== isMobile) {
      setIsMobile(newWidth);
    }
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [updateWidth]);

  function openBurger() {
    setIsOpen(true);
  }

  function closeAllPopups() {
    setIsOpen(false);
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

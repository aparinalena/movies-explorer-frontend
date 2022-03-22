import "./Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h3 className="error__title">404</h3>
      <p className="error__message">Страница не найдена</p>
      <Link to="/" className="error__link link-opacity">
        Назад
      </Link>
    </div>
  );
}

export default Error;

import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

import Button from "../Button/Button";

function PageNotFound() {
  return (
    <section className="not-found">
      <div className="not-found__icon" />
      <h2 className="not-found__title">
        Ошибка 404!
      </h2>
      <h3 className="not-found__subtitle">
        Такая страница не существует.
      </h3>
      <Link to="/">
        <Button
          className="not-found__button"
          text="Вернуться на главную"
          type="button"
        />
      </Link>
    </section>
  );
}

export default PageNotFound;

import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import image1 from "../../images/card-1.png";
import image2 from "../../images/card-2.png";
import image3 from "../../images/card-3.png";

import image4 from "../../images/saved-card-1.png";
import image5 from "../../images/saved-card-2.png";
import image6 from "../../images/saved-card-3.png";

function NewsCardList({ card }) {
  return (
    <ul className="cards">
      <li className="cards__item">
        <NewsCard
          keyword=""
          image={image1}
          link="https://lenta.ru/"
          date="2 августа, 2019"
          title="Национальное достояние – парки"
          text="В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе."
          source="Лента.ру"
          savedCard={card}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword=""
          image={image2}
          link="https://meduza.io/"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Медуза"
          savedCard={card}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword=""
          image={image3}
          link="https://ria.ru/"
          date="2 августа, 2019"
          title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где знаменитый фотограф снимает первозданные леса России"
          source="Риа"
          savedCard={card}
        />
      </li>
    </ul>
  );
}

function SavedNewsCardList({ savedCard }) {
  return (
    <ul className="cards">
      <li className="cards__item">
        <NewsCard
          keyword="Природа"
          image={image4}
          link="https://clck.ru/CVMzQ"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Дзен"
          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword="Природа"
          image={image5}
          link="https://afisha.ru/"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Афиша"
          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword="Тайга"
          image={image6}
          link="https://zona.media/"
          date="2 августа, 2019"
          title="«Первозданная тайга»: новый фотопроект Игоря Шпиленка"
          text="Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где знаменитый фотограф снимает первозданные леса России"
          source="Медиазона"
          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword="Природа"
          image={image4}
          link="https://clck.ru/CVMzQ"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Дзен"
          savedCard={savedCard}
        />
      </li>
      <li className="cards__item">
        <NewsCard
          keyword="Фотография"
          image={image5}
          link="https://afisha.ru/"
          date="2 августа, 2019"
          title="Лесные огоньки: история одной фотографии"
          text="Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного
          из местных чудес природы."
          source="Афиша"
          savedCard={savedCard}
        />
      </li>
    </ul>
  );
}

export { NewsCardList, SavedNewsCardList };
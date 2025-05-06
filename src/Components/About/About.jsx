import React, { useEffect } from "react";
import "./About.scss";
import { useNavigate } from "react-router";
import PhotoSlider from "./PhotoSlider/PhotoSlider";
import img1 from "../../img/1.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";

const images = [img1, img2, img3];

const About = () => {

  const navigate = useNavigate();
  const HandleClick = () => {
    navigate("/");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="about">
      <section className="about__us">
        <h2>О нас</h2>
        <p>
          <strong>Vdihay Lounge</strong> — это пространство, где каждый вдох
          наполняет вкусом, а каждый момент — атмосферой уюта и стиля. Мы
          создали не просто кальянную, а место притяжения для тех, кто ценит
          качественный отдых, эстетичный интерьер и искреннее гостеприимство.
        </p>
      </section>

      <section className="about__features">
        <h2>Что вас ждёт</h2>
        <ul>
          <li>
            <strong>💨 Премиальные кальяны:</strong> от классики до эксклюзивных
            миксов
          </li>
          <li>
            <strong>🛋 Атмосферные залы:</strong> уют для встреч, свиданий и
            душевных разговоров
          </li>
          <li>
            <strong>🎮 VIP-комната:</strong> с PlayStation и настолками для
            яркого отдыха
          </li>
          <li>
            <strong>🍵 Авторские напитки:</strong> чаи и лимонады, дополняющие
            кальян
          </li>
          <li>
            <strong>🤝 Забота:</strong> внимательная команда, как старым друзьям
          </li>
        </ul>
        <p>
          <em>
            У нас нет алкоголя — только чистый отдых, ароматный дым и душевная
            атмосфера.
          </em>
        </p>
      </section>

      <section className="about__gallery">
        <h2>Галерея</h2>
        {/* <div className="gallery__images">
          <img src="https://example.com/image1.jpg" alt="Кальянный зал" />
          <img src="https://example.com/image2.jpg" alt="VIP-зона с PlayStation" />
          <img src="https://example.com/image3.jpg" alt="Авторские напитки" />
        </div> */}
        <PhotoSlider images={images}/>
      </section>

      <section className="about__cta">
        <p>
          Приходите вдохнуть больше, чем просто дым.{" "}
          <strong>Vdihay Lounge</strong> ждёт вас.
        </p>
        <button className="about__button" onClick={HandleClick}>
          Забронировать столик
        </button>
      </section>
    </main>
  );
};

export default About;

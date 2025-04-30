import { useEffect } from "react";
import './Menu.scss'

// Компонент для отображения раздела
const Section = ({ title, children }) => (
  <section className="menu__section">
    <h2 className="menu__section-title">{title}</h2>
    <div className="menu__cards">
      {children}
    </div>
  </section>
);

// Компонент для карточки
const Card = ({ children }) => (
  <div className="menu__card">
    <div className="menu__card-content">{children}</div>
  </div>
);

export default function MenuLanding() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="menu">
      <div className="menu__background">
        <div className="menu__background-item menu__background-item--blue"></div>
        <div className="menu__background-item menu__background-item--lightblue"></div>
      </div>

      <div className="menu__content">

        <Section title="Кальяны">
          <Card>
            <p>Только топовые табаки — от классики до фруктов, пряностей и цитруса.</p>
          </Card>
          <Card>
            <p>Собери свой микс — подскажем и настроим под твоё настроение.</p>
          </Card>
          <Card>
            <p>Крепость на выбор — от лёгкого до насыщенного.</p>
          </Card>
          <Card>
            <p>Стоимость — от 700₽.</p>
          </Card>
        </Section>

        <Section title="Напитки">
          <Card>
            <p>Чай с характером — чёрный, зелёный, фруктовый и авторский.</p>
          </Card>
          <Card>
            <p>Лимонады ручной работы — бодрящие, с натуральными ингредиентами.</p>
          </Card>
          <Card>
            <p>К чаю мы предлагаем уютные сладости — для особого настроения.</p>
          </Card>
        </Section>

        <Section title="Рекомендуем попробовать">
          <Card>
            <p>Микс «Тропическая ночь» — ананас, маракуйя, лёгкая мята.</p>
          </Card>
          <Card>
            <p>Авторский чай «VDIHAY» — чёрный чай с апельсином, корицей и мёдом.</p>
          </Card>
          <Card>
            <p>Лимонад «Киви-мята» — любимец гостей.</p>
          </Card>
        </Section>

        <Section title="Атмосфера">
          <Card>
            <p>Настолки — от лёгких до стратегических, для компании любого настроя.</p>
          </Card>
          <Card>
            <p>Wi-Fi — на случай, если захочешь выйти в онлайн.</p>
          </Card>
        </Section>
      </div>
    </main>
  );
}

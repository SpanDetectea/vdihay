import { useEffect } from "react";
import "./Menu.scss";
import { sections } from "../../javaScript/Data";
import Card from "./Card/Card";

const Section = ({ title, children }) => (
  <section className="menu__section">
    <h2 className="menu__section-title">{title}</h2>
    <div className="menu__cards">{children}</div>
  </section>
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
        {sections.map((cards) => (
          <Section title={cards.title}>
            {cards.cards.map((card) => (
              <Card>
                <p>
                  {card}
                </p>
              </Card>
            ))}
          </Section>
        ))}
      </div>
    </main>
  );
}

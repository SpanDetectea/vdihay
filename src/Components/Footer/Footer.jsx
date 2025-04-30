import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section">
        <h3 className="footer__title">Контакты</h3>
        <p>📍 г. Петрозаводск, ул. Кирова, 19</p>
        <p>📞 +7 (921) 228-09-35</p>
        <p>🕒 Ежедневно с 11:00 до 02:00</p>
      </div>

      <div className="footer__section">
        <h3 className="footer__title">Мы в соцсетях</h3>
        <p>
          <a href="t.me/vdihaylounge" className="footer-a">
            Telegram
          </a>
          /
          <a href="https://vk.com/vdihaylounge" className="footer-a">
            VK
          </a>
        </p>
      </div>

      <div className="footer__section">
        <p className="footer__dev">
          Сайт разработан с любовью к дыму и коду © 2025
          <br />
          <span className="footer__dev-accent">[Роман Пашкевич]</span>
          <br />
          <a
            href="https://github.com/SpanDetectea"
            target="_blank"
            rel="noreferrer"
            className="footer-a"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a href="mailto:spandetectea@gmail.com" target="_blank" rel="noreferrer" className="footer-a">
            Email
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

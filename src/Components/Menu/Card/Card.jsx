import './Card.scss'
const Card = ({ children }) => (
  <div className="menu__card">
    <div className="menu__card-content">{children}</div>
  </div>
);
export default Card
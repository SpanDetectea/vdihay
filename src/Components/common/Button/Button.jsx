import './Button.scss'

function Button({onClick}) {
    return <button className="neon-button" onClick={onClick}>Забронировать</button>;
}

export default Button;
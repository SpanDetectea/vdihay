import './Button.scss'

function Button({onClick, text}) {
    return <button className="neon-button" onClick={onClick}>{text}</button>;
}

export default Button;
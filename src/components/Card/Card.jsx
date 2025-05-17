import './Card.css'

function Card({ children }) {
    return (
        <div className="item">
            {children}
        </div>
    )
}

export default Card;
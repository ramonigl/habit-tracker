import styles from './Card.module.css'

function Card({ children, className }) {
    return (
        <div className={styles[className]}>
            {children}
        </div>
    )
}

export default Card;
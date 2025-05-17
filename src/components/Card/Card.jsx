import styles from './Card.module.css'

function Card({ children }) {
    return (
        <div className={styles.item}>
            {children}
        </div>
    )
}

export default Card;
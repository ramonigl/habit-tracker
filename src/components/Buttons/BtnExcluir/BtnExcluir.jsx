import styles from './BtnExcluir.module.css';

function BtnExcluir({ text, className = "btn", onClick, ...props }) {
    return (
        <button type="button" className={styles[className]} onClick={onClick}>
            {text}
        </button>
    );
}

export default BtnExcluir;
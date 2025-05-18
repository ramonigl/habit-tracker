import styles from './BtnAddCategorias.module.css';

function BtnAddCategoria(props) {
    return (
        <>
            <button className={styles.btn}>
                <span>{props.text}</span>
            </button>
        </>
    );
}

export default BtnAddCategoria;
import styles from './BtnAddCategorias.module.css';

function BtnAddCategorias(props) {
    return (
        <>
            <button className={styles.btn} onClick={props.onClick}>
                <span>{props.text}</span>
            </button>
        </>
    );
}

export default BtnAddCategorias;
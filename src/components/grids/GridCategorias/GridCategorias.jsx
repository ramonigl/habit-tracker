import styles from './GridCategorias.module.css';

function GridCategorias({ children }) {
    return (
        <>
            <div className={styles.categorias}>
                {children}
            </div>
        </>
    );
}

export default GridCategorias;
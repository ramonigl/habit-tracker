import styles from './PageContainer.module.css';
import BtnVoltar from '../../Buttons/BtnVoltar/BtnVoltar.jsx';

function PageContainer({ className, children, titulo }) {
    return (
        <>
            <div className={styles.cabecalho}>
                <BtnVoltar />
                <h1>{titulo}</h1>
            </div>
                <div className={styles[className]}>
                    {children}
                </div >
        </>
    );
}

export default PageContainer;
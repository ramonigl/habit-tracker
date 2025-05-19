import styles from './BtnVoltar.module.css';
import { useNavigate } from 'react-router-dom';

function BtnVoltar() {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1); // Volta uma página no histórico
    };

    return (
        <button type="button" className={styles.btn} onClick={handleVoltar}>
            voltar
        </button>
    );
}

export default BtnVoltar;
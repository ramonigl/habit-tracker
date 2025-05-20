import styles from './BtnVoltar.module.css';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';



function BtnVoltar() {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate(-1); // Volta uma página no histórico
    };

    return (

        <button type="button" className={styles.btn} onClick={handleVoltar}>
            <IoIosArrowBack size={22}/>
        </button>

    );
}

export default BtnVoltar;
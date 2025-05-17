import styles from './style.module.css';
import Card from '../../components/Card/Card.jsx'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className={styles.container}>
                <Card>
                    <div className={styles.subitem}>
                        <h1>Habit Tracker</h1>
                    </div>
                    <div className={styles.subitem}>
                        <Link className={styles.buttonLink} to="/dashboard">Dashboard</Link>
                        <Link className={styles.buttonLink} to="/categorias">Categorias</Link>
                        <Link className={styles.buttonLink} to="/metas">Metas</Link>
                    </div>
                </Card >
            </div>
        </>
    );

}

export default Home;
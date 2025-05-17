import './style.css';
import Card from '../../components/Card/Card.jsx'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="container">
                <Card>
                    <div className="subitem">
                        <h1>Habit Tracker</h1>
                    </div>
                    <div className="subitem">
                        <Link className="button-link" to="/dashboard">Dashboard</Link>
                        <Link className="button-link" to="/categorias">Categorias</Link>
                        <Link className="button-link" to="/metas">Metas</Link>
                    </div>
                </Card >
            </div>
        </>
    );

}

export default Home;
import styles from './style.module.css';
import GridContainer from '../../components/GridContainer/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx'
import CategoriasVisuais from '../../components/CategoriasVisuais/CategoriasVisuais.jsx'
import NovaCategoriaForm from '../../components/Forms/NovaCategoriaForm.jsx';
import RegistrarAtividadeForm from '../../components/Forms/RegistrarAtividadeForm.jsx';

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <GridContainer className="dashboard">
                <Card>
                </Card>
                <Card>
                    <div className={styles.subitem}>
                        <h2>Categorias</h2>
                        <CategoriasVisuais />
                        <NovaCategoriaForm/>
                    </div>
                    <div className={styles.subitem}>
                        <h2>Registrar Atividade</h2>
                        <RegistrarAtividadeForm />
                    </div>
                </Card>
            </GridContainer>
        </>
    );
}

export default Dashboard;
import styles from './style.module.css';
import PageContainer from '../../components/grids/PageContainer/PageContainer.jsx';
import Card from '../../components/Card/Card.jsx'

function Dashboard() {
    return (
        <>
            <PageContainer titulo="Dashboard" className="dashboard">
                <Card className="container">
                </Card>
                
            </PageContainer>
        </>
    );
}

export default Dashboard;
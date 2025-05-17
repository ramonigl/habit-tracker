import './style.css';
import GridContainer from '../../components/GridContainer/GridContainer.jsx';
import Card from '../../components/Card/Card.jsx'

function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <GridContainer className="dashboard">
                <Card>
                </Card>
                <Card>
                   
                </Card>
            </GridContainer>
        </>
    );
}

export default Dashboard;
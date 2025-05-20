import PageContainer from "../../components/grids/PageContainer/PageContainer";
import Card from "../../components/Card/Card";

function Metas() {
    return (
        <>
            <PageContainer titulo="Metas" className="container">
                <Card className="container">
                    <h2>Nome categoria</h2>
                    <h3>Descricao da meta</h3>
                    <div>
                        tempo feito
                        tempo meta
                    </div>
                </Card>
            </PageContainer>
        </>
    );
}

export default Metas;
import styles from './style.module.css';
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
                    <div className={styles.subitem}>
                        <h2 className={styles.h2}>Categorias</h2>
                        <div id="categorias-visuais">
                            <button className={styles.btn} id="btn-nova-categoria">
                                <span id="texto-btn-nova-categoria">+</span>
                            </button>
                        </div>
                        <form id="adicionar-nova-categoria" className="hidden">
                            <div className={styles['input-box']}>
                                <label htmlFor="categoria">Adicione uma categoria</label>
                                <input type="text" name="categoria" id="categoria" required placeholder="Ex: Estudos" />
                            </div>
                            <button type="submit" className={styles.btn} id="btn-add-categoria">
                                Adicionar categoria
                            </button>
                        </form>
                    </div>
                    <div className={styles.subitem}>
                        <h2 className={styles.h2}>Registrar Atividade</h2>
                        <form id="form-atividade">
                            <div className={styles['form-container']}>
                                <div className={styles['form-group']}>
                                    <div className={styles['input-box']}>
                                        <label htmlFor="nome-atividade">Atividade</label>
                                        <input type="text" id="nome-atividade" name="nome-atividade" required placeholder="Ex: Estudar JavaScript" />
                                    </div>
                                    <div className={styles['input-box']}>
                                        <label htmlFor="select-categoria">Categoria</label>
                                        <select id="select-categoria" name="select-categoria" required placeholder="Ex: Estudos"></select>
                                    </div>
                                </div>
                                <div className={styles['form-group']}>
                                    <div className={styles['input-box']}>
                                        <label htmlFor="tempo">Tempo</label>
                                        <input type="number" name="tempo" id="tempo" />
                                    </div>
                                    <div className={styles['input-box']}>
                                        <label htmlFor="data-atividade">Data</label>
                                        <input type="date" id="data-atividade" name="data-atividade" required />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className={styles.btn}>Adicionar Atividade</button>
                        </form>
                    </div>
                </Card>
            </GridContainer>
        </>
    );
}

export default Dashboard;
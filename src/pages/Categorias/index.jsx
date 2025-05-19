import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PageContainer from '../../components/grids/PageContainer/PageContainer.jsx';
import Categoria from '../../components/Categoria/Categoria.jsx';
import Card from '../../components/Card/Card.jsx'
import MostraFormCategorias from '../../components/Events/MostraFormCategorias/MostraFormCategorias.jsx';
import RegistrarAtividadeForm from '../../components/Forms/RegistrarAtividadeForm.jsx';
import NovaCategoriaForm from '../../components/Forms/NovaCategoriaForm.jsx';
import GridCategorias from '../../components/grids/GridCategorias/GridCategorias.jsx';
import styles from './style.module.css';


function Categorias() {
     const categorias = useSelector(state => state.categorias.categorias);

    return (
        <>
            <PageContainer titulo="Categorias" className="categorias">
                <Card className="container">
                    <GridCategorias>
                        {categorias.map((cat, i) => (
                            <Categoria key={cat.id} categoria={cat} />
                        ))}
                    </GridCategorias>
                </Card>
                <Card className="container">
                    <div className={styles.subitem}>
                        <h2>Adicionar</h2>
                        <NovaCategoriaForm />
                        {/*<MostraFormCategorias />*/}
                    </div>
                    <div className={styles.subitem}>
                        <h2>Registrar Atividade</h2>
                        <RegistrarAtividadeForm />
                    </div>
                </Card>
            </PageContainer>

        </>
    );
}

export default Categorias;
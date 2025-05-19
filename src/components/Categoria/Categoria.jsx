import style from './Categoria.module.css';
import { useState } from 'react';
import Card from '../Card/Card';
import TabelaAtividades from '../TabelaAtividades/TabelaAtividades';

function Categoria({ categoria }) {
    const [mostrarModal, setMostrarModal] = useState(false);

    const Modal = () => (
        <div className={style.modal}>
            <Card className="containerModal">
                <div>
                    <div className={style.cabecalhoModal}>
                        <h1>{categoria.nome}</h1>
                        <button className={style.fechar} onClick={() => setMostrarModal(false)}>Fechar</button>
                    </div>
                    <p className={style.idCategoria}>ID: {categoria.id}</p>
                </div>
                <TabelaAtividades idBuscado={categoria.id} />
            </Card>

        </div>
    );

    return (
        <>
            {mostrarModal && <Modal />}
            <div className={style.categoria} onClick={() => setMostrarModal(true)}>
                <h2>{categoria.nome}</h2>
                <p className={style.idCategoria}>ID:{categoria.id}</p>
            </div>
        </>
    );
}

export default Categoria;
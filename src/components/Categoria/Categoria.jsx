import style from './Categoria.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removerCategoriaEAtividades } from '../../store/categSlice';
import Card from '../Card/Card';
import TabelaAtividades from '../TabelaAtividades/TabelaAtividades';

function Categoria({ categoria }) {
    const [mostrarModal, setMostrarModal] = useState(false);
    const dispatch = useDispatch();

    const tempoTotal = categoria.tempo || 0;
    const horas = Math.floor(tempoTotal / 60);
    const minutos = tempoTotal % 60;
    const tempoFormatado =
        horas > 0
            ? `${horas}h ${minutos}min`
            : `${minutos}min`;

    const handleExcluir = () => {
        if (window.confirm('Tem certeza que deseja excluir esta categoria? Todas as atividades relacionadas serão apagadas.')) {
            dispatch(removerCategoriaEAtividades(categoria.id));
            setMostrarModal(false);
        }
    };

    const Modal = () => (
        <div className={style.modal}>
            <Card className="containerModal">
                <div>
                    <div className={style.cabecalhoModal}>
                        <h1>{categoria.nome}</h1>
                        <div className={style.acoes}>
                            <button onClick={handleExcluir} className={style.excluir}>Excluir</button>
                            <button className={style.fechar} onClick={() => setMostrarModal(false)}>Fechar</button>
                        </div>
                    </div>
                    <p className={style.idCategoria}>ID: {categoria.id}</p>
                    <p className={style.tempoCategoria}>Tempo total: <strong>{tempoFormatado}</strong></p>
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
                <p className={style.idCategoria}>ID: {categoria.id}</p>
                <p className={style.tempoCategoria}>
                    Tempo Dedicado: <br /><strong>{tempoFormatado}</strong>
                </p>
            </div>
        </>
    );
}

export default Categoria;
import { useSelector, useDispatch } from 'react-redux';
import { removerAtividadeEAtualizarTempo } from '../../store/atividadesSlice';
import style from './TabelaAtividades.module.css';

function TabelaAtividades({ idBuscado }) {
    const categorias = useSelector(state => state.categorias.categorias);
    const atividades = useSelector(state => state.atividades.atividades);
    const dispatch = useDispatch();

    const categoria = categorias.find(cat => String(cat.id) === String(idBuscado));
    const atividadesDaCategoria = atividades.filter(at => String(at.categoriaId) === String(idBuscado));

    if (!categoria) return <p>Categoria não encontrada.</p>;

    return (
        <div className={style.tabelaWrapper}>
            <table className={style.tabela}>
                <thead>
                    <tr>
                        <th>Atividades</th>
                        <th>Tempo</th>
                        <th>Data</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {atividadesDaCategoria.length === 0 ? (
                        <tr>
                            <td colSpan="4">Nenhuma atividade cadastrada.</td>
                        </tr>
                    ) : (
                        atividadesDaCategoria.map((at, i) => (
                            <tr key={i} className={style.lista}>
                                <td>{at.nome}</td>
                                <td>{at.tempo} min</td>
                                <td>{at.data}</td>
                                <td>
                                    <button
                                        type="button"
                                        className={style.botaoApagar}
                                        onClick={() => {
                                            const idx = atividades.findIndex(
                                                a =>
                                                    a.nome === at.nome &&
                                                    a.categoriaId === at.categoriaId &&
                                                    a.tempo === at.tempo &&
                                                    a.data === at.data
                                            );
                                            if (idx !== -1) dispatch(removerAtividadeEAtualizarTempo(at, idx));
                                        }}
                                    >
                                        Apagar
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TabelaAtividades;
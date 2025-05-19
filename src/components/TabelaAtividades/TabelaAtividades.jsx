import { useState, useEffect } from "react";
import style from './TabelaAtividades.module.css';

function TabelaAtividades({ idBuscado }) {
    const [categoria, setCategoria] = useState(null);
    const [atividadesDaCategoria, setAtividadesDaCategoria] = useState([]);

    useEffect(() => {
        const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
        const cat = categorias.find(cat => String(cat.id) === String(idBuscado));
        setCategoria(cat);

        const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
        const filtradas = atividades.filter(at => String(at.categoriaId) === String(idBuscado));
        setAtividadesDaCategoria(filtradas);
    }, [idBuscado]);

    if (!categoria) return <p>Categoria não encontrada.</p>;

    return (
        <>
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
                                    <td>{at.tempo}</td>
                                    <td>{at.data}</td>
                                    <td>
                                        <button type="button" className={style.botaoApagar}>Apagar</button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TabelaAtividades;
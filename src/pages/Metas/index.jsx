import { useSelector } from "react-redux";
import { useState } from "react";
import PageContainer from "../../components/grids/PageContainer/PageContainer";
import Card from "../../components/Card/Card";
import Button from "../../components/Buttons/Button/Button";
import InputSelect from "../../components/Inputs/InputSelect";
import InputBox from "../../components/Inputs/InputBox";
import style from './style.module.css'

function formatarTempo(minutos) {
    const h = Math.floor(minutos / 60);
    const m = minutos % 60;
    if (h > 0 && m > 0) return `${h}h ${m}min`;
    if (h > 0) return `${h}h`;
    return `${m}min`;
}

function Metas() {
    const categorias = useSelector(state => state.categorias.categorias);
    const [categoriaId, setCategoriaId] = useState('');
    const [tempo, setTempo] = useState('');

    const getMetas = () => JSON.parse(localStorage.getItem('metas')) || [];
    const saveMetas = (metas) => localStorage.setItem('metas', JSON.stringify(metas));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!categoriaId || !tempo) return;

        const novaMeta = {
            id: Date.now(),
            categoriaId,
            tempo: Number(tempo)
        };

        const metas = getMetas();
        metas.push(novaMeta);
        saveMetas(metas);

        setCategoriaId('');
        setTempo('');
        alert('Meta criada com sucesso!');
    };

    return (
        <>
            <PageContainer titulo="Metas" className="categorias">
                <Card className="container">
                    <h2>Metas criadas</h2>
                    <div className={style.metasList}>
                        {getMetas().length === 0 ? (
                            <p>Nenhuma meta criada ainda.</p>
                        ) : (
                            getMetas().map(meta => {
                                const categoria = categorias.find(cat => String(cat.id) === String(meta.categoriaId));
                                return (
                                    <Card key={meta.id} className="container" style={{ marginBottom: '16px' }}>
                                        <h3>
                                            {categoria ? categoria.nome : 'Categoria removida'}
                                        </h3>
                                        {categoria && (
                                            <>
                                                <p>
                                                    Cumprido: <strong>{categoria.tempo || 0}</strong> / <strong>{meta.tempo}</strong> minutos
                                                </p>
                                                {/* Barra de progresso */}
                                                <div style={{
                                                    background: '#eee',
                                                    borderRadius: '8px',
                                                    height: '16px',
                                                    width: '100%',
                                                    marginBottom: '8px',
                                                    overflow: 'hidden'
                                                }}>
                                                    <div style={{
                                                        background: '#4caf50',
                                                        width: `${Math.min(100, (categoria.tempo || 0) / meta.tempo * 100)}%`,
                                                        height: '100%',
                                                        transition: 'width 0.3s'
                                                    }} />
                                                </div>
                                            </>
                                        )}
                                        {!categoria && (
                                            <p>Categoria removida</p>
                                        )}
                                    </Card>
                                );
                            })
                        )}
                    </div>
                </Card>
                <Card className="container">
                    <h2>Crie uma nova meta</h2>
                    <form className={style.form} onSubmit={handleSubmit}>
                        <div>
                            <InputSelect
                                id="select-categoria"
                                name="selectCategoria"
                                label="Categoria"
                                value={categoriaId}
                                required
                                options={[
                                    { value: '', label: 'Selecione uma categoria' },
                                    ...categorias.map(cat => ({
                                        value: cat.id,
                                        label: cat.nome
                                    }))
                                ]}
                                onChange={(e) => setCategoriaId(e.target.value)}
                            />
                            <InputBox
                                type="number"
                                id="tempo"
                                name="tempo"
                                label="Tempo"
                                value={tempo}
                                required
                                onChange={(e) => setTempo(e.target.value)}
                            />
                        </div>
                        <Button type="submit" text="Salvar meta" className="btn" />
                    </form>
                </Card>
            </PageContainer>
        </>
    );
}

export default Metas;
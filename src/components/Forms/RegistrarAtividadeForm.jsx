import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarAtividade } from '../../store/atividadesSlice';
import formStyles from './Form.module.css';
import InputBox from '../Inputs/InputBox.jsx';
import InputSelect from '../Inputs/InputSelect.jsx';
import Button from '../Buttons/Button/Button';


function RegistrarAtividadeForm() {
    const [nome, setNome] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [tempo, setTempo] = useState('');
    const [data, setData] = useState('');

    const categorias = useSelector(state => state.categorias.categorias);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        const atividade = { nome, categoriaId, tempo, data };
        dispatch(adicionarAtividade(atividade));
        setNome('');
        setCategoriaId('');
        setTempo('');
        setData('');
    };

    return (
        <form id="form-atividade" onSubmit={handleSubmit}>
            <div className={formStyles.formContainer}>
                <div className={formStyles.formGroup}>
                    <InputBox
                        type="text"
                        id="nome-atividade"
                        name="nomeAtividade"
                        label="Atividade"
                        required
                        placeholder="Ex: Estudar JavaScript"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
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
                </div>
                <div className={formStyles.formGroup}>
                    <InputBox
                        type="number"
                        id="tempo"
                        name="tempo"
                        label="Tempo"
                        value={tempo}
                        onChange={(e) => setTempo(e.target.value)}
                    />
                    <InputBox
                        type="date"
                        id="data-atividade"
                        name="dataAtividade"
                        label="Data"
                        required
                        value={data}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <Button type="submit" className="btn" text="Adicionar Atividade" />
            </div>
        </form>
    );
}

export default RegistrarAtividadeForm;
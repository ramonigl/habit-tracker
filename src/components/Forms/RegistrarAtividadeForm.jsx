import { useState } from 'react';
import formStyles from './Form.module.css';
import InputBox from '../Inputs/InputBox.jsx';
import InputSelect from '../Inputs/InputSelect.jsx';
import Button from '../Buttons/Button/Button';

function RegistrarAtividadeForm() {

    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [tempo, setTempo] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const atividade = {
            nome,
            categoria,
            tempo,
            data
        };

        const atividades = JSON.parse(localStorage.getItem('atividades')) || [];
        atividades.push(atividade);
        localStorage.setItem('atividades', JSON.stringify(atividades));

        setNome('');
        setCategoria('');
        setTempo('');
        setData('');
    }

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
                        type="select"
                        id="select-categoria"
                        name="selectCategoria"
                        label="Categoria"
                        value={categoria}
                        required
                        options={[
                            { value: '', label: 'Selecione uma categoria' },
                            { value: 'estudos', label: 'Estudos' },
                            { value: 'trabalho', label: 'Trabalho' },
                            { value: 'lazer', label: 'Lazer' }]}
                        onChange={(e) => setCategoria(e.target.value)}
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
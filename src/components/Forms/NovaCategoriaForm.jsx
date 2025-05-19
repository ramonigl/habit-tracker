import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adicionarCategoria } from '../../store/categSlice.js';
import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaCategoriaForm() {
    const [nomeCategoria, setNomeCategoria] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const categoria = {
            id: Date.now(),
            nome: nomeCategoria,
            tempo: 0,
        };
        dispatch(adicionarCategoria(categoria));
        setNomeCategoria('');

    };

    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
            <InputBox
                id="categoria"
                type="text"
                label="Adicione uma categoria"
                name="categoria"
                required
                placeholder="Ex.: Estudos"
                value={nomeCategoria}
                onChange={(e) => setNomeCategoria(e.target.value)}
            />
            <Button type="submit" text="Adicionar Categoria" className="btn" />
        </form>
    );
}

export default NovaCategoriaForm;
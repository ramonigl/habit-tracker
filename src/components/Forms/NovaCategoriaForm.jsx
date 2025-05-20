import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarCategoria } from '../../store/categSlice.js';
import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaCategoriaForm() {
    const [nomeCategoria, setNomeCategoria] = useState('');
    const dispatch = useDispatch();
    const categorias = useSelector((state) => state.categorias.categorias);

    const handleSubmit = (e) => {
        e.preventDefault();

        const existe = categorias.some(
            (cat) => cat.nome.toLowerCase() === nomeCategoria.trim().toLowerCase()
        );
        if (existe) {
            alert('Já existe uma categoria com esse nome!');
            return;
        }

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
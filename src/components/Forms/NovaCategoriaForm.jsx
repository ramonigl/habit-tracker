import { useState } from 'react';
import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaCategoriaForm({ onSubmitSuccess }) {

    const [nomeCategoria, setNomeCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const categoria = {
            id: Date.now(),
            nome: nomeCategoria
        };

        const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
        categorias.push(categoria);
        localStorage.setItem('categorias', JSON.stringify(categorias));

        setNomeCategoria('');

        if (onSubmitSuccess) onSubmitSuccess();
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
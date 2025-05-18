import { useState } from 'react';
import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaCategoriaForm({ onSubmitSuccess }) {

    const [categoria, setCategoria] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!categoria.trim()) return;

        const categorias = JSON.parse(localStorage.getItem('categorias')) || [];
        categorias.push(categoria);
        localStorage.setItem('categorias', JSON.stringify(categorias));

        setCategoria('');

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
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
            />
            <Button type="submit" text="Adicionar Categoria" className="btn" />
        </form>
    );
}

export default NovaCategoriaForm;
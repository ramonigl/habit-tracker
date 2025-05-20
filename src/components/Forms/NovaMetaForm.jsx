import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { adicionarCategoria } from '../../store/categSlice.js';
import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaMetaForm() {
    return (
        <form className={formStyles.form} onSubmit={handleSubmit}>
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
        </form>
    );
}

export default NovaMetaForm;
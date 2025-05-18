import formStyles from './Form.module.css'
import InputBox from '../Inputs/InputBox.jsx';
import Button from '../Buttons/Button/Button.jsx';

function NovaCategoriaForm() {
    return (
        <form id="adicionar-nova-categoria" className={`${formStyles.form} ${formStyles.hidden}`}>
            <InputBox
                id="categoria"
                type="text"
                label="Adicione uma categoria"
                name="categoria"
                required
                placeholder="Ex.: Estudos" />
            <Button type="submit" text="Adicionar Categoria" className="btn" />
        </form>
    );
}

export default NovaCategoriaForm;
import formStyles from './Form.module.css';
import InputBox from '../Inputs/InputBox.jsx';
import InputSelect from '../Inputs/InputSelect.jsx';
import Button from '../Buttons/Button/Button';

function RegistrarAtividadeForm() {
    return (
        <form id="form-atividade">
            <div className={formStyles.formContainer}>
                <div className={formStyles.formGroup}>
                    <InputBox
                        type="text"
                        id="nome-atividade"
                        name="nomeAtividade"
                        label="Atividade"
                        required
                        placeholder="Ex: Estudar JavaScript"
                    />
                    <InputSelect
                        type="select"
                        id="select-categoria"
                        name="selectCategoria"
                        label="Categoria"
                        required
                        options={[
                            { value: '', label: 'Selecione uma categoria' },
                            { value: 'estudos', label: 'Estudos' },
                            { value: 'trabalho', label: 'Trabalho' },
                            { value: 'lazer', label: 'Lazer' }]} 
                    />
                </div>
                <div className={formStyles.formGroup}>
                    <InputBox
                        type="number"
                        id="tempo"
                        name="tempo"
                        label="Tempo"
                    />
                    <InputBox
                        type="date"
                        id="data-atividade"
                        name="dataAtividade"
                        label="Data"
                        required
                    />
                </div>
            </div>
            <Button type="submit" className="btn" text="Adicionar Atividade" />
        </form>
    );
}

export default RegistrarAtividadeForm;
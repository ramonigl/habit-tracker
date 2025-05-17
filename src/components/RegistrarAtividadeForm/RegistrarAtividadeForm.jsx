function RegistrarAtividadeForm() {
    return (
        <form id="form-atividade">
            <div className="form-container">
                <div className="form-group">
                    <div className="input-box">
                        <label htmlFor="nome-atividade">Atividade</label>
                        <input type="text" id="nome-atividade" name="nome-atividade" required placeholder="Ex: Estudar JavaScript" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="select-categoria">Categoria</label>
                        <select id="select-categoria" name="select-categoria" required placeholder="Ex: Estudos"></select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-box">
                        <label htmlFor="tempo">Tempo</label>
                        <input type="number" name="tempo" id="tempo" />
                    </div>
                    <div className="input-box">
                        <label htmlFor="data-atividade">Data</label>
                        <input type="date" id="data-atividade" name="data-atividade" required />
                    </div>
                </div>
            </div>
            <button type="submit" className="btn">Adicionar Atividade</button>
        </form>
    );
}

export default RegistrarAtividadeForm;   
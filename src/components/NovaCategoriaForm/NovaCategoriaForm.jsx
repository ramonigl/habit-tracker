function NovaCategoriaForm() {
    return (
        <form id="adicionar-nova-categoria" className="hidden">
            <div className="input-box">
                <label htmlFor="categoria">Adicione uma categoria</label>
                <input type="text" name="categoria" id="categoria" required placeholder="Ex: Estudos" />
            </div>
            <button type="submit" className="btn" id="btn-add-categoria">
                Adicionar categoria
            </button>
        </form>
    );
}

export default NovaCategoriaForm;
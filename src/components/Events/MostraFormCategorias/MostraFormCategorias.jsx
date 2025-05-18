import { useState } from 'react';
import BtnAddCategorias from '../../Buttons/BtnAddCategorias/BtnAddCategorias';
import NovaCategoriaForm from '../../Forms/NovaCategoriaForm.jsx';

function MostraFormCategorias() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    function toggleForm() {
        setMostrarFormulario((prev) => !prev);
    }

    return (
        <>
            <BtnAddCategorias
                text={mostrarFormulario ? "Fechar" : "+ Nova Categoria"} 
                onClick={toggleForm}
            />
            {mostrarFormulario && <NovaCategoriaForm onSubmitSuccess={toggleForm}/>}
        </>
    );
}

export default MostraFormCategorias;
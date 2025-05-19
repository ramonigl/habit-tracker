import { createSlice } from '@reduxjs/toolkit';
import { removerAtividadesPorCategoria } from './atividadesSlice';

const initialState = {
  categorias: JSON.parse(localStorage.getItem('categorias')) || []
};

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    adicionarCategoria: (state, action) => {
      state.categorias.push(action.payload);
      localStorage.setItem('categorias', JSON.stringify(state.categorias));
    },
    atualizarTempoCategoria: (state, action) => {
      const { categoriaId, tempoDelta } = action.payload;
      const categoria = state.categorias.find(cat => String(cat.id) === String(categoriaId));
      if (categoria) {
        categoria.tempo = (categoria.tempo || 0) + tempoDelta;
        localStorage.setItem('categorias', JSON.stringify(state.categorias));
      }
    },
    removerCategoria: (state, action) => {
      state.categorias = state.categorias.filter(c => c.id !== action.payload);
      localStorage.setItem('categorias', JSON.stringify(state.categorias));
    }
  }
});

export const removerCategoriaEAtividades = (categoriaId) => (dispatch) => {
  dispatch(categoriasSlice.actions.removerCategoria(categoriaId));
  dispatch(removerAtividadesPorCategoria(categoriaId));
};

export const { adicionarCategoria, atualizarTempoCategoria } = categoriasSlice.actions;
export default categoriasSlice.reducer;
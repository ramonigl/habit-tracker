import { createSlice } from '@reduxjs/toolkit';

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
    }
  }
});

export const { adicionarCategoria } = categoriasSlice.actions;
export default categoriasSlice.reducer;
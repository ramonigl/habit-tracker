import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  atividades: JSON.parse(localStorage.getItem('atividades')) || []
};

const atividadesSlice = createSlice({
  name: 'atividades',
  initialState,
  reducers: {
    adicionarAtividade: (state, action) => {
      state.atividades.push(action.payload);
      localStorage.setItem('atividades', JSON.stringify(state.atividades));
    },
    removerAtividade: (state, action) => {
      state.atividades = state.atividades.filter((_, idx) => idx !== action.payload);
      localStorage.setItem('atividades', JSON.stringify(state.atividades));
    }
  }
});

export const { adicionarAtividade, removerAtividade } = atividadesSlice.actions;
export default atividadesSlice.reducer;
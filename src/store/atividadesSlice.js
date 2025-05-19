import { createSlice } from '@reduxjs/toolkit';
import { atualizarTempoCategoria } from './categSlice';

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
      state.atividades.splice(action.payload, 1);
      localStorage.setItem('atividades', JSON.stringify(state.atividades));
    },
    removerAtividadesPorCategoria: (state, action) => {
      state.atividades = state.atividades.filter(
        at => String(at.categoriaId) !== String(action.payload)
      );
      localStorage.setItem('atividades', JSON.stringify(state.atividades));
    },
  }
});


export const { adicionarAtividade, removerAtividade, removerAtividadesPorCategoria } = atividadesSlice.actions;

// Thunks para atualizar o tempo da categoria ao adicionar/remover atividade
export const adicionarAtividadeEAtualizarTempo = (atividade) => (dispatch) => {
  dispatch(adicionarAtividade(atividade));
  dispatch(atualizarTempoCategoria({
    categoriaId: atividade.categoriaId,
    tempoDelta: Number(atividade.tempo)
  }));
};

export const removerAtividadeEAtualizarTempo = (atividade, idx) => (dispatch) => {
  dispatch(removerAtividade(idx));
  dispatch(atualizarTempoCategoria({
    categoriaId: atividade.categoriaId,
    tempoDelta: -Number(atividade.tempo)
  }));
};

export default atividadesSlice.reducer;
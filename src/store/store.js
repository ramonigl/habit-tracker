import { configureStore } from '@reduxjs/toolkit';
import categoriasReducer from './categoriasSlice.js';
import atividadesReducer from './atividadesSlice.js';

export default configureStore({
  reducer: {
    categorias: categoriasReducer,
    atividades: atividadesReducer
  }
});
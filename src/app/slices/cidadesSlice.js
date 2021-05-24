import { createSlice } from '@reduxjs/toolkit';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '../constants';

const initialState = {
  data: null,
  configuracoes: null,
  status: IDLE,
  error: null,
};

const cidadesSlice = createSlice({
  name: 'cidades',
  initialState,
  reducers: {
    definirCidade(state, action) {
      state.data = action.payload;
    },
    desfazerCidade(state, action) {
      state.data = null;
    },
  },
});

export const selectCidade = (state) => state.cidades;

export const { definirCidade } = cidadesSlice.actions;

export default cidadesSlice.reducer;

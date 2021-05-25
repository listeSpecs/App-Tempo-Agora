import { createSlice } from '@reduxjs/toolkit';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '../constants';

const initialState = {
  data: null,
  status: IDLE,
  error: null,
};

const cidadesSlice = createSlice({
  name: 'cidades',
  initialState,
  reducers: {
    setInCidade(state, action) {
      state.data = action.payload;
    },
    setOutCidade(state, action) {
      state.data = null;
    },
  },
});

export const selectCidade = (state) => state.cidades;

export const { setInCidade, setOutCidade } = cidadesSlice.actions;

export default cidadesSlice.reducer;

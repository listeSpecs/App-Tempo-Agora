import { createSlice } from '@reduxjs/toolkit';
import {
  FAILED, IDLE, LOADING, SUCCEEDED,
} from '../constants';

const initialState = {
  data: [],
  status: IDLE,
  error: null,
};

const cidadesSlice = createSlice({
  name: 'cidades',
  initialState,
  reducers: {
    setInCidade(state, action) {
      state.data = [...state.data, action.payload];
    },
    setOutCidade(state, action) {
      if (action.payload) {
        state.data = state.data.filter(({ Endereco }) => Endereco !== action.payload.Endereco);
      }
    },
    updateWeather(state, action) {
      state.data.map(({ Endereco }, index) => {
        if (Endereco === action.payload.Endereco) {
          state.data[index].Temperatura = action.payload.Temperatura;
        }
      });
    },
  },
});

export const selectCidade = (state) => state.cidades;

export const { setInCidade, setOutCidade, updateWeather } = cidadesSlice.actions;

export default cidadesSlice.reducer;

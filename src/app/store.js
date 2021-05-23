
import { configureStore } from '@reduxjs/toolkit'
import cidadesReducer from './slices/cidadesSlice';

export default configureStore({
  reducer: {
    cidades: cidadesReducer,
  },
});

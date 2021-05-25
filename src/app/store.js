import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import cidadesReducer from './slices/cidadesSlice';

const reducers = combineReducers({
  cidades: cidadesReducer,
});

const middlewares = getDefaultMiddleware({
  serializableCheck: false,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: middlewares,
});

export default store;

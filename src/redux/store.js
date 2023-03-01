import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { reposReducer } from './repos/repos-slice';
import { themeReducer } from './themeswitch/themeswitch-slice';

const persistConfig = {
  key: 'repos',
  whitelist: ['repos'],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reposReducer);

export const store = configureStore({
  reducer: { repos: persistedReducer, theme: themeReducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

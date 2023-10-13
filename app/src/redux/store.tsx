import { combineReducers, configureStore } from '@reduxjs/toolkit'
import drugsReducer from './reducers/drugsSlice'
import notificationReducer from './reducers/notificationSlice'
import streamChannelReducer from './reducers/streamChannelSlice'
import accountBalanceReducer  from './reducers/accountBalanceSlice'
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const rootReducer = combineReducers({
  drugs: drugsReducer,
  streamChannel: streamChannelReducer,
  notifications: notificationReducer,
  balance: accountBalanceReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 128
      },
    });
  },
})

const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export {store, persistor}
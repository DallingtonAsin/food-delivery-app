import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

import cartSlice from './slices/cartSlice'
import restaurantSlice from './slices/restaurantSlice'
import drugsReducer from './slices/drugsSlice'
import notificationReducer from './slices/notificationSlice'
import streamChannelReducer from './slices/streamChannelSlice'
import accountBalanceReducer  from './slices/accountBalanceSlice'

const rootReducer = combineReducers({
  drugs: drugsReducer,
  streamChannel: streamChannelReducer,
  notifications: notificationReducer,
  balance: accountBalanceReducer,
  cart: cartSlice,
  restaurant: restaurantSlice
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
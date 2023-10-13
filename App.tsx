import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './app/src/navigation/AuthStack'
import AppStackScreen from './app/src/navigation/AppStack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Provider as AuthProvider } from './app/src/context/authContext'
import { Provider as AppProvider } from './app/src/context/appContext'
import { store, persistor, AppDispatch } from './app/src/redux/store'
const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  const [token, setToken] = useState('')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        {token ? (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignedInStack" component={AppStackScreen} />
          </Stack.Group>
        ) : (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </Stack.Group>
        )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
  return (
    <AuthProvider>
      <AppProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </AppProvider>
    </AuthProvider>
  )
}
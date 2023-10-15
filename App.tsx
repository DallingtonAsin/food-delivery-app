import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './app/src/navigation/AuthStack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Provider as AuthProvider } from './app/src/context/authContext'
import { Provider as AppProvider } from './app/src/context/appContext'
import { store, persistor } from './app/src/redux/store'
import AppDrawerStack from './app/src/navigation/AppDrawerStack'
const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  const [token, setToken] = useState('xxx')

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        {token ? (
          <Stack.Group screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SignedInStack" component={AppDrawerStack} />
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
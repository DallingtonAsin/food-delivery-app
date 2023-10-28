import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthStack from './app/src/navigation/AuthStack'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Provider as AuthProvider } from './app/src/context/AuthContext'
import { Provider as AppProvider } from './app/src/context/AppContext'
import { Provider as ProductProvider } from './app/src/context/ProductContext'
import { store, persistor } from './app/src/redux/store'
import AppDrawerStack from './app/src/navigation/AppDrawerStack'
import { useAuth } from './app/src/context'
import AppLoader from './app/src/components/AppLoader'
const Stack = createNativeStackNavigator()

function App(): JSX.Element {

  const { state } = useAuth()

  if (state.isAppLoading) {
    return <AppLoader />
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AuthStack">
        {state.token ? (
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
        <ProductProvider>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </ProductProvider>
      </AppProvider>
    </AuthProvider>
  )
}
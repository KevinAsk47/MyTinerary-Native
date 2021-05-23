import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/Drawer';
import { applyMiddleware, createStore } from "redux"
import mainReducer from "./redux/reducers/mainReducer"
import thunk from "redux-thunk"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import userActions from './redux/actions/userActions'
import { Provider } from "react-redux"

const myStore = createStore(mainReducer, applyMiddleware(thunk))

const App = (props) => {

  useEffect(() => {
    storage()
  }, [])

  const storage = async () => {
    if (!props.user && AsyncStorage.getItem('token')) {
      const tokenAsyncStorage = await AsyncStorage.getItem('token')
      const infoUser = await AsyncStorage.getItem('usuarioLogueado')
      const infoUserConvert = JSON.parse(infoUser)
      const userLoggedInfo = {
        token: tokenAsyncStorage,
        ...infoUserConvert
      }
      props.forzarLoginLocalStore(userLoggedInfo)

      return null
    }
  }

  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = {
  forzarLoginLocalStore: userActions.forzarLoginLocalStore
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/Drawer';
import { applyMiddleware, createStore } from "redux"
import { Provider } from "react-redux"
import mainReducer from "./redux/reducers/mainReducer"
import thunk from "redux-thunk"

const myStore = createStore(mainReducer, applyMiddleware(thunk))

const App = () => {
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </Provider>
  )
}




export default App

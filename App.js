import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './navigation/Drawer';
import { applyMiddleware, createStore } from "redux"
import mainReducer from "./redux/reducers/mainReducer"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

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